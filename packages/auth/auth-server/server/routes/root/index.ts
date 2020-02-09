import querystring from 'querystring'
import { Router } from 'express'
import { Client, AuthorizationCode } from '@xarples/auth-db'

import { defaultHandler, authorizationCode } from '../../middlewares'

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

router.post('/token', authorizationCode, defaultHandler)

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
