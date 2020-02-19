import grpc from 'grpc'
import config from '@xarples/config'
import { logger } from '@xarples/utils'

import { createServer } from './lib'

function main() {
  const { host, port } = config.accounts.api!

  const server = createServer()
  server.bind(`${host}:${port}`, grpc.ServerCredentials.createInsecure())
  server.start()
  logger.info(`Server listening on http://${host}:${port}`)
}

if (!module.parent) {
  main()
}
