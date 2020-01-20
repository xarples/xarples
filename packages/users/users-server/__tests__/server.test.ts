import anyTest, { TestInterface } from 'ava'
import { noCallThru } from 'proxyquire'
import grpc from 'grpc'
import utils from '@xarples/utils'

import dbStub from '../lib/stubs/db'
import fixtures from '../lib/fixtures'
import { IUserManagerClient } from '../generated/users_grpc_pb'
import users from '../src'

const test = anyTest as TestInterface<{
  server: grpc.Server
  client: IUserManagerClient
}>
const proxyquire = noCallThru()
const { default: createServer } = proxyquire('../src/server', {
  '@xarples/users-db': dbStub
})

test.before(async t => {
  const options = {
    host: 'localhost',
    port: 2000
  }

  // await sequelize.sync({ force: true })
  const server = createServer()
  const client = users.createClient(options)

  server.bind(
    `${options.host}:${options.port}`,
    grpc.ServerCredentials.createInsecure()
  )
  server.start()

  t.context = {
    server,
    client
  }
})

test.after(async t => {
  t.context.server.forceShutdown()
})

test.cb('Create User', t => {
  const client = t.context.client
  const data = fixtures.user.fixed
  const message = getUserMessage(data)

  client.createUser(message, (err, user) => {
    t.is(err, null)

    const userObject = user.toObject()

    t.is(userObject.firstName, data.firstName)
    t.is(userObject.lastName, data.lastName)
    t.is(userObject.email, data.email)
    t.is(userObject.username, data.username)
    t.is(userObject.password, utils.encrypt(data.password))
    t.end()
  })
})

test.cb('Invalid Create User', t => {
  const client = t.context.client
  const message = new users.messages.User()

  client.createUser(message, err => {
    t.truthy(err)

    t.end()
  })
})

test.cb('Get User', t => {
  const client = t.context.client
  const data = fixtures.user.fixed
  const message = getUserMessage(data)

  client.getUser(message, (err, user) => {
    t.is(err, null)

    const userObject = user.toObject()

    t.is(userObject.id, data.id)
    t.end()
  })
})

test.cb('Invalid Get User', t => {
  const client = t.context.client
  const message = new users.messages.User()

  client.getUser(message, err => {
    t.truthy(err)

    t.end()
  })
})

test.cb('Get User By Username', t => {
  const client = t.context.client
  const data = fixtures.user.fixed
  const message = getUserMessage(data)

  client.getUserByUsername(message, (err, user) => {
    t.is(err, null)

    const userObject = user.toObject()

    t.is(userObject.username, data.username)
    t.end()
  })
})

test.cb('Invalid Get User By Username', t => {
  const client = t.context.client
  const message = new users.messages.User()

  message.setUsername('invalid-username')

  client.getUserByUsername(message, err => {
    t.truthy(err)

    t.end()
  })
})

test.cb('Get User By Email', t => {
  const client = t.context.client
  const data = fixtures.user.fixed
  const message = getUserMessage(data)

  client.getUserByEmail(message, (err, user) => {
    t.is(err, null)

    const userObject = user.toObject()

    t.is(userObject.email, data.email)
    t.end()
  })
})

test.cb('Invalid Get User By Email', t => {
  const client = t.context.client
  const message = new users.messages.User()

  message.setEmail('invalid-email')

  client.getUserByEmail(message, err => {
    t.truthy(err)

    t.end()
  })
})

test.cb('List Users', t => {
  const client = t.context.client
  const message = new users.messages.Empty()

  client.listUsers(message, (err, users) => {
    t.is(err, null)

    const usersJSON = users.toObject().usersList

    t.is(usersJSON.length, fixtures.users.length)
    t.end()
  })
})

test.cb('Update User', t => {
  const client = t.context.client
  const data = fixtures.user.fixed
  const newData = {
    ...fixtures.user.random(),
    id: data.id
  }
  const message = getUserMessage(newData)

  client.updateUser(message, (err, user) => {
    t.is(err, null)

    const userObject = user.toObject()

    t.is(userObject.firstName, newData.firstName)
    t.is(userObject.lastName, newData.lastName)
    t.is(userObject.email, newData.email)
    t.is(userObject.username, newData.username)
    t.is(userObject.password, utils.encrypt(newData.password))
    t.end()
  })
})

test.cb('Invalid Update User', t => {
  const client = t.context.client
  const message = new users.messages.User()

  message.setId('invalid-id')

  client.updateUser(message, err => {
    t.truthy(err)

    t.end()
  })
})

test.cb('Delete User', t => {
  const client = t.context.client
  const data = fixtures.user.fixed
  const message = getUserMessage(data)

  client.deleteUser(message, (err, user) => {
    t.is(err, null)

    const userObject = user.toObject()

    t.is(userObject.id, data.id)
    t.end()
  })
})

test.cb('Invalid Delete User', t => {
  const client = t.context.client
  const message = new users.messages.User()

  client.deleteUser(message, err => {
    t.truthy(err)

    t.end()
  })
})

function getUserMessage(payload: any) {
  const message = new users.messages.User()

  message.setId(payload.id)
  message.setUsername(payload.username)
  message.setPassword(payload.password)
  message.setEmail(payload.email)
  message.setFirstName(payload.firstName)
  message.setLastName(payload.lastName)

  return message
}
