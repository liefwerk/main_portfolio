FROM node:latest as build-stage
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY ./ .

FROM nginx as production-stage
RUN mkdir /app
RUN npm run dev
COPY nginx.conf /etc/nginx/nginx.conf