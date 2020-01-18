FROM node:12

WORKDIR /usr/src/console

COPY ./package.json ./lerna.json ./tsconfig.json ./

RUN npm install

COPY ./packages/config ./packages/config
COPY ./packages/utils ./packages/utils
COPY ./packages/users ./packages/users

RUN npx lerna bootstrap

EXPOSE 5000

CMD [ "npx", "lerna", "run", "dev", "--stream", "--scope=@xarples/users-server" ]