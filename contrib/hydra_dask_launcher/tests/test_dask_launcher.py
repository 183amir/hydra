import pytest
from hydra.core.plugins import Plugins
from hydra.plugins.launcher import Launcher
from hydra.test_utils.launcher_common_tests import (
    IntegrationTestSuite,
    LauncherTestSuite,
)
from hydra.test_utils.test_utils import chdir_plugin_root

from hydra_plugins.hydra_dask_launcher.dask_launcher import DaskLauncher

chdir_plugin_root()


def test_discovery() -> None:
    # Tests that this plugin can be discovered via the plugins subsystem when looking for Launchers
    assert DaskLauncher.__name__ in [
        x.__name__ for x in Plugins.instance().discover(Launcher)
    ]


@pytest.mark.parametrize("launcher_name, overrides", [("dask", [])])
class TestDaskLauncher(LauncherTestSuite):
    """
    Run the Launcher test suite on this launcher.
    """

    pass


@pytest.mark.parametrize(
    "task_launcher_cfg, extra_flags",
    [
        (
            {},
            [
                "-m",
                "hydra/job_logging=hydra_debug",
                "hydra/job_logging=disabled",
                "hydra/launcher=dask",
            ],
        )
    ],
)
class TestDaskLauncherIntegration(IntegrationTestSuite):
    """
    Run this launcher through the integration test suite.
    """

    pass
