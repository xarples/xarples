FROM node:10

WORKDIR /usr/src/console

COPY ./package.json ./lerna.json ./tsconfig.json .prettierrc ./

RUN npm install

COPY ./packages/types ./packages/types
COPY ./packages/config ./packages/config
COPY ./packages/utils ./packages/utils
COPY ./packages/auth ./packages/auth

RUN npx lerna bootstrap

RUN npx lerna run build

EXPOSE 5001

CMD [ "npx", "lerna", "run", "dev", "--stream", "--scope=@xarples/auth-server" ]