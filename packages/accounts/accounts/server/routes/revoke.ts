import { promisify } from 'util'
import express from 'express'
import accounts from '@xarples/accounts-client'
import { decodeBasic } from '@xarples/utils'
import {
  AccessToken,
  RefreshToken,
  Client
} from '@xarples/accounts-protos/generated/account_pb'

import auth from '../auth'

const client = accounts.createClient()
const router = express.Router()

const findAccessToken = promisify<AccessToken, AccessToken>(
  client.findOneAccessToken
).bind(client)

const destroyAccessToken = promisify<AccessToken, AccessToken>(
  client.destroyAccessToken
).bind(client)

const findRefreshToken = promisify<RefreshToken, RefreshToken>(
  client.findOneRefreshToken
).bind(client)

const destroyRefreshToken = promisify<RefreshToken, RefreshToken>(
  client.destroyRefreshToken
).bind(client)

const findClient = promisify<Client, Client>(client.findOneClient).bind(client)

router.post('/', async (req, res) => {
  try {
    const { token = '', token_type_hint: tokenTypeHint } = req.body
    let _tokenTypeHint = tokenTypeHint

    if (!token) {
      return res.status(400).send({
        error: 'invalid_request',
        error_description: 'Missing required token parameter'
      })
    }

    if (!req.headers.authorization) {
      return res
        .status(401)
        .set('WWW-Authenticate', 'Basic')
        .send({
          error: 'invalid_client',
          error_description: 'Missing required Authorization Header'
        })
    }

    const isAuthenticated = await auth.authenticateClient(
      req.headers.authorization
    )

    if (!isAuthenticated) {
      return res
        .status(401)
        .set('WWW-Authenticate', 'Basic')
        .send({
          error: 'invalid_client',
          error_description: 'Invalid client credentials'
        })
    }

    const accessTokenMessage = new accounts.messages.AccessToken()
    const refreshTokenMessage = new accounts.messages.RefreshToken()

    accessTokenMessage.setToken(token)
    refreshTokenMessage.setToken(token)

    let accessOrRefreshToken: AccessToken | RefreshToken | undefined

    if (tokenTypeHint) {
      if (tokenTypeHint === 'access_token') {
        try {
          _tokenTypeHint = 'access_token'
          accessOrRefreshToken = await findAccessToken(accessTokenMessage)
        } catch (error) {
          accessOrRefreshToken = undefined
          _tokenTypeHint = undefined
        }
      } else {
        try {
          _tokenTypeHint = 'refresh_token'
          accessOrRefreshToken = await findRefreshToken(refreshTokenMessage)
        } catch (error) {
          accessOrRefreshToken = undefined
          _tokenTypeHint = undefined
        }
      }
    }

    if (!accessOrRefreshToken) {
      try {
        _tokenTypeHint = 'access_token'
        accessOrRefreshToken = await findAccessToken(accessTokenMessage)
      } catch (error) {
        accessOrRefreshToken = undefined
        _tokenTypeHint = undefined
      }
    }

    if (!accessOrRefreshToken) {
      try {
        _tokenTypeHint = 'refresh_token'
        accessOrRefreshToken = await findRefreshToken(refreshTokenMessage)
      } catch (error) {
        accessOrRefreshToken = undefined
        _tokenTypeHint = undefined
      }
    }

    if (!accessOrRefreshToken) {
      return res.status(200).send()
    }

    const credentials = decodeBasic(req.headers.authorization)

    const findClientMessage = new accounts.messages.Client()

    findClientMessage.setClientId(credentials!.username)

    try {
      const foundClient = await findClient(findClientMessage)

      if (foundClient.getId() !== accessOrRefreshToken.getClientId()) {
        return res.status(401).send({
          error: 'invalid_client',
          error_description: 'Invalid client'
        })
      }
    } catch (error) {
      return res.status(401).send({
        error: 'invalid_client',
        error_description: 'Invalid client'
      })
    }

    if (_tokenTypeHint === 'access_token') {
      await destroyAccessToken(accessTokenMessage)
    } else {
      await destroyRefreshToken(refreshTokenMessage)
    }

    res.status(200).send()
  } catch (error) {
    res.status(500).send({
      error: 'server_error',
      error_description: error.message
    })
  }
})

export default router
