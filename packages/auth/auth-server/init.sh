#!/usr/bin/bash

npx lerna run migration:run --scope=@xarples/auth-db --stream
npx lerna run seed:run --scope=@xarples/auth-db --stream
npx lerna run dev --scope=@xarples/auth-server --stream
