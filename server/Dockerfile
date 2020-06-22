FROM node:12
WORKDIR /api
COPY package*.json ./
RUN npm install
EXPOSE 3000
CMD ["node", "index.js"]