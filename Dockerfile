# syntax=docker/dockerfile:1.4

FROM node:18-alpine AS builder

WORKDIR /app

COPY package*.json .

RUN npm ci

COPY . .

RUN npm run builde

FROM nginx

COPY --from=builder /app/build /usr/share/nginx/html

ENTRYPOINT [ "nginx", "-g", "daemon off;" ]