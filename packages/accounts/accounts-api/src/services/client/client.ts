import grpc from 'grpc'
import config from '@xarples/config'
import services from '../../../generated/client_grpc_pb'

export default function createClient() {
  const { host, port } = config.accounts.api!

  return new services.ClientClient(
    `${host}:${port}`,
    grpc.credentials.createInsecure()
  )
}
