'use strict'

import grpc from 'grpc'
import userDB from '@xarples/user-service-db'
import * as config from '@xarples/config'
import services from '../generated/users_grpc_pb'
import messages from '../generated/users_pb'

const server = new grpc.Server()
const db = userDB.setup()

async function getUser (call: grpc.ServerUnaryCall<messages.User>, callback: grpc.sendUnaryData<messages.User>) {
  const id = call.request.getId()
  const user = await db.users.findOne({
    where: { id }
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

  const message = getUserMessage(user)

  callback(null, message)
}
async function getUserByUsername (call: grpc.ServerUnaryCall<messages.User>, callback: grpc.sendUnaryData<messages.User>) {
  const username = call.request.getUsername()
  const user = await db.users.findOne({
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

  const message = getUserMessage(user)

  callback(null, message)
}
async function getUserByEmail (call: grpc.ServerUnaryCall<messages.User>, callback: grpc.sendUnaryData<messages.User>) {
  const email = call.request.getEmail()
  const user = await db.users.findOne({
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

  const message = getUserMessage(user)

  callback(null, message)
}
async function listUsers (call: grpc.ServerUnaryCall<messages.UserList>, callback: grpc.sendUnaryData<messages.UserList>) {
  call.request.toObject()
  const users = await db.users.findAll()
  const message = getUserListMessage(users)

  callback(null, message)
}
async function updateUser (call: grpc.ServerUnaryCall<messages.User>, callback: grpc.sendUnaryData<messages.User>) {
  const id = call.request.getId()
  const payload = call.request.toObject()

  const [, users] = await db.users.update(payload, {
    where: { id }
  })

  const user = users[0]

  if (!user) {
    const error: grpc.ServiceError = {
      name: '',
      message: 'user not found',
      code: grpc.status.NOT_FOUND
    }

    callback(error, null)

    return
  }

  const message = getUserMessage(user)

  callback(null, message)
}
async function deleteUser (call: grpc.ServerUnaryCall<messages.User>, callback: grpc.sendUnaryData<messages.User>) {
  const id = call.request.getId()
  const user = await db.users.findByPk(id)

  if (!user) {
    const error: grpc.ServiceError = {
      name: '',
      message: 'user not found',
      code: grpc.status.NOT_FOUND
    }

    callback(error, null)

    return
  }

  const message = getUserMessage(user)

  await user.destroy()

  callback(null, message)
}

function getUserMessage (payload: db.users) {
  const message = new messages.User()

  message.setId(payload.id)
  message.setUsername(payload.username)
  message.setEmail(payload.email)
  message.setFirstname(payload.firstName)
  message.setLastname(payload.lastName)

  return message
}

function getUserListMessage (payload: db.users[]) {
  const message = new messages.UserList()
  const userMessages = payload.map(getUserMessage)

  message.setUsersList(userMessages)

  return message
}

server.addService(services.UserManagerService, {
  getUser,
  getUserByUsername,
  getUserByEmail,
  listUsers,
  updateUser,
  deleteUser
})

function main () {
  server.bind(`${config.userService.service.host}:${config.userService.service.port}`, grpc.ServerCredentials.createInsecure())
  console.log(`Server running at ${config.userService.service.host}:${config.userService.service.port}`)
  server.start()
}

if (!module.parent) {
  main()
}
