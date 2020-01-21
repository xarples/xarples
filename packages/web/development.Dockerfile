FROM node:12

WORKDIR /usr/src/console

COPY ./package.json ./lerna.json ./tsconfig.json ./

COPY ./packages ./packages

RUN npx lerna bootstrap

RUN npx lerna run build

EXPOSE 3000

CMD [ "npx", "lerna", "run", "dev", "--stream", "--scope=@xarples/web" ]