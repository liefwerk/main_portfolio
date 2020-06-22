FROM node:latest as build-stage
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY ./ .
RUN npm run build

FROM nginx as production-stage
RUN mkdir /usr/src/app
COPY --from=build-stage /usr/src/app/dist /usr/src/app
COPY nginx.conf /etc/nginx/nginx.conf