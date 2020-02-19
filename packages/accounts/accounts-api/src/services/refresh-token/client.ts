import grpc from 'grpc'
import config from '@xarples/config'
import services from '../../../generated/refresh_token_grpc_pb'

export default function createClient() {
  const { host, port } = config.accounts.api!

  return new services.RefreshTokenClient(
    `${host}:${port}`,
    grpc.credentials.createInsecure()
  )
}
