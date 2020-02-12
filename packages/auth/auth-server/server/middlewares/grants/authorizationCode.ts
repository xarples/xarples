import { Request, Response, NextFunction } from 'express'
import {
  Client,
  AuthorizationCode,
  AccessToken,
  RefreshToken
} from '@xarples/auth-db'
import { getUnixTime, add } from 'date-fns'

export default async function authorizationCode(
  req: Request,
  res: Response,
  next: NextFunction
) {
  if (req.body.grant_type !== 'authorization_code') {
    return next()
  }

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
    where: { code }
  })

  if (!authorizationCode) {
    return res.status(400).send({
      error: 'invalid_grant',
      error_description: 'invalid authorization code'
    })
  }

  if (authorizationCode.clientId !== client.id) {
    await authorizationCode.destroy()

    return res.status(400).send({
      error: 'invalid_grant',
      error_description: 'invalid authorization code'
    })
  }

  const currentTime = getUnixTime(new Date())
  const expirationTime = getUnixTime(
    add(authorizationCode.createdAt, { minutes: 1 })
  )

  if (currentTime > expirationTime) {
    await authorizationCode.destroy()

    return res.status(400).send({
      error: 'invalid_grant',
      error_description: 'Authorization code expired'
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
    token_type: 'Bearer',
    expires_in: 3600,
    refresh_token: refreshToken.token
  })
}

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

function validateTokenRequest(params: object) {
  const requiredParams = ['grant_type', 'code', 'client_id', 'client_id']

  return validateRequest(params, requiredParams)
}
