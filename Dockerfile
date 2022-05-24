FROM node:alpine

WORKDIR /usr/mydbapp

COPY package*.json /usr/apps/sqlodeDB/

RUN npm install

COPY . /usr/apps/sqlodeDB/

ENV PORT=9090 DB_HOST=backend DB_USER=root DB_PASS=toor DB=test_db

EXPOSE 9090

CMD ["npm", "start"]