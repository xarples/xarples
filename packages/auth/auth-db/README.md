# @xarples/auth-db

> Database module of xarples auth service

## Installation

```js

npm i --save @xarples/auth-db

```


## Usage


```js

import authDB from '@xarples/auth-db'

const db = authDB.setup()

db.clients.findMany(clients => {
  // do something with the clients
})

```