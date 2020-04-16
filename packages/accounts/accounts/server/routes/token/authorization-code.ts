import { promisify } from 'util'
import express from 'express'
import accounts from '@xarples/accounts-client'
import {
  Client,
  AuthorizationCode,
  AccessToken,
  RefreshToken
} from '@xarples/accounts-protos/generated/account_pb'
import { isExpired, generateCodeChallenge } from '@xarples/utils'

import auth from '../../auth'

const client = accounts.createClient()
const router = express.Router()

const findClient = promisify<Client, Client>(client.findOneClient).bind(client)

const createAccessToken = promisify<AccessToken, AccessToken>(
  client.createAccessToken
).bind(client)

const createRefreshToken = promisify<RefreshToken, RefreshToken>(
  client.createRefreshToken
).bind(client)

const destroyAuthorizationCode = promisify<
  AuthorizationCode,
  AuthorizationCode
>(client.destroyAuthorizationCode).bind(client)

router.post('/', async (req, res, next) => {
  try {
    const {
      grant_type: grantType,
      code,
      redirect_uri: redirectUri,
      client_id: clientId,
      code_verifier: codeVerifier
    } = req.body

    if (grantType !== 'authorization_code') {
      return next()
    }

    if (!grantType || !code || !redirectUri || !clientId || !codeVerifier) {
      return res.status(400).send({
        error: 'invalid_request',
        error_description:
          'Missing required parameter client_id, grant_type, redirect_uri or code_verifier'
      })
    }

    const findClientMessage = new accounts.messages.Client()

    findClientMessage.setClientId(clientId)

    const foundClient = await findClient(findClientMessage)

    if (foundClient.getType() === 'confidential') {
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

      let isAuthenticated = false

      try {
        isAuthenticated = await auth.authenticateClient(
          req.headers.authorization
        )
      } catch (error) {
        isAuthenticated = false
      }

      if (!isAuthenticated) {
        res
          .status(401)
          .send({
            error: 'invalid_client',
            error_description: 'Invalid client credentials'
          })
          .setHeader('WWW-Authenticate', 'Basic')

        return
      }
    }

    const destroyMessage = new accounts.messages.AuthorizationCode()

    destroyMessage.setCode(code)

    const authorizationCode = await destroyAuthorizationCode(destroyMessage)

    const isAuthorizationCodeExpired = isExpired({
      expiresIn: 60, // seconds
      entityCreatedAt: authorizationCode.getCreatedAt()
    })

    if (
      authorizationCode.getClientId() !== foundClient.getId() ||
      isAuthorizationCodeExpired
    ) {
      return res.status(400).send({
        error: 'invalid_grant',
        error_description: 'Invalid authorization code'
      })
    }

    const codeChallengeMethod = authorizationCode.getCodeChallengeMethod()
    const codeChallenge = generateCodeChallenge(
      codeVerifier,
      // @ts-ignore
      codeChallengeMethod
    )

    if (authorizationCode.getCodeChallenge() !== codeChallenge) {
      return res.status(400).send({
        error: 'invalid_grant',
        error_description: 'Invalid code_verifier'
      })
    }

    if (foundClient.getRedirectUri() !== redirectUri) {
      return res.status(400).send({
        error: 'invalid_grant',
        error_description: 'Invalid redirect_uri'
      })
    }

    const createAccessTokenMessage = new accounts.messages.AccessToken()
    const createRefreshTokenMessage = new accounts.messages.RefreshToken()

    createAccessTokenMessage.setUserId(authorizationCode.getUserId())
    createAccessTokenMessage.setClientId(authorizationCode.getClientId())
    createAccessTokenMessage.setScope(authorizationCode.getScope())

    createRefreshTokenMessage.setUserId(authorizationCode.getUserId())
    createRefreshTokenMessage.setClientId(authorizationCode.getClientId())
    createRefreshTokenMessage.setScope(authorizationCode.getScope())

    const accessToken = await createAccessToken(createAccessTokenMessage)
    const refreshToken = await createRefreshToken(createRefreshTokenMessage)

    res.send({
      access_token: accessToken.getToken(),
      token_type: 'Bearer',
      expires_in: 3600,
      refresh_token: refreshToken.getToken()
    })
  } catch (error) {
    if (error.message.match(/client not found/)) {
      res.status(400).send({
        error: 'invalid_request',
        error_description: 'Invalid client'
      })
    }

    if (error.message.match(/authorization code not found/)) {
      res.status(400).send({
        error: 'invalid_request',
        error_description: 'Invalid authorization code'
      })
    }

    res.status(500).send({
      error: 'server_error',
      error_description: error.message
    })
  }
})

export default router
