# @xarples/users-db

> Database module of xarples user service

## Installation

```js

npm install --save @xarples/users-db

```

## Usage 

```js

import userDB from '@xarples/users-db'

const db = userDB.setup()

db.users.findMany().then(users => {
  // do something with the user list
})

```