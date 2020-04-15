import grpc from 'grpc'
import { RefreshToken, Client, User } from '@xarples/accounts-db'
import { messages } from '@xarples/accounts-protos'
import { logger, cache as getCache } from '@xarples/utils'

import { getMessage as getClientMessage } from './client'
import { getMessage as getUserMessage } from './user'

const cache = getCache<string, RefreshToken | RefreshToken[]>({
  maxAge: 1000 * 60 * 60 // 1 hour
})

export async function createRefreshToken(
  call: grpc.ServerUnaryCall<messages.RefreshToken>,
  callback: grpc.sendUnaryData<messages.RefreshToken>
) {
  try {
    const data = call.request.toObject()

    delete data.id
    delete data.token

    logger.info(`Creating refresh token in the database`)
    logger.debug('data', data)

    const created = await RefreshToken.create(data)
    const message = getMessage(created)

    logger.info(`Creating refresh token with id ${created.id} in the cache`)

    cache.set(created.id, created)

    callback(null, message)
  } catch (e) {
    logger.error(e.message)
    logger.debug(e.stack)
    callback(e, null)
  }
}

export async function findOneRefreshToken(
  call: grpc.ServerUnaryCall<messages.RefreshToken>,
  callback: grpc.sendUnaryData<messages.RefreshToken>
) {
  try {
    const token = call.request.getToken()

    if (!cache.has(token)) {
      const found = await RefreshToken.findOne({
        where: { token },
        include: [Client, User]
      })

      logger.info(`Fetching refresh token with token ${token} from database`)

      if (!found) {
        const error: grpc.ServiceError = {
          name: '',
          message: `refresh token not found`,
          code: grpc.status.NOT_FOUND
        }

        logger.error(
          `Can't find refresh token with token ${token} from the database`
        )

        callback(error, null)

        return
      }

      logger.info(`Creating refresh token with token ${token} in the cache`)

      cache.set(found.token!, found)
    }

    logger.info(`Fetching refresh token with token ${token} from the cache`)

    const found = cache.get(token) as RefreshToken
    const message = getMessage(found)

    callback(null, message)
  } catch (e) {
    logger.error(e.message)
    logger.debug(e.stack)
    callback(e, null)
  }
}

export async function findAllRefreshToken(
  call: grpc.ServerUnaryCall<messages.RefreshTokenList>,
  callback: grpc.sendUnaryData<messages.RefreshTokenList>
) {
  try {
    call.request.toObject()

    if (!cache.has('foundList')) {
      logger.info(`Fetching refresh token list from the database`)

      const foundList = await RefreshToken.findAll({ raw: true })

      logger.info(`Creating refresh token in the cache`)

      cache.set('foundList', foundList)
    }

    logger.info(`Fetching refresh token list from the cache`)

    const foundList = cache.get('foundList') as RefreshToken[]
    const message = getMessageList(foundList)

    callback(null, message)
  } catch (e) {
    logger.error(e.message)
    logger.debug(e.stack)
    callback(e, null)
  }
}
// export async function updateRefreshToken(
//   call: grpc.ServerUnaryCall<messages.RefreshToken>,
//   callback: grpc.sendUnaryData<messages.RefreshToken>
// ) {
//   try {
//     const id = call.request.getId()

//     logger.info(`Fetching refresh token with id ${id} from the database`)

//     const data = call.request.toObject()
//     const found = await RefreshToken.findByPk(id)

//     delete data.id

//     if (!found) {
//       const error: grpc.ServiceError = {
//         name: '',
//         message: `refresh token not found`,
//         code: grpc.status.NOT_FOUND
//       }

//       logger.error(`Can't find refresh token with id ${id} from the database`)

//       callback(error, null)

//       return
//     }

//     logger.info(`Updating refresh token with id ${id} from the database`)
//     logger.debug('data', data)

//     const updated = await found.update(data)
//     const message = getMessage(updated)

//     logger.info(`Updating refresh token with id ${id} from the cache`)

//     cache.set(updated.id, updated)

//     logger.info(`Invalidating the refresh token list of the cache`)

//     cache.del('foundList')

//     callback(null, message)
//   } catch (e) {
//     logger.error(e.message)
//     logger.debug(e.stack)
//     callback(e, null)
//   }
// }
export async function destroyRefreshToken(
  call: grpc.ServerUnaryCall<messages.RefreshToken>,
  callback: grpc.sendUnaryData<messages.RefreshToken>
) {
  try {
    const id = call.request.getId()

    logger.info(`Fetching refresh token with id ${id} from the database`)

    const found = await RefreshToken.findByPk(id)

    if (!found) {
      const error: grpc.ServiceError = {
        name: '',
        message: `refresh token not found`,
        code: grpc.status.NOT_FOUND
      }

      logger.error(`Can't find refresh token with id ${id} from the database`)

      callback(error, null)

      return
    }

    const clone = JSON.parse(JSON.stringify(found)) as RefreshToken

    logger.info(`Deleting refresh token with id ${id} from the database`)

    await found.destroy()

    logger.info(`Deleting refresh token with id ${id} from the cache`)

    cache.del(clone.id)

    logger.info(`Invalidating the RefreshToken list of the cache`)

    cache.del('foundList')

    const message = getMessage(clone)

    callback(null, message)
  } catch (e) {
    logger.error(e.message)
    logger.debug(e.stack)
    callback(e, null)
  }
}

function getMessage(payload: RefreshToken) {
  const message = new messages.RefreshToken()
  const client = getClientMessage(payload.client)
  const user = getUserMessage(payload.user)

  message.setId(payload.id)
  message.setUserId(payload.userId)
  message.setClientId(payload.clientId)
  message.setToken(payload.token!)
  message.setScope(payload.scope!)
  message.setClient(client)
  message.setUser(user)
  message.setCreatedAt(payload.createdAt.toString())
  message.setUpdatedAt(payload.updatedAt.toString())

  return message
}

function getMessageList(payload: RefreshToken[]) {
  const message = new messages.RefreshTokenList()
  const messageList = payload.map(getMessage)

  message.setRefreshTokensList(messageList)

  return message
}
