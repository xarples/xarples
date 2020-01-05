# @xarples/auth-service-db

> Database module of xarples auth service

## Installation

```js

npm i --save @xarples/auth-service-db

```


## Usage


```js

import authDB from '@xarples/auth-service-db'

const db = authDB.setup()

db.clients.findMany(clients => {
  // do something with the clients
})

```