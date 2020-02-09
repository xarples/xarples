import querystring from 'querystring'
import { Router } from 'express'
import {
  Client,
  AuthorizationCode,
  AccessToken,
  RefreshToken
} from '@xarples/auth-db'

const router = Router()

router.get('/authorize', async (req, res, next) => {
  try {
    const responseTypes = ['code']
    const errors = validateAuthorizationRequest(req.query)

    if (errors.length) {
      return res.send(errors[0])
    }

    if (!responseTypes.includes(req.query.response_type)) {
      return res.send(`response_type must be ${responseTypes.join(' or ')}`)
    }

    const client = await Client.findOne({
      where: { clientId: req.query.client_id }
    })

    if (!client) {
      return res.send('Invalid client')
    }

    if (client.redirectUri !== req.query.redirect_uri) {
      return res.send('Invalid redirect_uri')
    }

    // @ts-ignore
    req.client = client

    next()
  } catch (error) {
    res.send(error.message)
  }
})

router.post('/authorize', async (req, res) => {
  const {
    redirect_uri: redirectUri,
    client_id: clientId,
    state,
    consent,
    scope
  } = req.body
  const query: any = {}

  if (state) {
    query.state = state
  }

  if (!consent || consent !== 'allow') {
    query.error = 'access_denied'
    query.error_description =
      'The resource owner or authorization server denied the request.'

    const queryParams = querystring.stringify(query)

    return res.redirect(`${redirectUri}?${queryParams}`)
  }

  const client = await Client.findOne({
    where: { clientId }
  })

  if (!client) {
    query.error = 'invalid_request'
    query.error_description = `The request is missing a required parameter, includes an
      invalid parameter value, includes a parameter more than
      once, or is otherwise malformed.`

    const queryParams = querystring.stringify(query)

    return res.redirect(`${redirectUri}?${queryParams}`)
  }

  const authorizationCode = await AuthorizationCode.create({
    clientId: client.id,
    // @ts-ignore
    userId: req.user!.id,
    scope: scope || ''
  })

  query.code = authorizationCode.code

  const queryParams = querystring.stringify(query)

  res.redirect(`${redirectUri}?${queryParams}`)
})

router.post('/token', async (req, res) => {
  const authorizationHeader = req.headers.authorization
  const errors = validateTokenRequest(req.body)
  const grantTypes = [
    'authorization_code',
    'client_credentials',
    'refresh_token'
  ]
  const { grant_type: grantType, redirect_uri: redirectUri, code } = req.body

  if (errors.length) {
    return res.status(400).send({
      error: 'invalid_request',
      error_description: errors[0]
    })
  }

  if (!grantTypes.includes(grantType)) {
    return res.status(400).send({
      error: 'invalid_request',
      error_description: `grant_type must be ${grantTypes
        .slice(0, grantTypes.length - 1)
        .join(', ')} or ${grantTypes[grantTypes.length - 1]}`
    })
  }

  if (!authorizationHeader || !authorizationHeader.includes('Basic')) {
    return res
      .status(401)
      .send({
        error: 'invalid_request',
        error_description: 'Missing required Authorization Header'
      })
      .setHeader('WWW-Authenticate', 'Basic')
  }

  const base64Credentials = authorizationHeader.split(' ')[1]
  const credentials = Buffer.from(base64Credentials, 'base64').toString('ascii')
  const [clientId, clientSecret] = credentials.split(':')

  const client = await Client.findOne({
    where: { clientId }
  })

  if (!client) {
    return res
      .status(401)
      .send({
        error: 'invalid_client',
        error_description: 'Invalid client credentials'
      })
      .setHeader('WWW-Authenticate', 'Basic')
  }

  if (client.clientSecret !== clientSecret) {
    return res.status(401).send({
      error: 'invalid_client',
      error_description: 'Invalid client credentials'
    })
  }

  const authorizationCode = await AuthorizationCode.findOne({
    where: { code, clientId: client.id }
  })

  if (!authorizationCode || authorizationCode.code !== code) {
    return res.status(400).send({
      error: 'invalid_grant',
      error_description: 'invalid authorization code'
    })
  }

  if (client.redirectUri !== redirectUri) {
    return res.status(400).send({
      error: 'invalid_grant',
      error_description: 'redirection_uri does not match'
    })
  }

  const accessToken = await AccessToken.create({
    // @ts-ignore
    userId: req.user.id,
    clientId: client.id,
    scope: authorizationCode.scope
  })

  const refreshToken = await RefreshToken.create({
    // @ts-ignore
    userId: req.user.id,
    clientId: client.id,
    scope: authorizationCode.scope
  })

  await authorizationCode.destroy()

  res.status(200).send({
    access_token: accessToken.token,
    token_type: 'bearer',
    expires_in: 3600,
    refresh_token: refreshToken.token
  })
})

export default router

function validateRequest(params: object, requiredParams: string[]) {
  const _params = Object.keys(params)
  const errors: string[] = []

  requiredParams.forEach(requiredParam => {
    if (!_params.includes(requiredParam)) {
      errors.push(`Missing required parameter ${requiredParam}`)
    }
  })

  return errors
}

function validateAuthorizationRequest(params: object) {
  const requiredParams = ['redirect_uri', 'response_type', 'client_id']

  return validateRequest(params, requiredParams)
}

function validateTokenRequest(params: object) {
  const requiredParams = ['grant_type', 'code', 'client_id', 'client_id']

  return validateRequest(params, requiredParams)
}
