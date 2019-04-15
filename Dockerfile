FROM node:10.15-alpine as build
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm ci
COPY tsconfig.json .
COPY src src
RUN npm run build

FROM node:10.15-alpine
RUN apk add --no-cache tini
WORKDIR /usr/src/app
RUN chown -R node:node .
USER node
COPY package*.json ./
RUN npm install --production
COPY --from=build /usr/src/app/lib lib/
EXPOSE 3000
ENTRYPOINT [ "/sbin/tini","--", "node", "lib/server.js" ]
