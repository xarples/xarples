import http from 'http'
import express from 'express'
import config from '@xarples/config'
// @ts-ignore
import { Nuxt, Builder } from 'nuxt'
import { logger, terminate } from '@xarples/utils'
import nuxtConfig from '../nuxt.config'
import routes from './routes'

const nuxt = new Nuxt(nuxtConfig)
const app = express()
const server = http.createServer(app)
const exitHandler = terminate(server)

app.use('/api', routes.api)
// app.use('/', routes.root)
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
