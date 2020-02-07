import { Strategy as LocalStrategy } from 'passport-local'
import users from '@xarples/users-server'
import { encrypt } from '@xarples/utils'

const client = users.createClient()

const localStrategy = new LocalStrategy((username, password, done) => {
  const message = new users.messages.User()

  message.setUsername(username)

  client.getUserByUsername(message, (err, response) => {
    if (err) {
      return done(err, false, { message: 'incorrect username or password' })
    }

    const user = response.toObject()

    if (encrypt(password) !== user.password) {
      return done(err, false, { message: 'incorrect username or password' })
    }

    done(null, user)
  })
})

function serializeUser(user: any, done: any) {
  done(null, { username: user.username })
}

function deserializeUser(username: string, done: any) {
  const message = new users.messages.User()

  message.setUsername(username)

  client.getUserByUsername(message, (err, response) => {
    if (err) {
      return done(err)
    }

    done(null, response.toObject())
  })
}

export default {
  localStrategy,
  serializeUser,
  deserializeUser
}
