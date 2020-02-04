import http from 'http'
// import express from 'express'

// const app = express()
const server = http.createServer()

// app.get('/authorize', ensureAuth, (req, res, next) => {})
// app.post('/clients', (req, res, next) => {})
// app.post('/authorize/:action', ensureAuth, (req, res, next) => {})
// app.post('/token', (req, res, next) => {})
// app.post('/userinfo', (req, res, next) => {})
// app.post('/docs', (req, res, next) => {})
// app.post('/.well-known/oauth-authorization-server', (req, res, next) => {})

async function main() {
  server.listen(8000, () => {})
}

if (!module.parent) {
  main()

  process.on('SIGINT', () => {})
  process.on('SIGTERM', () => {})
  process.on('uncaughtException', () => {})
  process.on('unhandledRejection', () => {})
}
