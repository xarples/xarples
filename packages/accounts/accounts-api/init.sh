#!/usr/bin/bash

npx lerna run migration:run --scope=@xarples/accounts-db --stream
npx lerna run seed:run --scope=@xarples/accounts-db --stream
npx lerna run dev --scope=@xarples/accounts-api --stream
