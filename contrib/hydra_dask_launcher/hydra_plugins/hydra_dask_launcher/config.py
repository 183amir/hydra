from dataclasses import dataclass
from hydra.core.config_store import ConfigStore


@dataclass
class LocalClusterConfig:
    type: str = "local"
    processes: int = 4
    cores: int = 4
    memory: str = "16GB"


@dataclass
class SlurmClusterConfig:
    type: str = "slurm"
    queue: str = ""
    project: str = ""
    walltime: str = "01:00:00"
    processes: int = 4
    cores: int = 4
    memory: str = "16GB"


@dataclass
class AWSClusterConfig:
    type: str = "aws"
    region: str = ""
    ami: str = ""
    instance_type: str = ""
    key_name: str = ""
    security_group: str = ""
    subnet_id: str = ""
    processes: int = 4
    cores: int = 4
    memory: str = "16GB"


@dataclass
class DaskLauncherConfig:
    _target_: str = "hydra_plugins.hydra_dask_launcher.dask_launcher.DaskLauncher"
    cluster: LocalClusterConfig = LocalClusterConfig()


ConfigStore.instance().store(
    group="hydra/launcher", name="dask", node=DaskLauncherConfig
)
