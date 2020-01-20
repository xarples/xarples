'use strict'

import grpc from 'grpc'
import { User } from '@xarples/users-db'
import config from '@xarples/config'
import services from '../generated/users_grpc_pb'
import messages from '../generated/users_pb'

const server = new grpc.Server()

async function createUser(
  call: grpc.ServerUnaryCall<messages.User>,
  callback: grpc.sendUnaryData<messages.User>
) {
  try {
    const data = call.request.toObject()

    delete data.id

    const user = await User.create(data)
    const message = getUserMessage(user)

    callback(null, message)
  } catch (e) {
    callback(e, null)
  }
}

async function getUser(
  call: grpc.ServerUnaryCall<messages.User>,
  callback: grpc.sendUnaryData<messages.User>
) {
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

  const message = getUserMessage(user)

  callback(null, message)
}
async function getUserByUsername(
  call: grpc.ServerUnaryCall<messages.User>,
  callback: grpc.sendUnaryData<messages.User>
) {
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

  const message = getUserMessage(user)

  callback(null, message)
}
async function getUserByEmail(
  call: grpc.ServerUnaryCall<messages.User>,
  callback: grpc.sendUnaryData<messages.User>
) {
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

  const message = getUserMessage(user)

  callback(null, message)
}
async function listUsers(
  call: grpc.ServerUnaryCall<messages.UserList>,
  callback: grpc.sendUnaryData<messages.UserList>
) {
  call.request.toObject()
  const users = await User.findAll({ raw: true })
  const message = getUserListMessage(users)

  callback(null, message)
}
async function updateUser(
  call: grpc.ServerUnaryCall<messages.User>,
  callback: grpc.sendUnaryData<messages.User>
) {
  const id = call.request.getId()
  const data = call.request.toObject()

  const user = await User.findByPk(id)

  delete data.id

  if (!user) {
    const error: grpc.ServiceError = {
      name: '',
      message: 'User not found',
      code: grpc.status.NOT_FOUND
    }

    callback(error, null)

    return
  }

  const updated = await user.update(data)
  const message = getUserMessage(updated)

  callback(null, message)
}
async function deleteUser(
  call: grpc.ServerUnaryCall<messages.User>,
  callback: grpc.sendUnaryData<messages.User>
) {
  const id = call.request.getId()

  const user = await User.findByPk(id)
  const clone = JSON.parse(JSON.stringify(user)) as User

  if (!user) {
    const error: grpc.ServiceError = {
      name: '',
      message: 'user not found',
      code: grpc.status.NOT_FOUND
    }

    callback(error, null)

    return
  }

  await user.destroy()

  const message = getUserMessage(clone)

  callback(null, message)
}

function getUserMessage(payload: User) {
  const message = new messages.User()

  message.setId(payload.id)
  message.setUsername(payload.username)
  message.setPassword(payload.password)
  message.setEmail(payload.email)
  message.setFirstName(payload.firstName)
  message.setLastName(payload.lastName)

  return message
}

function getUserListMessage(payload: User[]) {
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

function createServer() {
  return server
}

function main() {
  server.bind(
    `${config.users.service.host}:${config.users.service.port}`,
    grpc.ServerCredentials.createInsecure()
  )
  console.log(
    `Server running at ${config.users.service.host}:${config.users.service.port}`
  )
  server.start()
}

if (!module.parent) {
  main()
}

export default createServer
