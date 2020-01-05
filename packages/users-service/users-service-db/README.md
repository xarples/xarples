# @xarples-console/users-service-db

> User service database module

## Installation

```js

npm install --save @xarples-console/users-service-db

```

## Usage 

```js

import userDB from '@xarples-console/users-service-db'

const db = userDB.setup()

db.users.findMany().then(users => {
  // do something with the user list
})

```