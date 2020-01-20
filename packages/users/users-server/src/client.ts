'use strict'

import grpc from 'grpc'
import config from '@xarples/config'
import services from '../generated/users_grpc_pb'

interface IOptions {
  host: string
  port: number
}

function createClient(options?: IOptions) {
  const host = options?.host || config.users.service.host
  const port = options?.port || config.users.service.port
  const client = new services.UserManagerClient(
    `${host}:${port}`,
    grpc.credentials.createInsecure()
  )

  return client
}

export default createClient
