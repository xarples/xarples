import http from 'http'
import redis from 'redis'
import connectRedis from 'connect-redis'
import express from 'express'
import expressSession from 'express-session'
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'
import passport from 'passport'
import config from '@xarples/config'
import { logger, terminate } from '@xarples/utils'
// @ts-ignore
import { Nuxt, Builder } from 'nuxt'
import nuxtConfig from '../nuxt.config'
import routes from './routes'
import auth from './auth'

const RedisStore = connectRedis(expressSession)
const nuxt = new Nuxt(nuxtConfig)
const app = express()
const server = http.createServer(app)
const exitHandler = terminate(server)
const redisClient = redis.createClient({ host: config.auth.redis!.host })
const session = expressSession({
  store: new RedisStore({ client: redisClient }),
  secret: 'secret',
  saveUninitialized: false,
  resave: false
})

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(session)
app.use(passport.initialize())
app.use(passport.session())

passport.use(auth.localStrategy)
passport.deserializeUser(auth.deserializeUser)
passport.serializeUser(auth.serializeUser)

app.use('/api', routes.api)

app.use(nuxt.render)

// app.get('/authorize', ensureAuth, (req, res, next) => {})
// app.post('/authorize/:action', ensureAuth, (req, res, next) => {})
// app.post('/token', (req, res, next) => {})
// app.post('/userinfo', (req, res, next) => {})
// app.post('/docs', (req, res, next) => {})
// app.post('/.well-known/oauth-authorization-server', (req, res, next) => {})

async function main() {
  const { host, port } = config.auth.service

  if (nuxtConfig.dev) {
    const builder = new Builder(nuxt)
    await builder.build()
  } else {
    await nuxt.ready()
  }

  server.listen(port, () => {
    logger.info(`Server listening on http://${host}:${port}`)
  })

  process.on('SIGINT', exitHandler(0, 'SIGINT'))
  process.on('SIGTERM', exitHandler(0, 'SIGTERM'))
  process.on('uncaughtException', exitHandler(1, 'Unexpected Error'))
  process.on('unhandledRejection', exitHandler(1, 'Unhandled Promise'))
}

main()
