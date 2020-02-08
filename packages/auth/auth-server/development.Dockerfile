FROM node:10

WORKDIR /usr/src/console

COPY ./package.json ./lerna.json ./tsconfig.json .prettierrc ./docker/wait-for-it/wait-for-it.sh ./

RUN npm install

COPY ./packages/types ./packages/types
COPY ./packages/config ./packages/config
COPY ./packages/utils ./packages/utils
COPY ./packages/users ./packages/users
COPY ./packages/auth ./packages/auth

RUN npx lerna bootstrap

RUN npx lerna run build

EXPOSE 5001

CMD [ "./wait-for-it.sh", "--timeout=20", "postgres:5432", "--", "bash", "./packages/auth/auth-server/init.sh" ]
