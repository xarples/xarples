// import { Strategy as LocalStrategy } from 'passport-local'
// import users from '@xarples/users-server'
// import { encrypt, logger } from '@xarples/utils'

// const usersServiceClient = users.createClient()

// const localStrategy = new LocalStrategy((username, password, done) => {
//   const message = new users.messages.User()

//   message.setUsername(username)

//   logger.info(`Fetching user with username ${username} from the users service`)
//   usersServiceClient.getUserByUsername(message, (err, response) => {
//     if (err) {
//       logger.error(err.message)
//       return done(err, false, { message: 'incorrect username or password' })
//     }

//     const user = response.toObject()

//     if (encrypt(password) !== user.password) {
//       logger.error('Password does not match')
//       return done(err, false, { message: 'incorrect username or password' })
//     }

//     logger.info(`Authenticating user with username ${username}`)
//     done(null, user)
//   })
// })

// function serializeUser(user: any, done: any) {
//   logger.debug(`Serializing user with username ${user.username}`)
//   done(null, { username: user.username })
// }

// function deserializeUser(user: any, done: any) {
//   const message = new users.messages.User()

//   message.setUsername(user.username)

//   logger.info(
//     `Fetching user with username ${user.username} from the users service`
//   )

//   usersServiceClient.getUserByUsername(message, (err, response) => {
//     if (err) {
//       logger.error(err.message)
//       return done(err)
//     }

//     logger.debug(`Deserializing user with username ${user.username}`)

//     done(null, response.toObject())
//   })
// }

// export default {
//   localStrategy,
//   serializeUser,
//   deserializeUser
// }
