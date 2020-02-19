import services from '../../../generated/client_grpc_pb'
import messages from '../../../generated/client_pb'
import * as handlers from './handlers'
import createClient from './client'

export default {
  services,
  createClient,
  messages,
  handlers
}
