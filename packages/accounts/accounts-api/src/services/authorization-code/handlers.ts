import grpc from 'grpc'
import { AuthorizationCode } from '@xarples/accounts-db'
import { logger, cache as getCache } from '@xarples/utils'

import messages from '../../../generated/authorization_code_pb'

const cache = getCache<string, AuthorizationCode | AuthorizationCode[]>({
  maxAge: 1000 * 60 * 60 // 1 hour
})

export async function create(
  call: grpc.ServerUnaryCall<messages.AuthorizationCodeRequest>,
  callback: grpc.sendUnaryData<messages.AuthorizationCodeRequest>
) {
  try {
    const data = call.request.toObject()

    delete data.id
    delete data.code

    logger.info(`Creating authorization code in the database`)
    logger.debug('data', data)

    const created = await AuthorizationCode.create(data)
    const message = getMessage(created)

    logger.info(
      `Creating authorization code with id ${created.id} in the cache`
    )

    cache.set(created.id, created)

    callback(null, message)
  } catch (e) {
    logger.error(e.message)
    logger.debug(e.stack)
    callback(e, null)
  }
}

export async function findOne(
  call: grpc.ServerUnaryCall<messages.AuthorizationCodeRequest>,
  callback: grpc.sendUnaryData<messages.AuthorizationCodeRequest>
) {
  try {
    const code = call.request.getCode()

    if (!cache.has(code)) {
      const found = await AuthorizationCode.findOne({ where: { code } })

      logger.info(`Fetching authorization code with code ${code} from database`)

      if (!found) {
        const error: grpc.ServiceError = {
          name: '',
          message: `authorization code not found`,
          code: grpc.status.NOT_FOUND
        }

        logger.error(
          `Can't find authorization code with code ${code} from the database`
        )

        callback(error, null)

        return
      }

      logger.info(`Creating authorization code with code ${code} in the cache`)

      cache.set(found.code!, found)
    }

    logger.info(`Fetching authorization code with code ${code} from the cache`)

    const found = cache.get(code) as AuthorizationCode
    const message = getMessage(found)

    callback(null, message)
  } catch (e) {
    logger.error(e.message)
    logger.debug(e.stack)
    callback(e, null)
  }
}

export async function findAll(
  call: grpc.ServerUnaryCall<messages.AuthorizationCodeListRequest>,
  callback: grpc.sendUnaryData<messages.AuthorizationCodeListRequest>
) {
  try {
    call.request.toObject()

    if (!cache.has('foundList')) {
      logger.info(`Fetching authorization code list from the database`)

      const foundList = await AuthorizationCode.findAll({ raw: true })

      logger.info(`Creating authorization code in the cache`)

      cache.set('foundList', foundList)
    }

    logger.info(`Fetching authorization code list from the cache`)

    const foundList = cache.get('foundList') as AuthorizationCode[]
    const message = getMessageList(foundList)

    callback(null, message)
  } catch (e) {
    logger.error(e.message)
    logger.debug(e.stack)
    callback(e, null)
  }
}
export async function update(
  call: grpc.ServerUnaryCall<messages.AuthorizationCodeRequest>,
  callback: grpc.sendUnaryData<messages.AuthorizationCodeRequest>
) {
  try {
    const id = call.request.getId()

    logger.info(`Fetching authorization code with id ${id} from the database`)

    const data = call.request.toObject()
    const found = await AuthorizationCode.findByPk(id)

    delete data.id

    if (!found) {
      const error: grpc.ServiceError = {
        name: '',
        message: `authorization code not found`,
        code: grpc.status.NOT_FOUND
      }

      logger.error(
        `Can't find authorization code with id ${id} from the database`
      )

      callback(error, null)

      return
    }

    logger.info(`Updating authorization code with id ${id} from the database`)
    logger.debug('data', data)

    const updated = await found.update(data)
    const message = getMessage(updated)

    logger.info(`Updating authorization code with id ${id} from the cache`)

    cache.set(updated.id, updated)

    logger.info(`Invalidating the authorization code list of the cache`)

    cache.del('foundList')

    callback(null, message)
  } catch (e) {
    logger.error(e.message)
    logger.debug(e.stack)
    callback(e, null)
  }
}
export async function destroy(
  call: grpc.ServerUnaryCall<messages.AuthorizationCodeRequest>,
  callback: grpc.sendUnaryData<messages.AuthorizationCodeRequest>
) {
  try {
    const id = call.request.getId()

    logger.info(`Fetching authorization code with id ${id} from the database`)

    const found = await AuthorizationCode.findByPk(id)

    if (!found) {
      const error: grpc.ServiceError = {
        name: '',
        message: `authorization code not found`,
        code: grpc.status.NOT_FOUND
      }

      logger.error(
        `Can't find authorization code with id ${id} from the database`
      )

      callback(error, null)

      return
    }

    const clone = JSON.parse(JSON.stringify(found)) as AuthorizationCode

    logger.info(`Deleting authorization code with id ${id} from the database`)

    await found.destroy()

    logger.info(`Deleting authorization code with id ${id} from the cache`)

    cache.del(clone.id)

    logger.info(`Invalidating the AuthorizationCode list of the cache`)

    cache.del('foundList')

    const message = getMessage(clone)

    callback(null, message)
  } catch (e) {
    logger.error(e.message)
    logger.debug(e.stack)
    callback(e, null)
  }
}

function getMessage(payload: AuthorizationCode) {
  const message = new messages.AuthorizationCodeRequest()

  message.setId(payload.id)
  message.setUserId(payload.userId)
  message.setClientId(payload.clientId)
  message.setCode(payload.code!)
  message.setScope(payload.scope!)
  message.setCodeChallenge(payload.codeChallenge)
  message.setCodeChallengeMethod(payload.codeChallengeMethod!)
  message.setCreatedAt(payload.createdAt.toString())
  message.setUpdatedAt(payload.updatedAt.toString())

  return message
}

function getMessageList(payload: AuthorizationCode[]) {
  const message = new messages.AuthorizationCodeListRequest()
  const messageList = payload.map(getMessage)

  message.setAuthorizationCodesList(messageList)

  return message
}
