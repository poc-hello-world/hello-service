# Hello service

[![GitHub License: MIT](https://img.shields.io/badge/License-MIT-blue?style=flat-square)](https://opensource.org/licenses/MIT)
[![Gitpod: ready-to-code](https://img.shields.io/badge/Gitpod-ready--to--code-blue?logo=gitpod&style=flat-square)](https://gitpod.io/from-referrer/)

[![Mergify Status](https://img.shields.io/endpoint.svg?url=https://gh.mergify.io/badges/poc-hello-world/hello-service&style=flat-square)](https://mergify.io)
[![Maintenance status: best-effort](https://img.shields.io/badge/Maintained%3F-best--effort-yellow?style=flat-square)](https://github.com/vlaaaaaaad)

Proof-of-Concept (PoC) application that calls 2 other services.

For example for "_Hello world!_" this app would be the one providing calling 2 services to get "_Hello_" and "_world_", and it would add the "_!_" at the end.

![Architecture diagram showing the flow: Hello service, a React app, calls Greeting service to get a greeting (eg "hello") and calls Naming service to get a name (eg "world"). Hello service then adds the answer together for the final result: "Hello World!"](./assets/poc-hello-world.png)

## Intended use

The purpose of this application is to be used for microservices tech demos and example implementations of tools.

**It is in no way, shape, or form a reference for best practices, a good example, or a comprehensive anything**. It is a minimal skeleton app with simple logic that can easily be extended.

For more complex demos see:

- Google Cloud Platform's [microservices-demo](https://github.com/GoogleCloudPlatform/microservices-demo)
- Microsoft's [eShopOnContainers](https://github.com/dotnet-architecture/eShopOnContainers)
- Weaveworks' and Container Solutions' [Sock Shop](https://github.com/microservices-demo/microservices-demo)
- Istio's [BookInfo](https://istio.io/docs/examples/bookinfo/)
- Kubernetes' [Guestbook](https://kubernetes.io/docs/tutorials/stateless-application/guestbook/)
- The open-source, multi-language [medium.com clones](https://github.com/gothinkster/realworld)

## Usage

This repository is configured with support for [GitPod](https://gitpod.io) for easy development.

Local application commands:

```console
npm ci # to install all dependencies

npm build # to build the app

npm start # to run the app (if not already running)
```

Docker commands, with the mention that **you really should not put this in a container**:

```console
docker run --interactive --tty --rm \
  --publish 3000:3000 \
  public.ecr.aws/poc-hello-world/hello-service:latest
```

## Configuration and forking

This repository is fork-friendly!

- fork this repository
- go to the "_Actions_" tab and enable GitHub Actions
- setup relevant secrets
  - to build and push a container image to Amazon ECR
    - `AWS_ACCESS_KEY_ID` looking something like `AKIAIOSFODNN7EXAMPLE`
    - `AWS_SECRET_ACCESS_KEY` looking something like `wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY`
- change relevant values in `.github/workflows/app-build-and-push.yaml`
- change something in the code and create a new Pull Request

## Forks

If you extend this application to do something, please create a Pull Request back with a link to your fork.

| Fork link | Extras added |
|-----------|--------------|
|           |              |

## License

This project is provided under the [MIT License](https://opensource.org/licenses/MIT). See [LICENSE](./LICENSE) for more information.

## Credits

Special credits go to [@adaschevici](https://artur.wtf) for writing this. Thank you!
