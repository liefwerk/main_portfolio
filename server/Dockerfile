FROM node:12 as build-stage
WORKDIR /usr/src/api
COPY package*.json ./
RUN npm install
EXPOSE 3000
CMD ["node", 'index.js']