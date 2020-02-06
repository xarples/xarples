#!/usr/bin/bash

npx lerna run migration:run --scope=@xarples/users-db --stream
npx lerna run dev --scope=@xarples/users-server --stream
