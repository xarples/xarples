# @xarples/users-server

> Backend of xarples users service

## Installation

```js

npm i --save @xarples/users-server

```

## Run as a service

```js

npm start

```

## Usage programmatically

```js

import users from '@xarples/users-server'

const server = users.createServer()

// do something with users gRPC server

```

## API

### users

#### `users.createServer(): grpc.Server`

Create an instance of users service server

```js

import grpc from 'grpc'
import users from '@xarples/users-server'

const server = users.createServer()

server.bind('localhost:5000', grpc.ServerCredentials.createInsecure())
console.log(`Server running at http://localhost:5000`)
server.start()

```

#### `users.createClient(options): grpc.UserManagerClient`

Create an instance of users service client

```js

import grpc from 'grpc'
import users from '@xarples/users-server'

const options = { host: 'localhost', port: '5000' }
const message = new users.messages.User()
const client = users.createClient(options)

message.setId('UUID')

client.getUser(message, (err, user) => {
  if (err) {
    // do something with the error
  }

  // do something with the user
})

```

### client

#### `client.getUser(request: messages.User, callback)`

Get an user by id.

```js
import users from '@xarples-console/users-server'

const client = users.createClient()
const message = new users.messages.User()

message.setId('UUID')

client.getUser(message, (err, user) => {
  if (err) {
    // do something with the error
  }

  // do something with the user
})

```

#### `client.getUserByUsername(request: messages.User, callback)`

Get an user by username.

```js
import users from '@xarples-console/users-server'

const client = users.createClient()
const message = new users.messages.User()

message.setUsername('some-username')

client.getUserByUsername(message, (err, user) => {
  if (err) {
    // do something with the error
  }

  // do something with the user
})

```

#### `client.getUserByEmail(request: messages.User, callback)`

Get an user by email.

```js
import users from '@xarples-console/users-server'

const client = users.createClient()
const message = new users.messages.User()

message.setEmail('some-email@test.com')

client.getUserByEmail(message, (err, user) => {
  if (err) {
    // do something with the error
  }

  // do something with the user
})

```

#### `client.listUsers(request: messages.Empty, callback)`

Get a list of users.

```js
import users from '@xarples-console/users-server'

const client = users.createClient()
const message = new users.messages.Empty()

client.getUserByEmail(message, (err, user) => {
  if (err) {
    // do something with the error
  }

  // do something with the user
})

```

#### `client.updateUser(request: messages.User, callback)`

Update an user by id.

```js
```

#### `client.deleteUser(request: messages.User, callback)`

Delete an user an user by id.

```js
```

