import querystring from 'querystring'
import { Router } from 'express'
import {
  Client,
  AuthorizationCode,
  AccessToken,
  RefreshToken
} from '@xarples/auth-db'
import { getUnixTime, add } from 'date-fns'
import config from '@xarples/config'

import {
  defaultHandler,
  authorizationCode,
  refreshToken,
  clientCredentials
} from '../../middlewares'

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
    query.error_description = 'Invalid client'

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

router.post(
  '/token',
  authorizationCode,
  refreshToken,
  clientCredentials,
  defaultHandler
)

router.post('/introspect', async (req, res) => {
  const errors = validateIntrospectionRequest(req.body)
  const authorizationHeader = req.headers.authorization

  if (errors.length) {
    return res.status(400).send({
      error: '',
      error_description: errors[0]
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

  const accessToken = await AccessToken.findOne({
    where: { token: req.body.token }
  })

  if (!accessToken) {
    return res.status(200).send({
      active: false
    })
  }

  if (accessToken.clientId !== client.id) {
    await accessToken.destroy()

    return res.status(200).send({
      active: false
    })
  }

  const currentTime = getUnixTime(new Date())
  const expirationTime = getUnixTime(add(accessToken.createdAt, { hours: 1 }))

  if (currentTime > expirationTime) {
    await accessToken.destroy()

    return res.status(200).send({
      active: false
    })
  }

  res.status(200).send({
    active: true,
    scope: accessToken.scope,
    client_id: accessToken.clientId,
    // @ts-ignore
    username: req.user.username,
    token_type: 'Bearer',
    exp: getUnixTime(add(accessToken.createdAt, { seconds: 3600 })),
    iat: getUnixTime(accessToken.createdAt),
    nbf: getUnixTime(accessToken.createdAt),
    // @ts-ignore
    sub: req.user.id,
    aud: client.homepageUrl,
    iss: `http://${config.auth.service.host}${config.auth.service.port}`
    // jti: accessToken.id
  })
})

router.post('/revoke', async (req, res) => {
  const errors = validateIntrospectionRequest(req.body)
  const authorizationHeader = req.headers.authorization

  if (errors.length) {
    return res.status(400).send({
      error: '',
      error_description: errors[0]
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

  let refreshOrAccessToken: AccessToken | RefreshToken | null

  const tokenTypes = {
    access_token: AccessToken,
    refresh_token: RefreshToken
  }
  const token: string = req.body.token
  const tokenTypeHint: 'access_token' | 'refresh_token' =
    req.body.token_type_hint

  if (tokenTypeHint && !Object.keys(tokenTypes).includes(tokenTypeHint)) {
    return res.status(400).send({
      error: 'unsupported_token_type',
      error_description:
        'The authorization server does not support the revocation of the presented token type.'
    })
  }

  if (tokenTypeHint) {
    const Model = tokenTypes[tokenTypeHint]

    refreshOrAccessToken = await Model.findOne({ where: { token } })
  } else {
    const accessToken = await AccessToken.findOne({
      where: { token }
    })

    const refreshToken = await RefreshToken.findOne({
      where: { token }
    })

    refreshOrAccessToken = accessToken || refreshToken
  }

  if (refreshOrAccessToken && refreshOrAccessToken.clientId !== client.id) {
    return res.status(400).send({
      error: 'invalid_client',
      error_description: 'Client does not match with the token'
    })
  }

  if (refreshOrAccessToken) {
    await refreshOrAccessToken.destroy()
  }

  res.status(200).end()
})

router.get('/.well-known/oauth-authorization-server', (_, res) => {
  const meta = {
    issuer: 'http://localhost:5000',
    authorization_endpoint: 'http://localhost:5000/authorize',
    token_endpoint: 'http://localhost:5000/token',
    token_endpoint_auth_methods_supported: ['client_secret_basic'],
    userinfo_endpoint: 'http://localhost:5000/userinfo',
    registration_endpoint: 'http://localhost:5000/register',
    scopes_supported: [''],
    response_types_supported: ['code'],
    service_documentation: 'http://localhost:5000/docs',
    ui_locales_supported: ['en-US']
  }

  res.status(200).send(meta)
})

router.get('/userinfo', (_, res) => {
  res.status(200).send('TODO')
})

router.get('/docs', (_, res) => {
  res.status(200).send('TODO')
})

export default router

function validateParams(params: object, requiredParams: string[]) {
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

  return validateParams(params, requiredParams)
}

function validateIntrospectionRequest(params: object) {
  const requiredParams = ['token']

  return validateParams(params, requiredParams)
}
