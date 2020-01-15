'use strict'

import grpc from 'grpc'
import userDB from '@xarples/users-db'
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
  const users = await db.users.findMany()
  const message = getUserListMessage(users)

  callback(null, message)
}
async function updateUser (call: grpc.ServerUnaryCall<messages.User>, callback: grpc.sendUnaryData<messages.User>) {
  const id = call.request.getId()
  const data = call.request.toObject()

  delete data.id

  const user = await db.users.update({
    data,
    where: { id }
  })

  if (!user) {
    const error: grpc.ServiceError = {
      name: '',
      message: 'User not found',
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
  const user = await db.users.delete({ where: { id } })

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

function getUserMessage (payload: messages.User.AsObject) {
  const message = new messages.User()

  message.setId(payload.id)
  message.setUsername(payload.username)
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

export default server
