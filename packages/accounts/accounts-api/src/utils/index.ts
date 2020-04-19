import {
  Client,
  AccessToken,
  AuthorizationCode,
  RefreshToken,
  User
} from '@xarples/accounts-db'
import { messages } from '@xarples/accounts-protos'

export function getAccessTokenMessage(payload: AccessToken) {
  const message = new messages.AccessToken()
  const client = getClientMessage(payload.Client)
  const user = getUserMessage(payload.User)

  message.setId(payload.id)
  message.setClientId(payload.clientId)
  message.setUserId(payload.userId)
  message.setToken(payload.token!)
  message.setScope(payload.scope!)
  message.setUser(user)
  message.setClient(client)
  message.setCreatedAt(payload.createdAt.toString())
  message.setUpdatedAt(payload.updatedAt.toString())

  return message
}

export function getAccessTokenListMessage(payload: AccessToken[]) {
  const message = new messages.AccessTokenList()
  const messageList = payload.map(getAccessTokenMessage)

  message.setAccessTokensList(messageList)

  return message
}

export function getAuthorizationCodeMessage(payload: AuthorizationCode) {
  const message = new messages.AuthorizationCode()

  message.setId(payload.id)
  message.setUserId(payload.userId)
  message.setClientId(payload.clientId)
  message.setCode(payload.code!)
  message.setScope(payload.scope!)
  message.setCodeChallenge(payload.codeChallenge)
  message.setCodeChallengeMethod(payload.codeChallengeMethod!)
  message.setCreatedAt(payload.createdAt.toString())
  message.setUpdatedAt(payload.updatedAt.toString())

  return message
}

export function getAuthorizationCodeListMessage(payload: AuthorizationCode[]) {
  const message = new messages.AuthorizationCodeList()
  const messageList = payload.map(getAuthorizationCodeMessage)

  message.setAuthorizationCodesList(messageList)

  return message
}

export function getClientMessage(payload: Client) {
  const message = new messages.Client()

  message.setId(payload.id)
  message.setUserId(payload.userId)
  message.setClientId(payload.clientId)
  message.setClientSecret(payload.clientSecret)
  message.setRedirectUri(payload.redirectUri)
  message.setType(payload.type)
  message.setName(payload.name)
  message.setDescription(payload.description)
  message.setHomepageUrl(payload.homepageUrl!)
  message.setCreatedAt(payload.createdAt.toString())
  message.setUpdatedAt(payload.updatedAt.toString())

  return message
}

export function getClientListMessage(payload: Client[]) {
  const message = new messages.ClientList()
  const messageList = payload.map(getClientMessage)

  message.setClientsList(messageList)

  return message
}

export function getRefreshTokenMessage(payload: RefreshToken) {
  const message = new messages.RefreshToken()
  const client = getClientMessage(payload.Client)
  const user = getUserMessage(payload.User)

  message.setId(payload.id)
  message.setUserId(payload.userId)
  message.setClientId(payload.clientId)
  message.setToken(payload.token!)
  message.setScope(payload.scope!)
  message.setClient(client)
  message.setUser(user)
  message.setCreatedAt(payload.createdAt.toString())
  message.setUpdatedAt(payload.updatedAt.toString())

  return message
}

export function getRefreshTokenListMessage(payload: RefreshToken[]) {
  const message = new messages.RefreshTokenList()
  const messageList = payload.map(getRefreshTokenMessage)

  message.setRefreshTokensList(messageList)

  return message
}

export function getUserMessage(payload: User) {
  const message = new messages.User()

  message.setId(payload.id)
  message.setUsername(payload.username)
  message.setPassword(payload.password)
  message.setEmail(payload.email)
  message.setFirstName(payload.firstName)
  message.setLastName(payload.lastName)
  message.setCreatedAt(payload.createdAt.toString())
  message.setUpdatedAt(payload.updatedAt.toString())

  return message
}

export function getUserListMessage(payload: User[]) {
  const message = new messages.UserList()
  const messageList = payload.map(getUserMessage)

  message.setUsersList(messageList)

  return message
}
