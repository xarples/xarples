import { Strategy as LocalStrategy } from 'passport-local'
import accounts from '@xarples/accounts-api'
import { encrypt, logger } from '@xarples/utils'

const userClient = accounts.services.user.createClient()

const localStrategy = new LocalStrategy((username, password, done) => {
  const message = new accounts.services.user.messages.UserRequest()

  message.setUsername(username)

  logger.info(`Fetching user with username ${username} from the users service`)
  userClient.findByUsername(message, (err, response) => {
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
  // done(null, { username: user.username })
  done(null, user)
}

function deserializeUser(user: any, done: any) {
  done(null, user)
  // const message = new accounts.services.user.messages.UserRequest()
  // message.setUsername(user.username)
  // userClient.findByUsername(message, (err, response) => {
  //   if (err) {
  //     logger.error(err.message)
  //     return done(err)
  //   }
  //   done(null, response.toObject())
  // })
}

export default {
  localStrategy,
  serializeUser,
  deserializeUser
}
