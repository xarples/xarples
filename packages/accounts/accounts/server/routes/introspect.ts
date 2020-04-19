import { promisify } from 'util'
import express from 'express'
import accounts from '@xarples/accounts-client'
import { AccessToken } from '@xarples/accounts-protos/generated/account_pb'
import { isExpired } from '@xarples/utils'

import auth from '../auth'

const client = accounts.createClient()
const router = express.Router()

const findAccessToken = promisify<AccessToken, AccessToken>(
  client.findOneAccessToken
).bind(client)

const destroyAccessToken = promisify<AccessToken, AccessToken>(
  client.destroyAccessToken
).bind(client)

router.post('/introspect', async (req, res) => {
  try {
    if (!req.body.token) {
      return res.status(400).send({
        error: 'invalid_request',
        error_description: 'Missing required parameter'
      })
    }

    const authorizationHeader = req.headers.authorization

    if (!authorizationHeader || !authorizationHeader.includes('Basic')) {
      return res.status(401).send({
        error: 'invalid_request',
        error_description: 'Missing required Authorization Header'
      })
    }

    const isAuthenticated = await auth.authenticateClient(authorizationHeader)

    if (!isAuthenticated) {
      return res
        .status(401)
        .set('WWW-Authenticate', 'Basic')
        .send({
          error: 'invalid_client',
          error_description: 'Invalid client credentials'
        })
    }

    const token = req.body.token

    const message = new accounts.messages.AccessToken()

    message.setToken(token)

    let accessToken: AccessToken | undefined

    try {
      accessToken = await findAccessToken(message)
    } catch (error) {
      return res.status(200).send({
        active: false
      })
    }

    const isAccessTokenExpired = isExpired({
      entityCreatedAt: accessToken.getCreatedAt(),
      expiresIn: 3600
    })

    if (isAccessTokenExpired) {
      const destroyMessage = new accounts.messages.AccessToken()

      destroyMessage.setId(accessToken.getId())

      await destroyAccessToken(message)

      return res.status(200).send({
        active: false
      })
    }

    res.status(200).send({
      active: true,
      scope: accessToken.getScope(),
      client_id: accessToken.getClientId(),
      // @ts-ignore
      username: accessToken.getUser()!.getUsername(),
      token_type: 'Bearer',
      // exp: getUnixTime(add(accessToken.createdAt, { seconds: 3600 })),
      // iat: getUnixTime(accessToken.createdAt),
      // nbf: getUnixTime(accessToken.createdAt),
      // @ts-ignore
      sub: req.user.id
      // aud: client.homepageUrl
      // iss: `http://${config.auth.service.host}${config.auth.service.port}`
      // jti: accessToken.id
    })
  } catch (error) {
    return res.status(200).send({
      active: false
    })
  }
})

export default router
