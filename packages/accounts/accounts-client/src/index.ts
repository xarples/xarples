import config from '@xarples/config'
import { services, messages, clientCredentials } from '@xarples/accounts-protos'

export { messages }

export function createClient() {
  const { host, port } = config.accounts.api!

  return new services.AccountClient(`${host}:${port}`, clientCredentials)
}

export default {
  createClient,
  messages
}
