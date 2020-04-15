import { promisify } from 'util'
import querystring from 'query-string'
import express from 'express'
import accounts from '@xarples/accounts-client'
import { Client } from '@xarples/accounts-protos/generated/account_pb'

const client = accounts.createClient()
const router = express.Router()
const findClient = promisify<Client, Client>(client.findOneClient).bind(client)

router.get('/', async (req, res, next) => {
  try {
    const {
      client_id: clientId,
      response_type: responseType,
      redirect_uri: redirectUri,
      code_challenge: codeChallenge,
      code_challenge_method: codeChallengeMethod = 'plain'
    } = req.query

    if (!clientId || !responseType || !redirectUri || !codeChallenge) {
      return res.send(
        'Missing required parameter client_id, response_type, redirect_uri or code_challenge'
      )
    }

    if (!responseType.split(' ').includes('code')) {
      return res.send('response_type should be code')
    }

    if (!['S256', 'plain'].includes(codeChallengeMethod)) {
      return res.send('Transform algorithm not supported')
    }

    const message = new accounts.messages.Client()

    message.setClientId(clientId)

    const foundClient = await findClient(message)

    if (foundClient.getRedirectUri() !== redirectUri) {
      return res.send('Invalid client')
    }

    if (!req.isAuthenticated()) {
      const queryParams = querystring.stringify(req.query)

      return res.redirect(`/signin?redirect=/authorize?${queryParams}`)
    }

    // @ts-ignore
    req.client = foundClient.toObject()

    next()
  } catch (error) {
    if (error.message.match(/not found/)) {
      return res.send('Invalid client')
    }

    res.send(error.message)
  }
})

export default router
