import grpc from 'grpc'
import * as services from '../generated/account_grpc_pb'
import * as messages from '../generated/account_pb'

const clientCredentials = grpc.credentials.createInsecure()
const serverCredentials = grpc.ServerCredentials.createInsecure()

export { services, messages, clientCredentials, serverCredentials }
