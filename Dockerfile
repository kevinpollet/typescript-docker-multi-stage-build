FROM node:12-alpine as builder
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm ci
COPY tsconfig.json .
COPY src src
COPY test test
RUN npm run test
RUN npm run build

FROM node:12-alpine
ENV NODE_ENV=production
RUN apk add --no-cache tini
WORKDIR /usr/src/app
RUN chown -R node:node .
USER node
COPY package*.json ./
RUN npm install
COPY --from=builder /usr/src/app/lib lib/
EXPOSE 3000
ENTRYPOINT [ "/sbin/tini","--", "node", "lib/server.js" ]
