import grpc from 'grpc'
import config from '@xarples/config'
import services from '../../../generated/user_grpc_pb'

export default function createClient() {
  const { host, port } = config.accounts.api!

  return new services.UserClient(
    `${host}:${port}`,
    grpc.credentials.createInsecure()
  )
}
