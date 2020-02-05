'use strict'

import grpc from 'grpc'
import { User } from '@xarples/users-db'
import config from '@xarples/config'
import { logger, cache as getCache } from '@xarples/utils'
import services from '../generated/users_grpc_pb'
import messages from '../generated/users_pb'

const server = new grpc.Server()
const cache = getCache<string, User | User[]>({
  maxAge: 1000 * 60 * 60 // 1 hour
})

async function createUser(
  call: grpc.ServerUnaryCall<messages.User>,
  callback: grpc.sendUnaryData<messages.User>
) {
  try {
    const data = call.request.toObject()

    delete data.id

    logger.info('Creating user in the database')
    logger.debug('data', data)

    const user = await User.create(data)
    const message = getUserMessage(user)

    logger.info(`Creating user with id ${user.id} in the cache`)

    cache.set(user.id, user)
    cache.set(user.username, user)
    cache.set(user.email, user)

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

    if (!cache.has(id)) {
      const user = await User.findByPk(id)

      logger.info(`Fetching user with id ${id} from database`)

      if (!user) {
        const error: grpc.ServiceError = {
          name: '',
          message: 'user not found',
          code: grpc.status.NOT_FOUND
        }

        logger.error(`Can't find user with id ${id} from the database`)

        callback(error, null)

        return
      }

      logger.info(`Creating user with id ${id} in the database`)

      cache.set(user.id, user)
      cache.set(user.username, user)
      cache.set(user.email, user)
    }

    logger.info(`Fetching user with id ${id} from the cache`)

    const user = cache.get(id) as User
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

    if (!cache.has(username)) {
      logger.info(`Fetching user with username: ${username} from the database`)

      const user = await User.findOne({
        where: { username }
      })

      if (!user) {
        const error: grpc.ServiceError = {
          name: '',
          message: 'user not found',
          code: grpc.status.NOT_FOUND
        }

        logger.error(
          `Can't find user with username ${username} from the database`
        )

        callback(error, null)

        return
      }

      logger.info(`Creating user with username ${username} in the cache`)

      cache.set(user.id, user)
      cache.set(user.username, user)
      cache.set(user.email, user)
    }

    logger.info(`Fetching user with username ${username} from the cache`)

    const user = cache.get(username) as User
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

    if (!cache.has(email)) {
      logger.info(`Fetching user with email ${email} from the database`)

      const user = await User.findOne({
        where: { email }
      })

      if (!user) {
        const error: grpc.ServiceError = {
          name: '',
          message: 'user not found',
          code: grpc.status.NOT_FOUND
        }

        logger.error(`Can't find user with email ${email} from the database`)

        callback(error, null)

        return
      }

      logger.info(`Creating user with username ${email} in the cache`)

      cache.set(user.id, user)
      cache.set(user.username, user)
      cache.set(user.email, user)
    }

    logger.info(`Fetching user with username ${email} from the cache`)

    const user = cache.get(email) as User
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
    call.request.toObject()

    if (!cache.has('users')) {
      logger.info('Fetching users from the database')

      const users = await User.findAll({ raw: true })

      logger.info('Creating users in the cache')

      cache.set('users', users)
    }

    logger.info('Fetching users from the cache')

    const users = cache.get('users') as User[]
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

    logger.info(`Fetching user with id ${id} from the database`)

    const data = call.request.toObject()
    const user = await User.findByPk(id)

    delete data.id

    if (!user) {
      const error: grpc.ServiceError = {
        name: '',
        message: 'User not found',
        code: grpc.status.NOT_FOUND
      }

      logger.error(`Can't find user with id ${id} from the database`)

      callback(error, null)

      return
    }

    logger.info(`Updating user with id ${id} from the database`)
    logger.debug('data', data)

    const updated = await user.update(data)
    const message = getUserMessage(updated)

    logger.info(`Updating user with id ${id} from the cache`)

    cache.set(user.id, user)
    cache.set(user.username, user)
    cache.set(user.email, user)

    logger.info('Invalidating the user list of the cache')

    cache.del('users')

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

    logger.info(`Fetching user with id ${id} from the database`)

    const user = await User.findByPk(id)
    const clone = JSON.parse(JSON.stringify(user)) as User

    if (!user) {
      const error: grpc.ServiceError = {
        name: '',
        message: 'user not found',
        code: grpc.status.NOT_FOUND
      }

      logger.error(`Can't find user with id ${id} from the database`)

      callback(error, null)

      return
    }

    logger.info(`Deleting user with id ${id} from the database`)

    await user.destroy()

    logger.info(`Deleting user with id ${id} from the cache`)

    cache.del(clone.id)
    cache.del(clone.username)
    cache.del(clone.email)

    logger.info('Invalidating the user list of the cache')

    cache.del('users')

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
