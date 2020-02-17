import server from './server'
import * as services from '../services'

export function createServer() {
  return server
}

export { services }

export default {
  createServer,
  services
}
