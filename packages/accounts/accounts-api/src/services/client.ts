import grpc from 'grpc'
import { Client } from '@xarples/accounts-db'
import { messages } from '@xarples/accounts-protos'
import { logger, cache as getCache } from '@xarples/utils'

const cache = getCache<string, Client | Client[]>({
  maxAge: 1000 * 60 * 60 // 1 hour
})

export async function createClient(
  call: grpc.ServerUnaryCall<messages.Client>,
  callback: grpc.sendUnaryData<messages.Client>
) {
  try {
    const data = call.request.toObject()

    delete data.id

    logger.info(`Creating client in the database`)
    logger.debug('data', data)

    const created = await Client.create(data)
    const message = getMessage(created)

    logger.info(`Creating client with id ${created.id} in the cache`)

    cache.set(created.id, created)

    callback(null, message)
  } catch (e) {
    logger.error(e.message)
    logger.debug(e.stack)
    callback(e, null)
  }
}

export async function findOneClient(
  call: grpc.ServerUnaryCall<messages.Client>,
  callback: grpc.sendUnaryData<messages.Client>
) {
  try {
    const clientId = call.request.getClientId()

    if (!cache.has(clientId)) {
      const found = await Client.findOne({ where: { clientId } })

      logger.info(`Fetching client with clientId ${clientId} from database`)

      if (!found) {
        const error: grpc.ServiceError = {
          name: '',
          message: `client not found`,
          code: grpc.status.NOT_FOUND
        }

        logger.error(
          `Can't find client with clientId ${clientId} from the database`
        )

        callback(error, null)

        return
      }

      logger.info(`Creating client with clientId ${clientId} in the cache`)

      cache.set(found.clientId, found)
    }

    logger.info(`Fetching client with clientId ${clientId} from the cache`)

    const found = cache.get(clientId) as Client
    const message = getMessage(found)

    callback(null, message)
  } catch (e) {
    logger.error(e.message)
    logger.debug(e.stack)
    callback(e, null)
  }
}

export async function findAllClient(
  call: grpc.ServerUnaryCall<messages.ClientList>,
  callback: grpc.sendUnaryData<messages.ClientList>
) {
  try {
    call.request.toObject()

    if (!cache.has('foundList')) {
      logger.info(`Fetching client list from the database`)

      const foundList = await Client.findAll({ raw: true })

      logger.info(`Creating client in the cache`)

      cache.set('foundList', foundList)
    }

    logger.info(`Fetching client list from the cache`)

    const foundList = cache.get('foundList') as Client[]
    const message = getMessageList(foundList)

    callback(null, message)
  } catch (e) {
    logger.error(e.message)
    logger.debug(e.stack)
    callback(e, null)
  }
}
export async function updateClient(
  call: grpc.ServerUnaryCall<messages.Client>,
  callback: grpc.sendUnaryData<messages.Client>
) {
  try {
    const id = call.request.getId()

    logger.info(`Fetching client with id ${id} from the database`)

    const data = call.request.toObject()
    const found = await Client.findByPk(id)

    delete data.id

    if (!found) {
      const error: grpc.ServiceError = {
        name: '',
        message: `client not found`,
        code: grpc.status.NOT_FOUND
      }

      logger.error(`Can't find client with id ${id} from the database`)

      callback(error, null)

      return
    }

    logger.info(`Updating client with id ${id} from the database`)
    logger.debug('data', data)

    const updated = await found.update(data)
    const message = getMessage(updated)

    logger.info(`Updating client with id ${id} from the cache`)

    cache.set(updated.id, updated)

    logger.info(`Invalidating the client list of the cache`)

    cache.del('foundList')

    callback(null, message)
  } catch (e) {
    logger.error(e.message)
    logger.debug(e.stack)
    callback(e, null)
  }
}
export async function destroyClient(
  call: grpc.ServerUnaryCall<messages.Client>,
  callback: grpc.sendUnaryData<messages.Client>
) {
  try {
    const id = call.request.getId()

    logger.info(`Fetching client with id ${id} from the database`)

    const found = await Client.findByPk(id)

    if (!found) {
      const error: grpc.ServiceError = {
        name: '',
        message: `client not found`,
        code: grpc.status.NOT_FOUND
      }

      logger.error(`Can't find client with id ${id} from the database`)

      callback(error, null)

      return
    }

    const clone = JSON.parse(JSON.stringify(found)) as Client

    logger.info(`Deleting client with id ${id} from the database`)

    await found.destroy()

    logger.info(`Deleting client with id ${id} from the cache`)

    cache.del(clone.id)

    logger.info(`Invalidating the Client list of the cache`)

    cache.del('foundList')

    const message = getMessage(clone)

    callback(null, message)
  } catch (e) {
    logger.error(e.message)
    logger.debug(e.stack)
    callback(e, null)
  }
}

export function getMessage(payload: Client) {
  const message = new messages.Client()

  message.setId(payload.id)
  message.setClientId(payload.clientId)
  message.setClientSecret(payload.clientSecret)
  message.setRedirectUri(payload.redirectUri)
  message.setType(payload.type)
  message.setName(payload.name)
  message.setDescription(payload.description)
  message.setHomepageUrl(payload.homepageUrl!)
  message.setCreatedAt(payload.createdAt.toString())
  message.setUpdatedAt(payload.updatedAt.toString())

  return message
}

function getMessageList(payload: Client[]) {
  const message = new messages.ClientList()
  const messageList = payload.map(getMessage)

  message.setClientsList(messageList)

  return message
}
