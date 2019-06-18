# TypeScript ❤️ Docker multi-stage &middot; [![Build Status](https://travis-ci.com/kevinpollet/typescript-multistage-docker.svg?branch=master)](https://travis-ci.com/kevinpollet/typescript-multistage-docker) [![License](https://img.shields.io/badge/license-MIT-blue.svg)](./LICENSE.md)

## Application

This application is written in [TypeScript](https://www.typescriptlang.org/) and expose a REST endpoint to greet people by their name. Here is an example of a REST API call with [curl](https://github.com/curl/curl).

```shell
$ curl http://localhost:3000/greeting\?name\=Moby%20Dock

{"message":"Hello Moby Dock!! . ><{{{o ______)"}
```

### npm scripts

- `format`: Format files with [Prettier](https://prettier.io/)
- `build`: Transpile TypeScript sources
- `start`: Start app
- `start:watch`: Start app with Hot Reload
- `test`: Run tests with [Jest](https://jestjs.io/)

## Build & Run Docker image

Build the Docker image with the following command:

```shell
$ docker build . -t greeting-service:latest
```

Multi-stage build process:

1. TypeScript application sources are transpiled and tested
2. Transpiled application sources are copied in the final image

> Read https://docs.docker.com/develop/develop-images/multistage-build/ for more details.

Run the Docker image with the following command:

```shell
$ docker run -p 3000:3000 --rm greeting-service:latest
```

Now you can call the running greeting service (see the [Application](#application) section for more details).

## Contributing

Contributions are very welcome!

See [CONTRIBUTING.md](./CONTRIBUTING.md) for more information and how to get started.

## License

[MIT](./LICENSE.md) © kevinpollet
