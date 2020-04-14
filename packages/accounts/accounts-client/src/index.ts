import grpc from 'grpc'
import config from '@xarples/config'
import { services, messages } from '@xarples/accounts-protos'

export { messages }

export function createClient() {
  const { host, port } = config.accounts.api!

  return new services.AccountClient(
    `${host}:${port}`,
    grpc.credentials.createInsecure()
  )
}

export default {
  createClient,
  messages
}
