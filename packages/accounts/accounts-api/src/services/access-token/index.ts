import services from '../../../generated/access_token_grpc_pb'
import messages from '../../../generated/access_token_pb'
import * as handlers from './handlers'
import createClient from './client'

export default {
  services,
  createClient,
  messages,
  handlers
}
