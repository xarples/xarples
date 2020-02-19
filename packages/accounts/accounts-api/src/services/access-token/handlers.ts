import grpc from 'grpc'
import { AccessToken } from '@xarples/accounts-db'
import { logger, cache as getCache } from '@xarples/utils'

import messages from '../../../generated/access_token_pb'

const cache = getCache<string, AccessToken | AccessToken[]>({
  maxAge: 1000 * 60 * 60 // 1 hour
})

export async function create(
  call: grpc.ServerUnaryCall<messages.AccessTokenRequest>,
  callback: grpc.sendUnaryData<messages.AccessTokenRequest>
) {
  try {
    const data = call.request.toObject()

    delete data.id

    logger.info(`Creating access token in the database`)
    logger.debug('data', data)

    const created = await AccessToken.create(data)
    const message = getMessage(created)

    logger.info(`Creating access token with id ${created.id} in the cache`)

    cache.set(created.id, created)

    callback(null, message)
  } catch (e) {
    logger.error(e.message)
    logger.debug(e.stack)
    callback(e, null)
  }
}

export async function findOne(
  call: grpc.ServerUnaryCall<messages.AccessTokenRequest>,
  callback: grpc.sendUnaryData<messages.AccessTokenRequest>
) {
  try {
    const id = call.request.getId()

    if (!cache.has(id)) {
      const found = await AccessToken.findByPk(id)

      logger.info(`Fetching access token with id ${id} from database`)

      if (!found) {
        const error: grpc.ServiceError = {
          name: '',
          message: `access token not found`,
          code: grpc.status.NOT_FOUND
        }

        logger.error(`Can't find access token with id ${id} from the database`)

        callback(error, null)

        return
      }

      logger.info(`Creating access token with id ${id} in the cache`)

      cache.set(found.id, found)
    }

    logger.info(`Fetching access token with id ${id} from the cache`)

    const found = cache.get(id) as AccessToken
    const message = getMessage(found)

    callback(null, message)
  } catch (e) {
    logger.error(e.message)
    logger.debug(e.stack)
    callback(e, null)
  }
}

export async function findAll(
  call: grpc.ServerUnaryCall<messages.AccessTokenListRequest>,
  callback: grpc.sendUnaryData<messages.AccessTokenListRequest>
) {
  try {
    call.request.toObject()

    if (!cache.has('foundList')) {
      logger.info(`Fetching access token list from the database`)

      const foundList = await AccessToken.findAll({ raw: true })

      logger.info(`Creating access token in the cache`)

      cache.set('foundList', foundList)
    }

    logger.info(`Fetching access token list from the cache`)

    const foundList = cache.get('foundList') as AccessToken[]
    const message = getMessageList(foundList)

    callback(null, message)
  } catch (e) {
    logger.error(e.message)
    logger.debug(e.stack)
    callback(e, null)
  }
}
export async function update(
  call: grpc.ServerUnaryCall<messages.AccessTokenRequest>,
  callback: grpc.sendUnaryData<messages.AccessTokenRequest>
) {
  try {
    const id = call.request.getId()

    logger.info(`Fetching access token with id ${id} from the database`)

    const data = call.request.toObject()
    const found = await AccessToken.findByPk(id)

    delete data.id

    if (!found) {
      const error: grpc.ServiceError = {
        name: '',
        message: `access token not found`,
        code: grpc.status.NOT_FOUND
      }

      logger.error(`Can't find access token with id ${id} from the database`)

      callback(error, null)

      return
    }

    logger.info(`Updating access token with id ${id} from the database`)
    logger.debug('data', data)

    const updated = await found.update(data)
    const message = getMessage(updated)

    logger.info(`Updating access token with id ${id} from the cache`)

    cache.set(updated.id, updated)

    logger.info(`Invalidating the access token list of the cache`)

    cache.del('foundList')

    callback(null, message)
  } catch (e) {
    logger.error(e.message)
    logger.debug(e.stack)
    callback(e, null)
  }
}
export async function destroy(
  call: grpc.ServerUnaryCall<messages.AccessTokenRequest>,
  callback: grpc.sendUnaryData<messages.AccessTokenRequest>
) {
  try {
    const id = call.request.getId()

    logger.info(`Fetching access token with id ${id} from the database`)

    const found = await AccessToken.findByPk(id)

    if (!found) {
      const error: grpc.ServiceError = {
        name: '',
        message: `access token not found`,
        code: grpc.status.NOT_FOUND
      }

      logger.error(`Can't find access token with id ${id} from the database`)

      callback(error, null)

      return
    }

    const clone = JSON.parse(JSON.stringify(found)) as AccessToken

    logger.info(`Deleting access token with id ${id} from the database`)

    await found.destroy()

    logger.info(`Deleting access token with id ${id} from the cache`)

    cache.del(clone.id)

    logger.info(`Invalidating the accessToken list of the cache`)

    cache.del('foundList')

    const message = getMessage(clone)

    callback(null, message)
  } catch (e) {
    logger.error(e.message)
    logger.debug(e.stack)
    callback(e, null)
  }
}

function getMessage(payload: AccessToken) {
  const message = new messages.AccessTokenRequest()

  message.setId(payload.id)
  message.setClientId(payload.clientId)
  message.setUserId(payload.userId)
  message.setToken(payload.token!)
  message.setScope(payload.scope!)
  message.setCreatedAt(payload.createdAt.toString())
  message.setUpdatedAt(payload.updatedAt.toString())

  return message
}

function getMessageList(payload: AccessToken[]) {
  const message = new messages.AccessTokenListRequest()
  const messageList = payload.map(getMessage)

  message.setAccessTokensList(messageList)

  return message
}
