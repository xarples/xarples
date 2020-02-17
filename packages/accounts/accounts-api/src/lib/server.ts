import grpc from 'grpc'

import accessToken from '../services/access-token'
import authorizationCode from '../services/authorization-code'
import client from '../services/client'
import refreshToken from '../services/refresh-token'
import user from '../services/user'

const server = new grpc.Server()

server.addService(accessToken.services.AccessTokenService, accessToken.handlers)

server.addService(
  authorizationCode.services.AuthorizationCodeService,
  authorizationCode.handlers
)
server.addService(client.services.ClientService, client.handlers)

server.addService(
  refreshToken.services.RefreshTokenService,
  refreshToken.handlers
)

server.addService(user.services.UserService, user.handlers)

export default server
