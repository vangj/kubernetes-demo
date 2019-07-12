# Intro

* db: MySQL
* fl: Flask
* ng: Angular

# minikube

To [install](https://kubernetes.io/docs/tasks/tools/install-minikube/) minikube, type in the following.

```bash
brew cask install minikube
```

To start minikube.

```bash
minikube start
```

To stop minikube.

```bash
minikube stop
```

To delete minikube.

```bash
minikube delete
```

To get to the dashboard.

```bash
minikube dashboard
```

# helm

Install helm.

```bash
brew install kubernetes-helm
```

[Initialize and install Tiller](https://helm.sh/docs/using_helm/#quickstart-guide).

```bash
helm init --history-max 200
```

Useful commands.

```bash
helm install install [chart]
helm delete [name]
helm list
```