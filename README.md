# TypeScript & Docker Multi-stage ✨ 🐳

## Build and Run Docker image

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
