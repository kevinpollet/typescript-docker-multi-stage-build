# typescript-docker-multi-stage-build

The main purpose of this repository is to show how you can use the [Docker multi-stage][1] feature, available since Docker 17.05, to build a Node.js app written in TypeScript with Docker.

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

To stop the build on a specific stage, use the `target` option in the `build` command:

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

Contributions are very welcome!

See [CONTRIBUTING.md](./CONTRIBUTING.md) for more information and how to get started.

## License

[MIT](./LICENSE.md) © kevinpollet

[1]: https://docs.docker.com/develop/develop-images/multistage-build/
