import { promisify } from 'util'
import express from 'express'
import accounts from '@xarples/accounts-client'
import {
  Client,
  AccessToken
} from '@xarples/accounts-protos/generated/account_pb'
import { decodeBasic } from '@xarples/utils'

import auth from '../../auth'

const client = accounts.createClient()
const router = express.Router()

const findClient = promisify<Client, Client>(client.findOneClient).bind(client)
const createAccessToken = promisify<AccessToken, AccessToken>(
  client.createAccessToken
).bind(client)

router.post('/', async (req, res, next) => {
  try {
    const { grant_type: grantType, scope = '' } = req.body

    if (!grantType) {
      return res.status(400).send({
        error: 'invalid_request',
        error_description: 'Missing required parameter grant_type'
      })
    }

    if (grantType !== 'client_credentials') {
      next()
    }

    if (!req.headers.authorization) {
      res
        .status(401)
        .send({
          error: 'invalid_client',
          error_description: 'Missing required Authorization Header'
        })
        .setHeader('WWW-Authenticate', 'Basic')

      return
    }

    const isAuthenticated = await auth.authenticateClient(
      req.headers.authorization
    )

    if (!isAuthenticated) {
      return res
        .status(401)
        .send({
          error: 'invalid_client',
          error_description: 'Invalid client credentials'
        })
        .setHeader('WWW-Authenticate', 'Basic')
    }

    const credentials = decodeBasic(req.headers.authorization)
    const findClientMessage = new accounts.messages.Client()

    findClientMessage.setClientId(credentials?.username!)

    const foundClient = await findClient(findClientMessage)

    const createAccessTokenMessage = new accounts.messages.AccessToken()

    createAccessTokenMessage.setUserId(foundClient.getUserId())
    createAccessTokenMessage.setClientId(foundClient.getClientId())
    createAccessTokenMessage.setScope(scope)

    const accessToken = await createAccessToken(createAccessTokenMessage)

    res.status(200).send({
      access_token: accessToken.getToken(),
      token_type: 'Bearer',
      expires_in: 3600
    })
  } catch (error) {
    if (error.message.match(/client not found/)) {
      res.status(400).send({
        error: 'invalid_request',
        error_description: 'Invalid client'
      })
    }

    res.status(500).send({
      error: 'server_error',
      error_description: error.message
    })
  }
})

export default router
