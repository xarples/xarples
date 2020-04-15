import { promisify } from 'util'
import querystring from 'querystring'
import express from 'express'
import accounts from '@xarples/accounts-client'
import {
  Client,
  AuthorizationCode
} from '@xarples/accounts-protos/generated/account_pb'

const client = accounts.createClient()
const router = express.Router()

const findClient = promisify<Client, Client>(client.findOneClient).bind(client)

const createAuthorizationCode = promisify<AuthorizationCode, AuthorizationCode>(
  client.createAuthorizationCode
).bind(client)

router.post('/', async (req, res) => {
  try {
    const {
      consent,
      client_id: clientId,
      response_type: responseType,
      redirect_uri: redirectUri,
      code_challenge: codeChallenge,
      code_challenge_method: codeChallengeMethod = 'plain',
      scope = '',
      state = undefined
    } = req.body

    if (!consent || consent !== 'allow') {
      const queryParams = querystring.stringify({
        error: 'access_denied',
        error_description:
          'The resource owner or authorization server denied the request.'
      })

      return res.redirect(`${redirectUri}?${queryParams}`)
    }

    if (!clientId || !responseType || !redirectUri || !codeChallenge) {
      return res.send({
        error: 'invalid_request',
        error_description:
          'Missing required parameter client_id, response_type, redirect_uri or code_challenge'
      })
    }

    if (!responseType.split(' ').includes('code')) {
      return res.send({
        error: 'unsupported_response_type',
        error_description: 'response_type should be code'
      })
    }

    if (!['S256', 'plain'].includes(codeChallengeMethod)) {
      return res.send({
        error: 'invalid_request',
        error_description: 'Transform algorithm not supported'
      })
    }

    const message = new accounts.messages.Client()

    message.setClientId(clientId)

    const foundClient = await findClient(message)

    if (foundClient.getRedirectUri() !== redirectUri) {
      return res.send({
        error: 'invalid_request',
        error_description: 'Invalid client'
      })
    }

    const createAuthorizationCodeMessage = new accounts.messages.AuthorizationCode()

    // @ts-ignore
    createAuthorizationCodeMessage.setUserId(req.user.id)
    createAuthorizationCodeMessage.setClientId(foundClient.getId())
    createAuthorizationCodeMessage.setScope(scope)
    createAuthorizationCodeMessage.setCodeChallenge(codeChallenge)
    createAuthorizationCodeMessage.setCodeChallengeMethod(codeChallengeMethod)

    const authorizationCode = await createAuthorizationCode(
      createAuthorizationCodeMessage
    )

    const query = {
      code: authorizationCode.getCode(),
      state
    }

    if (!state) {
      delete query.state
    }

    const queryParams = querystring.stringify(query)

    res.redirect(`${redirectUri}?${queryParams}`)
  } catch (error) {
    if (error.message.match(/not found/)) {
      res.status(400).send({
        error: 'invalid_request',
        error_description: 'Invalid client'
      })
    }

    res.status(500).send({
      error: 'server_error',
      error_description: 'Invalid client'
    })
  }
})

export default router
