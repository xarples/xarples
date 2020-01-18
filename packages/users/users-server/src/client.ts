'use strict'

import grpc from 'grpc'
import * as config from '@xarples/config'
import services from '../generated/users_grpc_pb'

interface IOptions {
  host: string,
  port: number
}

function createClient (options: IOptions) {
  const { host: _host, port: _port } = config.userService.service
  const host = options.host || _host
  const port = options.port || _port
  const client = new services.UserManagerClient(`${host}:${port}`, grpc.credentials.createInsecure())

  return client
}

export default createClient
