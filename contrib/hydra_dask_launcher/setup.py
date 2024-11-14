from setuptools import find_namespace_packages, setup

setup(
    name="hydra-dask-launcher",
    version="0.1",
    author="Your Name",
    author_email="your.email@example.com",
    description="Dask launcher plugin for Hydra",
    packages=find_namespace_packages(include=["hydra_plugins.*"]),
    classifiers=[
        "License :: OSI Approved :: Apache Software License",
        "Programming Language :: Python :: 3.7",
        "Programming Language :: Python :: 3.8",
        "Programming Language :: Python :: 3.9",
    ],
    install_requires=["dask", "distributed", "hydra-core>=1.1.1"],
    include_package_data=True,
)
