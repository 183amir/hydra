# Copyright (c) Facebook, Inc. and its affiliates. All Rights Reserved
import copy
import functools
import os
import platform
import subprocess
import sys
from dataclasses import dataclass
from pathlib import Path
from typing import Iterator, List

import nox
from nox import Session
from nox.logger import logger

BASE = os.path.abspath(os.path.dirname(__file__))

DEFAULT_PYTHON_VERSIONS = ["3.6", "3.7", "3.8", "3.9", "3.10"]
DEFAULT_OS_NAMES = ["Linux", "MacOS", "Windows"]

PYTHON_VERSIONS = os.environ.get(
    "NOX_PYTHON_VERSIONS", ",".join(DEFAULT_PYTHON_VERSIONS)
).split(",")

INSTALL_EDITABLE_MODE = os.environ.get("INSTALL_EDITABLE_MODE", 0)

INSTALL_COMMAND = (
    ["pip", "install", "-e"] if INSTALL_EDITABLE_MODE else ["pip", "install"]
)

# Allow limiting testing to specific plugins
# The list ['ALL'] indicates all plugins
PLUGINS = os.environ.get("PLUGINS", "ALL").split(",")
SKIP_PLUGINS = os.environ.get("SKIP_PLUGINS", "")

SKIP_CORE_TESTS = os.environ.get("SKIP_CORE_TESTS", "0") != "0"
USE_OMEGACONF_DEV_VERSION = os.environ.get("USE_OMEGACONF_DEV_VERSION", "0") != "0"
FIX = os.environ.get("FIX", "0") == "1"
VERBOSE = os.environ.get("VERBOSE", "0")
SILENT = VERBOSE == "0"

nox.options.error_on_missing_interpreters = True


@dataclass
class Plugin:
    name: str
    path: str
    module: str
    source_dir: str
    dir_name: str
    setup_py: str


def get_current_os() -> str:
    current_os = platform.system()
    if current_os == "Darwin":
        current_os = "MacOS"
    return current_os


print(f"Operating system\t:\t{get_current_os()}")
print(f"NOX_PYTHON_VERSIONS\t:\t{PYTHON_VERSIONS}")
print(f"PLUGINS\t\t\t:\t{PLUGINS}")
print(f"SKIP_PLUGINS\t\t\t:\t{SKIP_PLUGINS}")
print(f"SKIP_CORE_TESTS\t\t:\t{SKIP_CORE_TESTS}")
print(f"FIX\t\t\t:\t{FIX}")
print(f"VERBOSE\t\t\t:\t{VERBOSE}")
print(f"INSTALL_EDITABLE_MODE\t:\t{INSTALL_EDITABLE_MODE}")
print(f"USE_OMEGACONF_DEV_VERSION\t:\t{USE_OMEGACONF_DEV_VERSION}")


def _upgrade_basic(session: Session) -> None:
    session.install("--upgrade", "pip", silent=SILENT)
    session.install("--upgrade", "setuptools", silent=SILENT)


def find_dirs(path: str) -> Iterator[str]:
    for file in os.listdir(path):
        fullname = os.path.join(path, file)
        if os.path.isdir(fullname):
            yield fullname


def _print_installed_omegaconf_version(session: Session) -> None:
    pip_list: str = session.run("pip", "list", silent=True)
    for line in pip_list.split("\n"):
        if "omegaconf" in line:
            print(f"Installed omegaconf version: {line}")


def install_hydra(session: Session, cmd: List[str]) -> None:
    # needed for build
    session.install("read-version", silent=SILENT)
    # clean install hydra
    session.chdir(BASE)
    if USE_OMEGACONF_DEV_VERSION:
        session.install("--pre", "omegaconf", silent=SILENT)
    session.run(*cmd, ".", silent=SILENT)
    _print_installed_omegaconf_version(session)
    if not SILENT:
        session.install("pipdeptree", silent=SILENT)
        session.run("pipdeptree", "-p", "hydra-core")


def pytest_args(*args: str) -> List[str]:
    ret = ["pytest"]
    ret.extend(args)
    return ret


def run_pytest(session: Session, directory: str = ".", *args: str) -> None:
    pytest_cmd = pytest_args(directory, *args)
    # silent=False to enable some output on CI
    # (otherwise we risk no-output timeout)
    session.run(*pytest_cmd, silent=False)


def get_setup_python_versions(classifiers: List[str]) -> List[str]:
    pythons = filter(lambda line: "Programming Language :: Python" in line, classifiers)
    return [p[len("Programming Language :: Python :: ") :] for p in pythons]


def get_plugin_os_names(classifiers: List[str]) -> List[str]:
    oses = list(filter(lambda line: "Operating System" in line, classifiers))
    if len(oses) == 0:
        # No Os is specified so all oses are supported
        return DEFAULT_OS_NAMES
    if len(oses) == 1 and oses[0] == "Operating System :: OS Independent":
        # All oses are supported
        return DEFAULT_OS_NAMES
    else:
        return [p.split("::")[-1].strip() for p in oses]


@functools.lru_cache()
def list_plugins(directory: str) -> List[Plugin]:
    blacklist = [".isort.cfg", "examples"]
    _plugins = [
        {"dir_name": x, "path": x}
        for x in sorted(os.listdir(os.path.join(BASE, directory)))
        if x not in blacklist
    ]

    plugins: List[Plugin] = []
    for plugin in _plugins:

        setup_py = os.path.join(BASE, directory, plugin["path"], "setup.py")
        plugin_name = subprocess.run(
            [sys.executable, setup_py, "--name"],
            capture_output=True,
            text=True,
            check=True,
        ).stdout.strip()

        if "hydra_plugins" in os.listdir(os.path.join(BASE, directory, plugin["path"])):
            module = "hydra_plugins." + plugin["dir_name"]
            source_dir = "hydra_plugins"
        else:
            module = plugin["dir_name"]
            source_dir = plugin["dir_name"]

        plugins.append(
            Plugin(
                name=plugin_name,
                path=plugin["path"],
                source_dir=source_dir,
                module=module,
                dir_name=plugin["dir_name"],
                setup_py=setup_py,
            )
        )
    return plugins


def select_plugins_under_directory(session: Session, directory: str) -> List[Plugin]:
    """
    Select all plugins under the current directory that should be tested in this session.
    """
    plugins_under_directory: List[Plugin] = list_plugins(directory)
    return filter_incompatible_plugins(session, plugins_under_directory)


def filter_incompatible_plugins(
    session: Session, plugins: List[Plugin]
) -> List[Plugin]:
    """
    Considers the current Python version and operating systems against the supported ones,
    as well as the user plugins selection (via the PLUGINS environment variable).
    """
    assert session.python is not None, "Session python version is not specified"

    ret = []
    skipped = []
    for plugin in plugins:
        if (
            not (plugin.dir_name in PLUGINS or PLUGINS == ["ALL"])
            or plugin.dir_name in SKIP_PLUGINS
        ):
            skipped.append(f"Deselecting {plugin.dir_name}: User request")
            continue

        classifiers = session.run(
            "python", plugin.setup_py, "--classifiers", silent=True
        ).splitlines()
        plugin_python_versions = get_setup_python_versions(classifiers)
        python_supported = session.python in plugin_python_versions

        plugin_os_names = get_plugin_os_names(classifiers)
        os_supported = get_current_os() in plugin_os_names

        if not python_supported:
            py_str = ", ".join(plugin_python_versions)
            skipped.append(
                f"Deselecting {plugin.dir_name} : Incompatible Python {session.python}. Supports [{py_str}]"
            )
            continue

        # Verify this plugin supports the OS we are testing on, skip otherwise
        if not os_supported:
            os_str = ", ".join(plugin_os_names)
            skipped.append(
                f"Deselecting {plugin.dir_name}: Incompatible OS {get_current_os()}. Supports [{os_str}]"
            )
            continue

        ret.append(plugin)

    for msg in skipped:
        logger.warn(msg)

    if len(ret) == 0:
        logger.warn("No plugins selected")
    return ret


def install_dev_deps(session: Session) -> None:
    session.run("pip", "install", "-r", "requirements/dev.txt", silent=SILENT)


def _black_cmd() -> List[str]:
    black = ["black", "."]
    if not FIX:
        black += ["--check"]
    return black


def _isort_cmd() -> List[str]:
    isort = ["isort", "."]
    if not FIX:
        isort += ["--check", "--diff"]
    return isort


@nox.session(python=PYTHON_VERSIONS)  # type: ignore
def lint(session: Session) -> None:
    _upgrade_basic(session)
    install_dev_deps(session)
    install_hydra(session, ["pip", "install", "-e"])

    apps = _get_standalone_apps_dirs()
    session.log("Installing standalone apps")
    for subdir in apps:
        session.chdir(str(subdir))
        session.run(*_black_cmd(), silent=SILENT)
        session.run(*_isort_cmd(), silent=SILENT)
        session.chdir(BASE)

    session.run(*_black_cmd(), silent=SILENT)

    skiplist = apps + [
        ".git",
        "website",
        "plugins",
        "tools",
        ".nox",
        "hydra/grammar/gen",
        "tools/configen/example/gen",
        "tools/configen/tests/test_modules/expected",
        "temp",
        "build",
        "contrib",
    ]
    isort = _isort_cmd() + [f"--skip={skip}" for skip in skiplist]

    session.run(*isort, silent=SILENT)

    session.run(
        "mypy",
        ".",
        "--strict",
        "--install-types",
        "--non-interactive",
        "--exclude=^examples/",
        "--exclude=^tests/standalone_apps/",
        "--exclude=^tests/test_apps/",
        "--exclude=^tools/",
        "--exclude=^plugins/",
        silent=SILENT,
    )
    session.run("flake8", "--config", ".flake8")
    session.run("yamllint", "--strict", ".")

    mypy_check_subdirs = [
        "examples/advanced",
        "examples/configure_hydra",
        "examples/patterns",
        "examples/instantiate",
        "examples/tutorials/basic/your_first_hydra_app",
        "examples/tutorials/basic/running_your_hydra_app",
        "examples/tutorials/structured_configs",
        "tests/standalone_apps",
        "tests/test_apps",
    ]
    for sdir in mypy_check_subdirs:
        dirs = find_dirs(path=sdir)
        for d in dirs:
            session.run(
                "mypy",
                d,
                "--strict",
                "--install-types",
                "--non-interactive",
                silent=SILENT,
            )

    for sdir in ["tools"]:  # no --strict flag for tools
        dirs = find_dirs(path=sdir)
        for d in dirs:
            session.run(
                "mypy",
                d,
                "--install-types",
                "--non-interactive",
                silent=SILENT,
            )

    # lint example plugins
    lint_plugins_in_dir(session=session, directory="examples/plugins")

    # bandit static security analysis
    session.run("bandit", "--exclude", "./.nox/**", "-ll", "-r", ".", silent=SILENT)


@nox.session(python=PYTHON_VERSIONS)  # type: ignore
def lint_plugins(session: Session) -> None:
    _upgrade_basic(session)
    lint_plugins_in_dir(session, "plugins")


def lint_plugins_in_dir(session: Session, directory: str) -> None:

    install_cmd = ["pip", "install"]
    install_hydra(session, install_cmd)
    plugins = select_plugins_under_directory(session, directory)

    # plugin linting requires the plugins and their dependencies to be installed
    for plugin in plugins:
        cmd = install_cmd + [os.path.join(directory, plugin.path)]
        session.run(*cmd, silent=SILENT)

    install_dev_deps(session)

    session.run("flake8", "--config", ".flake8", directory)
    # Mypy for plugins
    for plugin in plugins:
        path = os.path.join(directory, plugin.path)
        source_dir = plugin.source_dir
        session.chdir(path)
        session.run(*_black_cmd(), silent=SILENT)
        session.run(*_isort_cmd(), silent=SILENT)
        session.chdir(BASE)

        files = []
        for file in ["tests", "example"]:
            abs = os.path.join(path, file)
            if os.path.exists(abs):
                files.append(abs)

        session.run(
            "mypy",
            "--strict",
            "--install-types",
            "--non-interactive",
            f"{path}/{source_dir}",
            "--config-file",
            f"{BASE}/.mypy.ini",
            silent=SILENT,
        )
        session.run(
            "mypy",
            "--strict",
            "--install-types",
            "--non-interactive",
            "--config-file",
            f"{BASE}/.mypy.ini",
            *files,
            silent=SILENT,
        )


@nox.session(python=PYTHON_VERSIONS)  # type: ignore
def test_tools(session: Session) -> None:
    _upgrade_basic(session)
    install_cmd = ["pip", "install"]
    session.install("pytest")
    install_hydra(session, install_cmd)

    tools = [
        x
        for x in sorted(os.listdir(os.path.join(BASE, "tools")))
        if not os.path.isfile(x)
    ]

    for tool in tools:
        tool_path = os.path.join("tools", tool)
        session.chdir(BASE)
        if (Path(tool_path) / "setup.py").exists():
            cmd = list(install_cmd) + ["-e", tool_path]
            session.run(*cmd, silent=SILENT)
            session.run("pytest", tool_path)

    session.chdir(BASE)


def _get_standalone_apps_dirs() -> List[Path]:
    standalone_apps_dir = Path(f"{BASE}/tests/standalone_apps")
    apps = [standalone_apps_dir / subdir for subdir in os.listdir(standalone_apps_dir)]
    apps.append(Path(f"{BASE}/examples/advanced/hydra_app_example"))
    return apps


@nox.session(python=PYTHON_VERSIONS)  # type: ignore
def test_core(session: Session) -> None:
    _upgrade_basic(session)
    install_hydra(session, INSTALL_COMMAND)
    session.install("pytest")

    if not SKIP_CORE_TESTS:
        run_pytest(session, "build_helpers", "tests", *session.posargs)
    else:
        session.log("Skipping Hydra core tests")

    apps = _get_standalone_apps_dirs()
    session.log("Testing standalone apps")
    for subdir in apps:
        session.chdir(subdir)
        session.run(*INSTALL_COMMAND, ".", silent=SILENT)
        run_pytest(session, ".")

    session.chdir(BASE)

    test_plugins_in_directory(
        session,
        install_cmd=INSTALL_COMMAND,
        directory="examples/plugins",
        test_hydra_core=False,
    )


@nox.session(python=PYTHON_VERSIONS)  # type: ignore
def test_plugins(session: Session) -> None:
    _upgrade_basic(session)
    test_plugins_in_directory(
        session=session,
        install_cmd=INSTALL_COMMAND,
        directory="plugins",
        test_hydra_core=True,
    )


def test_plugins_in_directory(
    session: Session, install_cmd: List[str], directory: str, test_hydra_core: bool
) -> None:
    session.install("pytest")
    install_hydra(session, install_cmd)
    selected_plugin = select_plugins_under_directory(session, directory)
    for plugin in selected_plugin:
        cmd = list(install_cmd) + [os.path.join(directory, plugin.path)]
        session.run(*cmd, silent=SILENT)
        if not SILENT:
            session.run("pipdeptree", "-p", plugin.name)

    # Test that we can import Hydra
    session.run("python", "-c", "from hydra import main", silent=SILENT)

    # Test that we can import all installed plugins
    for plugin in selected_plugin:
        session.run("python", "-c", f"import {plugin.module}")

    # Run Hydra tests to verify installed plugins did not break anything
    if test_hydra_core:
        if not SKIP_CORE_TESTS:
            # exclude test_completion for plugins tests.
            # 1. It's tested during normal core tests.
            # 2. it's somewhat fragile and tend to timeout in mac.
            # 3. it's expensive and it's not worth the cost to run it for plugins as well.
            run_pytest(session, "tests", "--ignore=tests/test_completion.py")
        else:
            session.log("Skipping Hydra core tests")

    # Run tests for all installed plugins
    for plugin in selected_plugin:
        # install all other plugins that are compatible with the current Python version
        session.chdir(os.path.join(BASE, directory, plugin.path))
        run_pytest(session)


@nox.session(python="3.8")  # type: ignore
def coverage(session: Session) -> None:
    _upgrade_basic(session)
    coverage_env = {
        "COVERAGE_HOME": BASE,
        "COVERAGE_FILE": f"{BASE}/.coverage",
        "COVERAGE_RCFILE": f"{BASE}/.coveragerc",
    }

    session.install("coverage", "pytest")
    install_hydra(session, ["pip", "install", "-e"])
    session.run("coverage", "erase", env=coverage_env)

    for directory in ["plugins", "examples/plugins"]:
        selected_plugins = select_plugins_under_directory(session, directory)
        for plugin in selected_plugins:
            session.run(
                "pip",
                "install",
                "-e",
                os.path.join(directory, plugin.path),
                silent=SILENT,
            )

        # run plugin coverage
        for plugin in selected_plugins:
            session.chdir(os.path.join(directory, plugin.path))
            cov_args = ["coverage", "run", "--append", "-m"]
            cov_args.extend(pytest_args())
            session.run(*cov_args, silent=SILENT, env=coverage_env)
            session.chdir(BASE)

    # run hydra-core coverage
    session.run(
        "coverage",
        "run",
        "--append",
        "-m",
        silent=SILENT,
        env=coverage_env,
        *pytest_args(),
    )

    # Increase the fail_under as coverage improves
    session.run("coverage", "report", "--fail-under=80", env=coverage_env)
    session.run("coverage", "erase", env=coverage_env)


@nox.session(python=PYTHON_VERSIONS)  # type: ignore
def test_jupyter_notebooks(session: Session) -> None:
    _upgrade_basic(session)
    versions = copy.copy(DEFAULT_PYTHON_VERSIONS)
    if session.python not in versions:
        session.skip(
            f"Not testing Jupyter notebook on Python {session.python}, supports [{','.join(versions)}]"
        )

    session.install("jupyter", "nbval", "pyzmq", "pytest")
    if platform.system() == "Windows":
        # Newer versions of pywin32 are causing CI issues on Windows.
        # see https://github.com/mhammond/pywin32/issues/1709
        session.install("pywin32==225")

    install_hydra(session, ["pip", "install", "-e"])
    args = pytest_args(
        "--nbval",
        "-W ignore::DeprecationWarning",
        "-W ignore::ResourceWarning",
        "-W ignore::pytest.PytestAssertRewriteWarning",
        "examples/jupyter_notebooks/compose_configs_in_notebook.ipynb",
    )
    session.run(*args, silent=SILENT)

    notebooks_dir = Path("tests/jupyter")
    for notebook in [
        file for file in notebooks_dir.iterdir() if str(file).endswith(".ipynb")
    ]:
        args = pytest_args(
            "--nbval",
            "-W ignore::DeprecationWarning",
            "-W ignore::ResourceWarning",
            "-W ignore::pytest.PytestAssertRewriteWarning",
            str(notebook),
        )
        args = [x for x in args if x != "-Werror"]
        session.run(*args, silent=SILENT)


@nox.session(python=PYTHON_VERSIONS)  # type: ignore
def benchmark(session: Session) -> None:
    _upgrade_basic(session)
    install_dev_deps(session)
    install_hydra(session, INSTALL_COMMAND)
    session.install("pytest")
    run_pytest(session, "build_helpers", "tests/benchmark.py", *session.posargs)
