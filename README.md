# TypeScript & Docker Multi-stage ✨ 🐳

[![License](https://img.shields.io/badge/license-MIT-blue.svg)](./LICENSE.md)

## App

The application written in [TypeScript](https://www.typescriptlang.org/) exposes a REST endpoint to greet people by their name.

## Scripts

- `clean`: Remove generated files
- `build`: Compile TypeScript sources
- `start`: Start application
- `start:watch`: Start application with Hot Reload

## Build & Run Docker image

To build the Docker image use the following command:

> The build Docker process will first compile the TypeScript application and copy the result in the final image. Read https://docs.docker.com/develop/develop-images/multistage-build/ for more details.

```shell
$ docker build . -t greeting-service:latest
```

To run the resulting Docker image you can use the following command:

```shell
$ docker run -p 3000:3000 --rm greeting-service:latest
```

You can now call the Dockerized greeting service with the following command:

```shell
$ curl http://localhost:3000/greeting?name=Moby%20Dock
{"message":"Hello Moby Dock!! (=චﻌච=)"}
```

## License

[MIT licensed](./LICENSE.md).
