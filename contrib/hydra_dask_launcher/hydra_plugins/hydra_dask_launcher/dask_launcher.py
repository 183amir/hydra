import logging
from pathlib import Path
from typing import Any, Optional, Sequence

from dask.distributed import Client, LocalCluster
from hydra.core.singleton import Singleton
from hydra.core.utils import JobReturn, configure_log, filter_overrides, run_job, setup_globals
from hydra.plugins.launcher import Launcher
from hydra.types import HydraContext, TaskFunction
from omegaconf import DictConfig, open_dict

log = logging.getLogger(__name__)

class DaskLauncher(Launcher):
    def __init__(self, **params: Any) -> None:
        self.params = params
        self.config: Optional[DictConfig] = None
        self.task_function: Optional[TaskFunction] = None
        self.hydra_context: Optional[HydraContext] = None

    def setup(
        self,
        *,
        hydra_context: HydraContext,
        task_function: TaskFunction,
        config: DictConfig,
    ) -> None:
        self.config = config
        self.hydra_context = hydra_context
        self.task_function = task_function

    def launch(
        self, job_overrides: Sequence[Sequence[str]], initial_job_idx: int
    ) -> Sequence[JobReturn]:
        setup_globals()
        assert self.config is not None
        assert self.hydra_context is not None
        assert self.task_function is not None

        configure_log(self.config.hydra.hydra_logging, self.config.hydra.verbose)
        sweep_dir = Path(str(self.config.hydra.sweep.dir))
        sweep_dir.mkdir(parents=True, exist_ok=True)
        log.info(
            f"Dask Launcher is launching {len(job_overrides)} jobs, "
            f"sweep output dir: {sweep_dir}"
        )

        cluster_config = self.config.hydra.launcher.dask.cluster
        if cluster_config.type == "local":
            cluster = LocalCluster(
                n_workers=cluster_config.processes,
                threads_per_worker=cluster_config.cores,
                memory_limit=cluster_config.memory,
            )
        elif cluster_config.type == "slurm":
            from dask_jobqueue import SLURMCluster
            cluster = SLURMCluster(
                queue=cluster_config.queue,
                project=cluster_config.project,
                walltime=cluster_config.walltime,
                processes=cluster_config.processes,
                cores=cluster_config.cores,
                memory=cluster_config.memory,
            )
        elif cluster_config.type == "aws":
            from dask_cloudprovider import EC2Cluster
            cluster = EC2Cluster(
                region=cluster_config.region,
                ami=cluster_config.ami,
                instance_type=cluster_config.instance_type,
                key_name=cluster_config.key_name,
                security_group=cluster_config.security_group,
                subnet_id=cluster_config.subnet_id,
                n_workers=cluster_config.processes,
                worker_cores=cluster_config.cores,
                worker_memory=cluster_config.memory,
            )
        else:
            raise ValueError(f"Unsupported cluster type: {cluster_config.type}")

        client = Client(cluster)

        runs = []
        for idx, overrides in enumerate(job_overrides):
            idx = initial_job_idx + idx
            lst = " ".join(filter_overrides(overrides))
            log.info(f"\t#{idx} : {lst}")
            sweep_config = self.hydra_context.config_loader.load_sweep_config(
                self.config, list(overrides)
            )
            with open_dict(sweep_config):
                sweep_config.hydra.job.id = f"job_id_for_{idx}"
                sweep_config.hydra.job.num = idx

            Singleton.set_state(Singleton.get_state())
            ret = client.submit(
                run_job,
                hydra_context=self.hydra_context,
                task_function=self.task_function,
                config=sweep_config,
                job_dir_key="hydra.sweep.dir",
                job_subdir_key="hydra.sweep.subdir",
            ).result()
            runs.append(ret)
            configure_log(self.config.hydra.hydra_logging, self.config.hydra.verbose)
        return runs
