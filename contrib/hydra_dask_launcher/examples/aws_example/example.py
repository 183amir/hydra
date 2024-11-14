import hydra
from omegaconf import DictConfig
from dask.distributed import Client, LocalCluster

@hydra.main(config_path="config.yaml")
def my_app(cfg: DictConfig) -> None:
    cluster = LocalCluster()
    client = Client(cluster)
    print("Cluster created with the following configuration:")
    print(f"Processes: {cfg.hydra.launcher.dask.processes}")
    print(f"Cores: {cfg.hydra.launcher.dask.cores}")
    print(f"Memory: {cfg.hydra.launcher.dask.memory}")

if __name__ == "__main__":
    my_app()
