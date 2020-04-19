import grpc from 'grpc'
import { RefreshToken, Client, User } from '@xarples/accounts-db'
import { messages } from '@xarples/accounts-protos'
import { logger, cache as getCache } from '@xarples/utils'

import {
  getRefreshTokenMessage as getMessage,
  getRefreshTokenListMessage as getMessageList
} from '../utils'

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

    const created = await RefreshToken.create(data, { include: [Client, User] })

    await created.reload()

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

      await found.reload()

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

export async function destroyRefreshToken(
  call: grpc.ServerUnaryCall<messages.RefreshToken>,
  callback: grpc.sendUnaryData<messages.RefreshToken>
) {
  try {
    const token = call.request.getToken()

    logger.info(`Fetching refresh token with token ${token} from the database`)

    const found = await RefreshToken.findOne({
      where: { token },
      include: [User, Client]
    })

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

    const clone = JSON.parse(JSON.stringify(found)) as RefreshToken

    logger.info(`Deleting refresh token with token ${token} from the database`)

    await found.destroy()

    logger.info(`Deleting refresh token with token ${token} from the cache`)

    cache.del(clone.token!)

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
