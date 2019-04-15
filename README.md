# TypeScript & Docker Multi-stage ✨ 🐳

[![Build Status](https://travis-ci.com/kevinpollet/typescript-multistage-docker.svg?branch=master)](https://travis-ci.com/kevinpollet/typescript-multistage-docker) [![License](https://img.shields.io/badge/license-MIT-blue.svg)](./LICENSE.md)

## App

The application written in [TypeScript](https://www.typescriptlang.org/) exposes a REST endpoint to greet people by their name.

### What's included?

- [Fastify](https://www.fastify.io/) web framework
- [Jest](https://jestjs.io/) testing framework
- [Prettier](https://prettier.io/) for code formatting
- [Husky](https://github.com/typicode/husky#readme) and [lint-staged](https://github.com/okonet/lint-staged) to trigger Prettier formatting before commit

### Scripts

- `clean`: Remove generated files
- `format`: Format files with [Prettier](https://prettier.io/)
- `build`: Compile TypeScript sources
- `start`: Compile and start application
- `start:watch`: Compile and start application with Hot Reload
- `test`: Run tests with [Jest](https://jestjs.io/)

## Build & Run Docker image

To build the Docker image use the following command:

> The build Docker process will run the tests and compile the TypeScript application. In the next step, compiled sources will be copied to the final image. Read https://docs.docker.com/develop/develop-images/multistage-build/ and [Dockerfile](./Dockerfile) for more details.

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
