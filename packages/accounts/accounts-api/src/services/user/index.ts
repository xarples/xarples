import services from '../../../generated/user_grpc_pb'
import messages from '../../../generated/user_pb'
import * as handlers from './handlers'
import createClient from './client'

export default {
  services,
  createClient,
  messages,
  handlers
}
