import http from 'http'
import express from 'express'
import redis from 'redis'
import connectRedis from 'connect-redis'
import expressSession from 'express-session'
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'
import config from '@xarples/config'
import { logger, terminate } from '@xarples/utils'
// @ts-ignore
import { Nuxt, Builder } from 'nuxt'
import nuxtConfig from '../nuxt.config'

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

app.get('/api/auth/tokeninfo', (req, res) => {
  res.send(req.session)
})

app.get('/api/auth/logout', (_, res) => {
  const url = `${config.accounts.frontend!.host}:${
    config.accounts.frontend!.port
  }`

  console.log(url)

  res.redirect(`http://${url}`)
})

app.get('/login', (_, res) => {
  const { host, port } = config.auth.service
  res.redirect(`http://${host}:${port}/login`)
})

app.use(nuxt.render)

async function main() {
  const { host, port } = config.console.service

  if (nuxtConfig.dev) {
    const builder = new Builder(nuxt)
    await builder.build()
  } else {
    await nuxt.ready()
  }

  server.listen(port, () => {
    logger.info(`Server listening on http://${host}:${port}`)
  })

  process.on('uncaughtException', exitHandler(1, 'Unexpected Error'))
  process.on('unhandledRejection', exitHandler(1, 'Unhandled Promise'))
  process.on('SIGTERM', exitHandler(0, 'SIGTERM'))
  process.on('SIGINT', exitHandler(0, 'SIGINT'))
}

main()
