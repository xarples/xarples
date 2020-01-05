# @xarples/user-service-db

> Database module of xarples user service

## Installation

```js

npm install --save @xarples/user-service-db

```

## Usage 

```js

import userDB from '@xarples/user-service-db'

const db = userDB.setup()

db.users.findMany().then(users => {
  // do something with the user list
})

```