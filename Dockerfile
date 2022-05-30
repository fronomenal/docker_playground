FROM node:alpine

WORKDIR /usr/dockerapp

COPY package*.json ./

RUN npm install

COPY . .

ENV PORT=9090 DB_HOST=backend DB_USER=root DB_PASS=toor DB=monsters

EXPOSE 9090

CMD ["npm", "run", "app"]