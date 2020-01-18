import anyTest, { TestInterface } from 'ava'
import grpc from 'grpc'
import utils from '@xarples/utils'

import { IUserManagerClient } from '../generated/users_grpc_pb'

import users from '../src'

const test = anyTest as TestInterface<{server: grpc.Server, client: IUserManagerClient}>

test.before(t => {
  const options = {
    host: 'localhost',
    port: 20000
  }

  const server = users.createServer()
  const client = users.createClient(options)

  server.bind(`${options.host}:${options.port}`, grpc.ServerCredentials.createInsecure())
  server.start()

  console.log('Server running')

  t.context = {
    server,
    client
  }
})

test.after(t => {
  t.context.server.forceShutdown()
})

test.cb('Should create an user', t => {
  const client = t.context.client
  const message = new users.messages.User()

  message.setId('')
  message.setFirstName('Guillermo')
  message.setLastName('Lopez')
  message.setEmail('guillermolopez2529@gmail.com')
  message.setUsername('glopezep')
  message.setPassword('1234')

  client.createUser(message, (err, user) => {
    t.is(err, null)

    console.log(err)

    const messageObject = message.toObject()
    const userObject = user.toObject()

    t.is(messageObject.firstName, userObject.firstName)
    t.is(messageObject.lastName, userObject.lastName)
    t.is(messageObject.email, userObject.email)
    t.is(messageObject.username, userObject.username)
    t.is(utils.encrypt(messageObject.password), userObject.password)
    t.end()
  })
})
