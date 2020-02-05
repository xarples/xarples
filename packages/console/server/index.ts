import http from 'http'
import express from 'express'
import xarplesConfig from '@xarples/config'
// @ts-ignore
import { Nuxt, Builder } from 'nuxt'
import { logger, terminate } from '@xarples/utils'
import config from '../nuxt.config'

const nuxt = new Nuxt(config)
const app = express()
const server = http.createServer(app)
const exitHandler = terminate(server)

async function main() {
  const { host, port } = xarplesConfig.console.service

  if (config.dev) {
    const builder = new Builder(nuxt)
    await builder.build()
  } else {
    await nuxt.ready()
  }

  app.use(nuxt.render)

  server.listen(port, () => {
    logger.info(`Server listening on http://${host}:${port}`)
  })

  process.on('uncaughtException', exitHandler(1, 'Unexpected Error'))
  process.on('unhandledRejection', exitHandler(1, 'Unhandled Promise'))
  process.on('SIGTERM', exitHandler(0, 'SIGTERM'))
  process.on('SIGINT', exitHandler(0, 'SIGINT'))
}

main()
