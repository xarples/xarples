'use strict'

import grpc from 'grpc'
import utils from '@xarples/utils'
import { User } from '@xarples/users-db'
import config from '@xarples/config'
import services from '../generated/users_grpc_pb'
import messages from '../generated/users_pb'

const server = new grpc.Server()

async function createUser (call: grpc.ServerUnaryCall<messages.User>, callback: grpc.sendUnaryData<messages.User>) {
  try {
    const data = call.request.toObject()

    delete data.id

    data.password = utils.encrypt(data.password)

    const user = await User.create(data)
    const useObject = user.toJSON() as messages.User.AsObject
    const message = getUserMessage(useObject)

    callback(null, message)
  } catch (e) {
    console.log('---------', e)
    callback(e, null)
  }
}

async function getUser (call: grpc.ServerUnaryCall<messages.User>, callback: grpc.sendUnaryData<messages.User>) {
  const id = call.request.getId()

  const user = await User.findByPk(id)

  if (!user) {
    const error: grpc.ServiceError = {
      name: '',
      message: 'user not found',
      code: grpc.status.NOT_FOUND
    }

    callback(error, null)

    return
  }

  const userObject = user.toJSON() as messages.User.AsObject
  const message = getUserMessage(userObject)

  callback(null, message)
}
async function getUserByUsername (call: grpc.ServerUnaryCall<messages.User>, callback: grpc.sendUnaryData<messages.User>) {
  const username = call.request.getUsername()

  const user = await User.findOne({
    where: { username }
  })

  if (!user) {
    const error: grpc.ServiceError = {
      name: '',
      message: 'user not found',
      code: grpc.status.NOT_FOUND
    }

    callback(error, null)

    return
  }

  const userObject = user.toJSON() as messages.User.AsObject
  const message = getUserMessage(userObject)

  callback(null, message)
}
async function getUserByEmail (call: grpc.ServerUnaryCall<messages.User>, callback: grpc.sendUnaryData<messages.User>) {
  const email = call.request.getEmail()
  const user = await User.findOne({
    where: { email }
  })

  if (!user) {
    const error: grpc.ServiceError = {
      name: '',
      message: 'user not found',
      code: grpc.status.NOT_FOUND
    }

    callback(error, null)

    return
  }

  const userObject = user.toJSON() as messages.User.AsObject
  const message = getUserMessage(userObject)

  callback(null, message)
}
async function listUsers (call: grpc.ServerUnaryCall<messages.UserList>, callback: grpc.sendUnaryData<messages.UserList>) {
  call.request.toObject()
  const users = await User.findAll({ raw: true })
  const usersJSON = JSON.parse(JSON.stringify(users)) as messages.User.AsObject[]
  const message = getUserListMessage(usersJSON)

  callback(null, message)
}
async function updateUser (call: grpc.ServerUnaryCall<messages.User>, callback: grpc.sendUnaryData<messages.User>) {
  const id = call.request.getId()
  const data = call.request.toObject()

  delete data.id

  const [, users] = await User.update(data, {
    where: { id }
  })

  if (!users.length) {
    const error: grpc.ServiceError = {
      name: '',
      message: 'User not found',
      code: grpc.status.NOT_FOUND
    }

    callback(error, null)

    return
  }

  const user = users[0]
  const userObject = user.toJSON() as messages.User.AsObject
  const message = getUserMessage(userObject)

  callback(null, message)
}
async function deleteUser (call: grpc.ServerUnaryCall<messages.User>, callback: grpc.sendUnaryData<messages.User>) {
  const id = call.request.getId()

  const rowsDeleted = await User.destroy({ where: { id } })

  if (!rowsDeleted) {
    const error: grpc.ServiceError = {
      name: '',
      message: 'user not found',
      code: grpc.status.NOT_FOUND
    }

    callback(error, null)

    return
  }

  const message = getUserMessage(call.request.toObject())

  callback(null, message)
}

function getUserMessage (payload: messages.User.AsObject) {
  const message = new messages.User()

  message.setId(payload.id)
  message.setUsername(payload.username)
  message.setPassword(payload.password)
  message.setEmail(payload.email)
  message.setFirstName(payload.firstName)
  message.setLastName(payload.lastName)

  return message
}

function getUserListMessage (payload: messages.User.AsObject[]) {
  const message = new messages.UserList()
  const userMessages = payload.map(getUserMessage)

  message.setUsersList(userMessages)

  return message
}

server.addService(services.UserManagerService, {
  createUser,
  getUser,
  getUserByUsername,
  getUserByEmail,
  listUsers,
  updateUser,
  deleteUser
})

function createServer () {
  return server
}

function main () {
  server.bind(`${config.users.service.host}:${config.users.service.port}`, grpc.ServerCredentials.createInsecure())
  console.log(`Server running at ${config.users.service.host}:${config.users.service.port}`)
  server.start()
}

if (!module.parent) {
  main()
}

export default createServer
