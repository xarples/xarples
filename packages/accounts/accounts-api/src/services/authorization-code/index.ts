import services from '../../../generated/authorization_code_grpc_pb'
import messages from '../../../generated/authorization_code_pb'
import * as handlers from './handlers'
import createClient from './client'

export default {
  services,
  createClient,
  messages,
  handlers
}
