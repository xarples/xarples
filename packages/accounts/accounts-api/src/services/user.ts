import grpc from 'grpc'
import { User } from '@xarples/accounts-db'
import { messages } from '@xarples/accounts-protos'
import { logger, cache as getCache, encrypt } from '@xarples/utils'

const cache = getCache<string, User | User[]>({
  maxAge: 1000 * 60 * 60 // 1 hour
})

export async function createUser(
  call: grpc.ServerUnaryCall<messages.User>,
  callback: grpc.sendUnaryData<messages.User>
) {
  try {
    const data = call.request.toObject()

    delete data.id

    logger.info(`Creating user in the database`)
    logger.debug('data', data)

    const created = await User.create(data)
    const message = getMessage(created)

    logger.info(`Creating user with id ${created.id} in the cache`)

    cache.set(created.id, created)

    callback(null, message)
  } catch (e) {
    logger.error(e.message)
    logger.debug(e.stack)
    callback(e, null)
  }
}

export async function findOneUser(
  call: grpc.ServerUnaryCall<messages.User>,
  callback: grpc.sendUnaryData<messages.User>
) {
  try {
    const id = call.request.getId()
    const payload = call.request.toObject()

    if (!cache.has(id)) {
      const found = await User.findOne({
        where: { username: payload.username }
      })

      logger.info(`Fetching user with id ${id} from database`)

      if (!found) {
        const error: grpc.ServiceError = {
          name: '',
          message: `user not found`,
          code: grpc.status.NOT_FOUND
        }

        logger.error(`Can't find user with id ${id} from the database`)

        callback(error, null)

        return
      }

      logger.info(`Creating user with id ${id} in the cache`)

      cache.set(found.id, found)
    }

    logger.info(`Fetching user with id ${id} from the cache`)

    const found = cache.get(id) as User
    const message = getMessage(found)

    callback(null, message)
  } catch (e) {
    logger.error(e.message)
    logger.debug(e.stack)
    callback(e, null)
  }
}

export async function findUserByUsername(
  call: grpc.ServerUnaryCall<messages.User>,
  callback: grpc.sendUnaryData<messages.User>
) {
  try {
    const username = call.request.getUsername()

    const found = await User.findOne({
      where: { username }
    })

    logger.info(`Fetching user with username ${username} from database`)

    if (!found) {
      const error: grpc.ServiceError = {
        name: '',
        message: `user not found`,
        code: grpc.status.NOT_FOUND
      }

      logger.error(
        `Can't find user with username ${username} from the database`
      )

      callback(error, null)

      return
    }

    const message = getMessage(found)

    callback(null, message)
  } catch (e) {
    logger.error(e.message)
    logger.debug(e.stack)
    callback(e, null)
  }
}

export async function findAllUser(
  call: grpc.ServerUnaryCall<messages.UserList>,
  callback: grpc.sendUnaryData<messages.UserList>
) {
  try {
    call.request.toObject()

    if (!cache.has('foundList')) {
      logger.info(`Fetching user list from the database`)

      const foundList = await User.findAll({ raw: true })

      logger.info(`Creating user in the cache`)

      cache.set('foundList', foundList)
    }

    logger.info(`Fetching user list from the cache`)

    const foundList = cache.get('foundList') as User[]
    const message = getMessageList(foundList)

    callback(null, message)
  } catch (e) {
    logger.error(e.message)
    logger.debug(e.stack)
    callback(e, null)
  }
}
export async function updateUser(
  call: grpc.ServerUnaryCall<messages.User>,
  callback: grpc.sendUnaryData<messages.User>
) {
  try {
    const id = call.request.getId()

    logger.info(`Fetching user with id ${id} from the database`)

    const data = call.request.toObject()
    const found = await User.findByPk(id)

    delete data.id

    if (!data.password) {
      delete data.password
    } else {
      data.password = encrypt(data.password)
    }

    if (!found) {
      const error: grpc.ServiceError = {
        name: '',
        message: `user not found`,
        code: grpc.status.NOT_FOUND
      }

      logger.error(`Can't find user with id ${id} from the database`)

      callback(error, null)

      return
    }

    logger.info(`Updating user with id ${id} from the database`)
    logger.info('data', data)
    logger.debug('data', data)

    const updated = await found.update(data)
    const message = getMessage(updated)

    logger.info(`Updating user with id ${id} from the cache`)

    cache.set(updated.id, updated)

    logger.info(`Invalidating the user list of the cache`)

    cache.del('foundList')

    callback(null, message)
  } catch (e) {
    logger.error(e.message)
    logger.debug(e.stack)
    callback(e, null)
  }
}
export async function destroyUser(
  call: grpc.ServerUnaryCall<messages.User>,
  callback: grpc.sendUnaryData<messages.User>
) {
  try {
    const id = call.request.getId()

    logger.info(`Fetching user with id ${id} from the database`)

    const found = await User.findByPk(id)

    if (!found) {
      const error: grpc.ServiceError = {
        name: '',
        message: `user not found`,
        code: grpc.status.NOT_FOUND
      }

      logger.error(`Can't find user with id ${id} from the database`)

      callback(error, null)

      return
    }

    const clone = JSON.parse(JSON.stringify(found)) as User

    logger.info(`Deleting user with id ${id} from the database`)

    await found.destroy()

    logger.info(`Deleting user with id ${id} from the cache`)

    cache.del(clone.id)

    logger.info(`Invalidating the User list of the cache`)

    cache.del('foundList')

    const message = getMessage(clone)

    callback(null, message)
  } catch (e) {
    logger.error(e.message)
    logger.debug(e.stack)
    callback(e, null)
  }
}

export function getMessage(payload: User) {
  const message = new messages.User()

  message.setId(payload.id)
  message.setUsername(payload.username)
  message.setPassword(payload.password)
  message.setEmail(payload.email)
  message.setFirstName(payload.firstName)
  message.setLastName(payload.lastName)
  message.setCreatedAt(payload.createdAt.toString())
  message.setUpdatedAt(payload.updatedAt.toString())

  return message
}

function getMessageList(payload: User[]) {
  const message = new messages.UserList()
  const messageList = payload.map(getMessage)

  message.setUsersList(messageList)

  return message
}
