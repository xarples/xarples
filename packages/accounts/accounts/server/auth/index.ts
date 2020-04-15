import { Strategy as LocalStrategy } from 'passport-local'
import accounts from '@xarples/accounts-client'
import { encrypt, logger, decodeBasic } from '@xarples/utils'

const client = accounts.createClient()

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

function authenticateClient(encoded: string): Promise<boolean> {
  return new Promise(resolve => {
    const credentials = decodeBasic(encoded)

    if (!credentials) {
      return resolve(false)
    }

    const message = new accounts.messages.Client()

    message.setClientId(credentials.username)

    client.findOneClient(message, (err, result) => {
      if (err) {
        return resolve(false)
      }

      if (result.getClientSecret() !== credentials.password) {
        return resolve(false)
      }

      resolve(true)
    })
  })
}

export default {
  localStrategy,
  serializeUser,
  deserializeUser,
  authenticateClient
}
