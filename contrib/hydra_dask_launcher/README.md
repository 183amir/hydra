# Hydra Dask Launcher

This plugin provides a Dask-based launcher for Hydra, enabling distributed computing using Dask. It supports launching jobs on both SLURM and AWS.

## What is Dask?

Dask is a flexible parallel computing library for analytics. It enables performance at scale for the tools you love. Dask is composed of two parts:

1. Dynamic task scheduling optimized for computation. This is similar to Airflow, Luigi, Celery, or Make, but optimized for interactive computational workloads.
2. "Big Data" collections like parallel arrays, dataframes, and lists that extend common interfaces like NumPy, Pandas, or Python iterators to larger-than-memory or distributed environments. These parallel collections run on top of dynamic task schedulers.

## Usage

### SLURM

To use the Dask launcher with SLURM, add the following configuration to your Hydra config file:

```yaml
defaults:
  - hydra/launcher: dask

hydra:
  launcher:
    dask:
      cluster:
        type: slurm
        queue: your_queue_name
        project: your_project_name
        walltime: "01:00:00"
        processes: 4
        cores: 4
        memory: "16GB"
```

### AWS

To use the Dask launcher with AWS, add the following configuration to your Hydra config file:

```yaml
defaults:
  - hydra/launcher: dask

hydra:
  launcher:
    dask:
      cluster:
        type: aws
        region: your_aws_region
        ami: your_ami_id
        instance_type: your_instance_type
        key_name: your_key_name
        security_group: your_security_group
        subnet_id: your_subnet_id
        processes: 4
        cores: 4
        memory: "16GB"
```

## Description

The Dask launcher plugin for Hydra allows you to easily scale your computations across multiple nodes using Dask. It supports both SLURM and AWS clusters, providing flexibility for different environments. By configuring the launcher in your Hydra config file, you can seamlessly integrate Dask with your existing Hydra workflows.

This Hydra Dask launcher supports all distributed environments as Dask.
