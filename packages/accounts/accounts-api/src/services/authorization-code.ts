import grpc from 'grpc'
import { AuthorizationCode } from '@xarples/accounts-db'
import { messages } from '@xarples/accounts-protos'
import { logger, cache as getCache } from '@xarples/utils'

import {
  getAuthorizationCodeMessage as getMessage,
  getAuthorizationCodeListMessage as getMessageList
} from '../utils'

const cache = getCache<string, AuthorizationCode | AuthorizationCode[]>({
  maxAge: 1000 * 60 * 60 // 1 hour
})

export async function createAuthorizationCode(
  call: grpc.ServerUnaryCall<messages.AuthorizationCode>,
  callback: grpc.sendUnaryData<messages.AuthorizationCode>
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

export async function findOneAuthorizationCode(
  call: grpc.ServerUnaryCall<messages.AuthorizationCode>,
  callback: grpc.sendUnaryData<messages.AuthorizationCode>
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

export async function findAllAuthorizationCode(
  call: grpc.ServerUnaryCall<messages.AuthorizationCodeList>,
  callback: grpc.sendUnaryData<messages.AuthorizationCodeList>
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
// export async function updateAuthorizationCode(
//   call: grpc.ServerUnaryCall<messages.AuthorizationCode>,
//   callback: grpc.sendUnaryData<messages.AuthorizationCode>
// ) {
//   try {
//     const id = call.request.getId()

//     logger.info(`Fetching authorization code with id ${id} from the database`)

//     const data = call.request.toObject()
//     const found = await AuthorizationCode.findByPk(id)

//     delete data.id

//     if (!found) {
//       const error: grpc.ServiceError = {
//         name: '',
//         message: `authorization code not found`,
//         code: grpc.status.NOT_FOUND
//       }

//       logger.error(
//         `Can't find authorization code with id ${id} from the database`
//       )

//       callback(error, null)

//       return
//     }

//     logger.info(`Updating authorization code with id ${id} from the database`)
//     logger.debug('data', data)

//     const updated = await found.update(data)
//     const message = getMessage(updated)

//     logger.info(`Updating authorization code with id ${id} from the cache`)

//     cache.set(updated.id, updated)

//     logger.info(`Invalidating the authorization code list of the cache`)

//     cache.del('foundList')

//     callback(null, message)
//   } catch (e) {
//     logger.error(e.message)
//     logger.debug(e.stack)
//     callback(e, null)
//   }
// }
export async function destroyAuthorizationCode(
  call: grpc.ServerUnaryCall<messages.AuthorizationCode>,
  callback: grpc.sendUnaryData<messages.AuthorizationCode>
) {
  try {
    const code = call.request.getCode()

    logger.info(
      `Fetching authorization code with code ${code} from the database`
    )

    const found = await AuthorizationCode.findOne({ where: { code } })

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

    const clone = JSON.parse(JSON.stringify(found)) as AuthorizationCode

    logger.info(
      `Deleting authorization code with code ${code} from the database`
    )

    await found.destroy()

    logger.info(`Deleting authorization code with code ${code} from the cache`)

    cache.del(clone.code!)

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
