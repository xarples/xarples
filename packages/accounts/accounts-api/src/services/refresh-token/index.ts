import services from '../../../generated/refresh_token_grpc_pb'
import messages from '../../../generated/refresh_token_pb'
import * as handlers from './handlers'
import createClient from './client'

export default {
  services,
  createClient,
  messages,
  handlers
}
