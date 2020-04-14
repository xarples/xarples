import grpc from 'grpc'
import { services } from '@xarples/accounts-protos'

import {
  accessToken,
  authorizationCode,
  client,
  refreshToken,
  user
} from '../services'

const server = new grpc.Server()

server.addService(services.AccountService, {
  ...accessToken,
  ...authorizationCode,
  ...client,
  ...refreshToken,
  ...user
})

export default server
