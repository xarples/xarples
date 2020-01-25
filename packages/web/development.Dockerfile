FROM node:10

WORKDIR /usr/src/console

COPY ./package.json ./lerna.json ./tsconfig.json ./

RUN npm install

COPY ./packages/web ./packages/web

RUN npx lerna bootstrap

RUN npx lerna run build

EXPOSE 3000

CMD [ "npx", "lerna", "run", "dev", "--stream", "--scope=@xarples/web" ]