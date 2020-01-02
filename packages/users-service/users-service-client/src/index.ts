'use strict'

import grpc from 'grpc'
import * as config from '@xarples-console/config'
import services from '../generated/users_grpc_pb'
import messages from '../generated/users_pb'

function createClient () {
  const { host, port } = config.userService.service
  const client = new services.UserManagerClient(`${host}:${port}`, grpc.credentials.createInsecure())

  return client
}

const userService = {
  createClient,
  messages
}

export default userService
