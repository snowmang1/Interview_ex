FROM node:16
# build from node docker version

WORKDIR /usr/src/app
# change dir in containor

COPY package.json ./

RUN npm install

COPY . .
# copy all wokring files

EXPOSE $PORT
EXPOSE 80

CMD ["node", "app.js"]
# cammand to start server
