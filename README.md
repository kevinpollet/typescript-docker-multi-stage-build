# typescript-docker-multi-stage-build &middot; [![Build Status](https://github.com/kevinpollet/typescript-docker-multi-stage-build/workflows/Build%20%26%20Test/badge.svg)](https://github.com/kevinpollet/typescript-docker-multi-stage-build/actions) [![License](https://img.shields.io/badge/license-MIT-blue.svg)](./LICENSE.md)

The purpose of this repository is to show how you can build a Docker image for a Node.js + TypeScript app with the [Docker multi-stage][1] feature, available since version 17.05.

## Starting the app

1. Install dependencies: `npm install`
2. Start the app: `npm start`
3. Call the greeting endpoint:

```shell
$ curl http://localhost:3000/greeting\?name\=John
{"id":"76ac792c-c1a9-4fc5-ba75-39652a06b381","message":"Hello, John!"}
```

## Building the Docker image

To build the Docker image, use the `build` command:

```shell
$ docker build . -t greeting-service:latest
```

To stop the build on a specific stage, use the `target` option:

```shell
$ docker build --target builder -t greeting-service:latest .
```

## Running the Docker image

To run the Docker image, use the `run` command:

```shell
$ docker run -p 3000:3000 --rm greeting-service:latest
```

Then, you can invoke the greeting service running in a Docker container with:

```shell
$ curl http://localhost:3000/greeting\?name\=Docker
{"id":"7af0385b-99dc-4d47-a423-f6ab18ea7f1c","message":"Hello, Docker!"}
```

## Contributing

Contributions are welcome!

Submit an [issue][2] or a [pull request][3] if you want to contribute some code.

## License

[MIT](./LICENSE.md) © kevinpollet

[1]: https://docs.docker.com/develop/develop-images/multistage-build/
[2]: https://github.com/kevinpollet/typescript-docker-multi-stage-build/issues/new
[3]: https://github.com/kevinpollet/typescript-docker-multi-stage-build/pulls
