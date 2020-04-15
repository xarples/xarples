import express from 'express'

import authorizationCode from './authorization-code'
import clientCredentials from './client-credentials'
import refreshToken from './refresh-token'

const router = express.Router()

router.use(
  '/',
  authorizationCode,
  clientCredentials,
  refreshToken,
  (_, res) => {
    res.status(400).send({
      error: 'unsupported_grant_type',
      error_description:
        'The authorization grant type is not supported by the authorization server.'
    })
  }
)

export default router
