import grpc from 'grpc'
import { RefreshToken } from '@xarples/accounts-db'
import { logger, cache as getCache } from '@xarples/utils'

import messages from '../../../generated/refresh_token_pb'

const cache = getCache<string, RefreshToken | RefreshToken[]>({
  maxAge: 1000 * 60 * 60 // 1 hour
})

export async function create(
  call: grpc.ServerUnaryCall<messages.RefreshTokenRequest>,
  callback: grpc.sendUnaryData<messages.RefreshTokenRequest>
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

export async function findOne(
  call: grpc.ServerUnaryCall<messages.RefreshTokenRequest>,
  callback: grpc.sendUnaryData<messages.RefreshTokenRequest>
) {
  try {
    const id = call.request.getId()

    if (!cache.has(id)) {
      const found = await RefreshToken.findByPk(id)

      logger.info(`Fetching refresh token with id ${id} from database`)

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

      logger.info(`Creating refresh token with id ${id} in the cache`)

      cache.set(found.id, found)
    }

    logger.info(`Fetching refresh token with id ${id} from the cache`)

    const found = cache.get(id) as RefreshToken
    const message = getMessage(found)

    callback(null, message)
  } catch (e) {
    logger.error(e.message)
    logger.debug(e.stack)
    callback(e, null)
  }
}

export async function findAll(
  call: grpc.ServerUnaryCall<messages.RefreshTokenListRequest>,
  callback: grpc.sendUnaryData<messages.RefreshTokenListRequest>
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
export async function update(
  call: grpc.ServerUnaryCall<messages.RefreshTokenRequest>,
  callback: grpc.sendUnaryData<messages.RefreshTokenRequest>
) {
  try {
    const id = call.request.getId()

    logger.info(`Fetching refresh token with id ${id} from the database`)

    const data = call.request.toObject()
    const found = await RefreshToken.findByPk(id)

    delete data.id

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

    logger.info(`Updating refresh token with id ${id} from the database`)
    logger.debug('data', data)

    const updated = await found.update(data)
    const message = getMessage(updated)

    logger.info(`Updating refresh token with id ${id} from the cache`)

    cache.set(updated.id, updated)

    logger.info(`Invalidating the refresh token list of the cache`)

    cache.del('foundList')

    callback(null, message)
  } catch (e) {
    logger.error(e.message)
    logger.debug(e.stack)
    callback(e, null)
  }
}
export async function destroy(
  call: grpc.ServerUnaryCall<messages.RefreshTokenRequest>,
  callback: grpc.sendUnaryData<messages.RefreshTokenRequest>
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
  const message = new messages.RefreshTokenRequest()

  message.setId(payload.id)
  message.setUserId(payload.userId)
  message.setClientId(payload.clientId)
  message.setToken(payload.token!)
  message.setScope(payload.scope!)
  message.setCreatedAt(payload.createdAt.toString())
  message.setUpdatedAt(payload.updatedAt.toString())

  return message
}

function getMessageList(payload: RefreshToken[]) {
  const message = new messages.RefreshTokenListRequest()
  const messageList = payload.map(getMessage)

  message.setRefreshTokensList(messageList)

  return message
}
