import grpc from 'grpc'
import config from '@xarples/config'
import services from '../../../generated/authorization_code_grpc_pb'

export default function createClient() {
  const { host, port } = config.accounts.api!

  return new services.AuthorizationCodeClient(
    `${host}:${port}`,
    grpc.credentials.createInsecure()
  )
}
