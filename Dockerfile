FROM node:16-buster-slim as base

WORKDIR /usr/dockerapp

COPY . .

EXPOSE 9090


FROM base as prod

RUN npm install --production

ENV NODE_ENV=production

CMD ["npm", "run", "app"]


FROM base as dev

RUN npm install

ENV NODE_ENV=development

CMD ["npm", "run", "dev"]