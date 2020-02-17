import grpc from 'grpc'

import { createServer } from './lib'

function main() {
  const server = createServer()
  server.bind('0.0.0.0:50051', grpc.ServerCredentials.createInsecure())
  server.start()
}

if (!module.parent) {
  main()
}
