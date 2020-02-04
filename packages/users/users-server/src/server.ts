'use strict'

import grpc from 'grpc'
import { User } from '@xarples/users-db'
import config from '@xarples/config'
import utils from '@xarples/utils'
import services from '../generated/users_grpc_pb'
import messages from '../generated/users_pb'

const server = new grpc.Server()
const { logger } = utils

async function createUser(
  call: grpc.ServerUnaryCall<messages.User>,
  callback: grpc.sendUnaryData<messages.User>
) {
  try {
    const data = call.request.toObject()

    delete data.id

    logger.info('Creating user')
    logger.debug('data', data)

    const user = await User.create(data)
    const message = getUserMessage(user)

    callback(null, message)
  } catch (e) {
    logger.error(e.message)
    logger.debug(e.stack)
    callback(e, null)
  }
}

async function getUser(
  call: grpc.ServerUnaryCall<messages.User>,
  callback: grpc.sendUnaryData<messages.User>
) {
  try {
    const id = call.request.getId()
    const user = await User.findByPk(id)

    logger.info(`Fetching user with id ${id}`)

    if (!user) {
      const error: grpc.ServiceError = {
        name: '',
        message: 'user not found',
        code: grpc.status.NOT_FOUND
      }

      logger.error(`Can't find user with id ${id}`)

      callback(error, null)

      return
    }

    const message = getUserMessage(user)

    callback(null, message)
  } catch (e) {
    logger.error(e.message)
    logger.debug(e.stack)
    callback(e, null)
  }
}
async function getUserByUsername(
  call: grpc.ServerUnaryCall<messages.User>,
  callback: grpc.sendUnaryData<messages.User>
) {
  try {
    const username = call.request.getUsername()

    logger.info(`Fetching user with username: ${username}`)

    const user = await User.findOne({
      where: { username }
    })

    if (!user) {
      const error: grpc.ServiceError = {
        name: '',
        message: 'user not found',
        code: grpc.status.NOT_FOUND
      }

      logger.error(`Can't find user with username ${username}`)

      callback(error, null)

      return
    }

    const message = getUserMessage(user)

    callback(null, message)
  } catch (e) {
    logger.error(e.message)
    logger.debug(e.stack)
    callback(e, null)
  }
}
async function getUserByEmail(
  call: grpc.ServerUnaryCall<messages.User>,
  callback: grpc.sendUnaryData<messages.User>
) {
  try {
    const email = call.request.getEmail()

    logger.info(`Fetching user with email ${email}`)

    const user = await User.findOne({
      where: { email }
    })

    if (!user) {
      const error: grpc.ServiceError = {
        name: '',
        message: 'user not found',
        code: grpc.status.NOT_FOUND
      }

      logger.error(`Can't find user with email ${email}`)

      callback(error, null)

      return
    }

    const message = getUserMessage(user)

    callback(null, message)
  } catch (e) {
    logger.error(e.message)
    logger.debug(e.stack)
    callback(e, null)
  }
}
async function listUsers(
  call: grpc.ServerUnaryCall<messages.UserList>,
  callback: grpc.sendUnaryData<messages.UserList>
) {
  try {
    logger.info('Fetching users')

    call.request.toObject()
    const users = await User.findAll({ raw: true })
    const message = getUserListMessage(users)

    callback(null, message)
  } catch (e) {
    logger.error(e.message)
    logger.debug(e.stack)
    callback(e, null)
  }
}
async function updateUser(
  call: grpc.ServerUnaryCall<messages.User>,
  callback: grpc.sendUnaryData<messages.User>
) {
  try {
    const id = call.request.getId()

    logger.info(`Fetching user with id ${id}`)

    const data = call.request.toObject()
    const user = await User.findByPk(id)

    delete data.id

    if (!user) {
      const error: grpc.ServiceError = {
        name: '',
        message: 'User not found',
        code: grpc.status.NOT_FOUND
      }

      logger.error(`Can't find user with id ${id}`)

      callback(error, null)

      return
    }

    logger.info(`Updating user with id: ${id}`)
    logger.debug('data', data)

    const updated = await user.update(data)
    const message = getUserMessage(updated)

    callback(null, message)
  } catch (e) {
    logger.error(e.message)
    logger.debug(e.stack)
    callback(e, null)
  }
}
async function deleteUser(
  call: grpc.ServerUnaryCall<messages.User>,
  callback: grpc.sendUnaryData<messages.User>
) {
  try {
    const id = call.request.getId()

    logger.info(`Fetching user with id ${id}`)

    const user = await User.findByPk(id)
    const clone = JSON.parse(JSON.stringify(user)) as User

    if (!user) {
      const error: grpc.ServiceError = {
        name: '',
        message: 'user not found',
        code: grpc.status.NOT_FOUND
      }

      logger.error(`Can't find user with id ${id}`)

      callback(error, null)

      return
    }

    logger.info(`Deleting user with id ${id}`)

    await user.destroy()

    const message = getUserMessage(clone)

    callback(null, message)
  } catch (e) {
    logger.error(e.message)
    logger.debug(e.stack)
    callback(e, null)
  }
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

export default function createServer() {
  return server
}

function main() {
  const { host, port } = config.users.service

  server.bind(`${host}:${port}`, grpc.ServerCredentials.createInsecure())
  server.start()
  logger.info(`Server running at ${host}:${port}`)
}

if (!module.parent) {
  main()
}
