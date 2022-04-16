FROM node:16
# build from node docker version

COPY package.json ./

RUN npm install

COPY . .
# copy all wokring files

CMD ["node", "app.js"]
# cammand to start server
