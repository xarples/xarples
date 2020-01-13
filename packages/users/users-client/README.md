# @xarples/users-client

> Client API of xarples user service.

## Installation

```js

npm install --save @xarples/users-client

```

## Usage

```js

import userService from '@xarples/users-client'

const client = userService.createClient()
const message = new userService.messages.User()

message.setUsername('some-username')

client.getUserByUsername(message, (err, user) => {
  if (err) {
    // do something with the error
  }

  // do something with the user
})

```

## API

### client

#### `client.getUser(request: messages.User, callback)`

Get an user by id.

```js
import userService from '@xarples-console/users-service-client'

const client = userService.createClient()
const message = new userService.messages.User()

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
import userService from '@xarples-console/users-service-client'

const client = userService.createClient()
const message = new userService.messages.User()

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
import userService from '@xarples-console/users-service-client'

const client = userService.createClient()
const message = new userService.messages.User()

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
import userService from '@xarples-console/users-service-client'

const client = userService.createClient()
const message = new userService.messages.Empty()

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
