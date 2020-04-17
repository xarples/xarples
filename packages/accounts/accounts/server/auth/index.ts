import { promisify } from 'util'
import { Strategy as LocalStrategy } from 'passport-local'
import accounts from '@xarples/accounts-client'
import { Client } from '@xarples/accounts-protos/generated/account_pb'
import { encrypt, logger, decodeBasic } from '@xarples/utils'

const client = accounts.createClient()

const findClient = promisify<Client, Client>(client.findOneClient).bind(client)

const localStrategy = new LocalStrategy((username, password, done) => {
  const message = new accounts.messages.User()

  message.setUsername(username)

  logger.info(`Fetching user with username ${username} from the users service`)
  client.findUserByUsername(message, (err, response) => {
    if (err) {
      logger.error(err.message)
      return done(err, false, { message: 'incorrect username or password' })
    }

    const user = response.toObject()

    if (encrypt(password) !== user.password) {
      logger.error('Password does not match')
      return done(err, false, { message: 'incorrect username or password' })
    }

    logger.info(`Authenticating user with username ${username}`)
    done(null, user)
  })
})

function serializeUser(user: any, done: any) {
  done(null, { username: user.username })
  // done(null, user)
}

function deserializeUser(user: any, done: any) {
  const message = new accounts.messages.User()

  message.setUsername(user.username)

  client.findUserByUsername(message, (err, response) => {
    if (err) {
      logger.error(err.message)
      return done(err)
    }
    done(null, response.toObject())
  })
}

async function authenticateClient(encoded: string): Promise<boolean> {
  try {
    const credentials = decodeBasic(encoded)

    if (!credentials) {
      return Promise.resolve(false)
    }

    const message = new accounts.messages.Client()

    message.setClientId(credentials.username)

    const foundClient = await findClient(message)

    if (foundClient.getClientSecret() !== credentials.password) {
      return Promise.resolve(false)
    }

    return Promise.resolve(true)
  } catch (error) {
    return Promise.resolve(false)
  }
}

export default {
  localStrategy,
  serializeUser,
  deserializeUser,
  authenticateClient
}
