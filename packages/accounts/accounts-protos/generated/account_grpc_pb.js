// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var account_pb = require('./account_pb.js');

function serialize_account_AccessToken(arg) {
  if (!(arg instanceof account_pb.AccessToken)) {
    throw new Error('Expected argument of type account.AccessToken');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_account_AccessToken(buffer_arg) {
  return account_pb.AccessToken.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_account_AccessTokenList(arg) {
  if (!(arg instanceof account_pb.AccessTokenList)) {
    throw new Error('Expected argument of type account.AccessTokenList');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_account_AccessTokenList(buffer_arg) {
  return account_pb.AccessTokenList.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_account_AuthorizationCode(arg) {
  if (!(arg instanceof account_pb.AuthorizationCode)) {
    throw new Error('Expected argument of type account.AuthorizationCode');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_account_AuthorizationCode(buffer_arg) {
  return account_pb.AuthorizationCode.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_account_AuthorizationCodeList(arg) {
  if (!(arg instanceof account_pb.AuthorizationCodeList)) {
    throw new Error('Expected argument of type account.AuthorizationCodeList');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_account_AuthorizationCodeList(buffer_arg) {
  return account_pb.AuthorizationCodeList.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_account_Client(arg) {
  if (!(arg instanceof account_pb.Client)) {
    throw new Error('Expected argument of type account.Client');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_account_Client(buffer_arg) {
  return account_pb.Client.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_account_ClientList(arg) {
  if (!(arg instanceof account_pb.ClientList)) {
    throw new Error('Expected argument of type account.ClientList');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_account_ClientList(buffer_arg) {
  return account_pb.ClientList.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_account_Empty(arg) {
  if (!(arg instanceof account_pb.Empty)) {
    throw new Error('Expected argument of type account.Empty');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_account_Empty(buffer_arg) {
  return account_pb.Empty.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_account_RefreshToken(arg) {
  if (!(arg instanceof account_pb.RefreshToken)) {
    throw new Error('Expected argument of type account.RefreshToken');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_account_RefreshToken(buffer_arg) {
  return account_pb.RefreshToken.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_account_RefreshTokenList(arg) {
  if (!(arg instanceof account_pb.RefreshTokenList)) {
    throw new Error('Expected argument of type account.RefreshTokenList');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_account_RefreshTokenList(buffer_arg) {
  return account_pb.RefreshTokenList.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_account_User(arg) {
  if (!(arg instanceof account_pb.User)) {
    throw new Error('Expected argument of type account.User');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_account_User(buffer_arg) {
  return account_pb.User.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_account_UserList(arg) {
  if (!(arg instanceof account_pb.UserList)) {
    throw new Error('Expected argument of type account.UserList');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_account_UserList(buffer_arg) {
  return account_pb.UserList.deserializeBinary(new Uint8Array(buffer_arg));
}


var AccountService = exports.AccountService = {
  createAccessToken: {
    path: '/account.Account/CreateAccessToken',
    requestStream: false,
    responseStream: false,
    requestType: account_pb.AccessToken,
    responseType: account_pb.AccessToken,
    requestSerialize: serialize_account_AccessToken,
    requestDeserialize: deserialize_account_AccessToken,
    responseSerialize: serialize_account_AccessToken,
    responseDeserialize: deserialize_account_AccessToken,
  },
  findOneAccessToken: {
    path: '/account.Account/FindOneAccessToken',
    requestStream: false,
    responseStream: false,
    requestType: account_pb.AccessToken,
    responseType: account_pb.AccessToken,
    requestSerialize: serialize_account_AccessToken,
    requestDeserialize: deserialize_account_AccessToken,
    responseSerialize: serialize_account_AccessToken,
    responseDeserialize: deserialize_account_AccessToken,
  },
  findAllAccessToken: {
    path: '/account.Account/FindAllAccessToken',
    requestStream: false,
    responseStream: false,
    requestType: account_pb.Empty,
    responseType: account_pb.AccessTokenList,
    requestSerialize: serialize_account_Empty,
    requestDeserialize: deserialize_account_Empty,
    responseSerialize: serialize_account_AccessTokenList,
    responseDeserialize: deserialize_account_AccessTokenList,
  },
  destroyAccessToken: {
    path: '/account.Account/DestroyAccessToken',
    requestStream: false,
    responseStream: false,
    requestType: account_pb.AccessToken,
    responseType: account_pb.AccessToken,
    requestSerialize: serialize_account_AccessToken,
    requestDeserialize: deserialize_account_AccessToken,
    responseSerialize: serialize_account_AccessToken,
    responseDeserialize: deserialize_account_AccessToken,
  },
  createAuthorizationCode: {
    path: '/account.Account/CreateAuthorizationCode',
    requestStream: false,
    responseStream: false,
    requestType: account_pb.AuthorizationCode,
    responseType: account_pb.AuthorizationCode,
    requestSerialize: serialize_account_AuthorizationCode,
    requestDeserialize: deserialize_account_AuthorizationCode,
    responseSerialize: serialize_account_AuthorizationCode,
    responseDeserialize: deserialize_account_AuthorizationCode,
  },
  findOneAuthorizationCode: {
    path: '/account.Account/FindOneAuthorizationCode',
    requestStream: false,
    responseStream: false,
    requestType: account_pb.AuthorizationCode,
    responseType: account_pb.AuthorizationCode,
    requestSerialize: serialize_account_AuthorizationCode,
    requestDeserialize: deserialize_account_AuthorizationCode,
    responseSerialize: serialize_account_AuthorizationCode,
    responseDeserialize: deserialize_account_AuthorizationCode,
  },
  findAllAuthorizationCode: {
    path: '/account.Account/FindAllAuthorizationCode',
    requestStream: false,
    responseStream: false,
    requestType: account_pb.Empty,
    responseType: account_pb.AuthorizationCodeList,
    requestSerialize: serialize_account_Empty,
    requestDeserialize: deserialize_account_Empty,
    responseSerialize: serialize_account_AuthorizationCodeList,
    responseDeserialize: deserialize_account_AuthorizationCodeList,
  },
  destroyAuthorizationCode: {
    path: '/account.Account/DestroyAuthorizationCode',
    requestStream: false,
    responseStream: false,
    requestType: account_pb.AuthorizationCode,
    responseType: account_pb.AuthorizationCode,
    requestSerialize: serialize_account_AuthorizationCode,
    requestDeserialize: deserialize_account_AuthorizationCode,
    responseSerialize: serialize_account_AuthorizationCode,
    responseDeserialize: deserialize_account_AuthorizationCode,
  },
  createClient: {
    path: '/account.Account/CreateClient',
    requestStream: false,
    responseStream: false,
    requestType: account_pb.Client,
    responseType: account_pb.Client,
    requestSerialize: serialize_account_Client,
    requestDeserialize: deserialize_account_Client,
    responseSerialize: serialize_account_Client,
    responseDeserialize: deserialize_account_Client,
  },
  findOneClient: {
    path: '/account.Account/FindOneClient',
    requestStream: false,
    responseStream: false,
    requestType: account_pb.Client,
    responseType: account_pb.Client,
    requestSerialize: serialize_account_Client,
    requestDeserialize: deserialize_account_Client,
    responseSerialize: serialize_account_Client,
    responseDeserialize: deserialize_account_Client,
  },
  findAllClient: {
    path: '/account.Account/FindAllClient',
    requestStream: false,
    responseStream: false,
    requestType: account_pb.Empty,
    responseType: account_pb.ClientList,
    requestSerialize: serialize_account_Empty,
    requestDeserialize: deserialize_account_Empty,
    responseSerialize: serialize_account_ClientList,
    responseDeserialize: deserialize_account_ClientList,
  },
  updateClient: {
    path: '/account.Account/UpdateClient',
    requestStream: false,
    responseStream: false,
    requestType: account_pb.Client,
    responseType: account_pb.Client,
    requestSerialize: serialize_account_Client,
    requestDeserialize: deserialize_account_Client,
    responseSerialize: serialize_account_Client,
    responseDeserialize: deserialize_account_Client,
  },
  destroyClient: {
    path: '/account.Account/DestroyClient',
    requestStream: false,
    responseStream: false,
    requestType: account_pb.Client,
    responseType: account_pb.Client,
    requestSerialize: serialize_account_Client,
    requestDeserialize: deserialize_account_Client,
    responseSerialize: serialize_account_Client,
    responseDeserialize: deserialize_account_Client,
  },
  createRefreshToken: {
    path: '/account.Account/CreateRefreshToken',
    requestStream: false,
    responseStream: false,
    requestType: account_pb.RefreshToken,
    responseType: account_pb.RefreshToken,
    requestSerialize: serialize_account_RefreshToken,
    requestDeserialize: deserialize_account_RefreshToken,
    responseSerialize: serialize_account_RefreshToken,
    responseDeserialize: deserialize_account_RefreshToken,
  },
  findOneRefreshToken: {
    path: '/account.Account/FindOneRefreshToken',
    requestStream: false,
    responseStream: false,
    requestType: account_pb.RefreshToken,
    responseType: account_pb.RefreshToken,
    requestSerialize: serialize_account_RefreshToken,
    requestDeserialize: deserialize_account_RefreshToken,
    responseSerialize: serialize_account_RefreshToken,
    responseDeserialize: deserialize_account_RefreshToken,
  },
  findAllRefreshToken: {
    path: '/account.Account/FindAllRefreshToken',
    requestStream: false,
    responseStream: false,
    requestType: account_pb.Empty,
    responseType: account_pb.RefreshTokenList,
    requestSerialize: serialize_account_Empty,
    requestDeserialize: deserialize_account_Empty,
    responseSerialize: serialize_account_RefreshTokenList,
    responseDeserialize: deserialize_account_RefreshTokenList,
  },
  destroyRefreshToken: {
    path: '/account.Account/DestroyRefreshToken',
    requestStream: false,
    responseStream: false,
    requestType: account_pb.RefreshToken,
    responseType: account_pb.RefreshToken,
    requestSerialize: serialize_account_RefreshToken,
    requestDeserialize: deserialize_account_RefreshToken,
    responseSerialize: serialize_account_RefreshToken,
    responseDeserialize: deserialize_account_RefreshToken,
  },
  createUser: {
    path: '/account.Account/CreateUser',
    requestStream: false,
    responseStream: false,
    requestType: account_pb.User,
    responseType: account_pb.User,
    requestSerialize: serialize_account_User,
    requestDeserialize: deserialize_account_User,
    responseSerialize: serialize_account_User,
    responseDeserialize: deserialize_account_User,
  },
  findUserByUsername: {
    path: '/account.Account/FindUserByUsername',
    requestStream: false,
    responseStream: false,
    requestType: account_pb.User,
    responseType: account_pb.User,
    requestSerialize: serialize_account_User,
    requestDeserialize: deserialize_account_User,
    responseSerialize: serialize_account_User,
    responseDeserialize: deserialize_account_User,
  },
  findOneUser: {
    path: '/account.Account/FindOneUser',
    requestStream: false,
    responseStream: false,
    requestType: account_pb.User,
    responseType: account_pb.User,
    requestSerialize: serialize_account_User,
    requestDeserialize: deserialize_account_User,
    responseSerialize: serialize_account_User,
    responseDeserialize: deserialize_account_User,
  },
  findAllUser: {
    path: '/account.Account/FindAllUser',
    requestStream: false,
    responseStream: false,
    requestType: account_pb.Empty,
    responseType: account_pb.UserList,
    requestSerialize: serialize_account_Empty,
    requestDeserialize: deserialize_account_Empty,
    responseSerialize: serialize_account_UserList,
    responseDeserialize: deserialize_account_UserList,
  },
  updateUser: {
    path: '/account.Account/UpdateUser',
    requestStream: false,
    responseStream: false,
    requestType: account_pb.User,
    responseType: account_pb.User,
    requestSerialize: serialize_account_User,
    requestDeserialize: deserialize_account_User,
    responseSerialize: serialize_account_User,
    responseDeserialize: deserialize_account_User,
  },
  destroyUser: {
    path: '/account.Account/DestroyUser',
    requestStream: false,
    responseStream: false,
    requestType: account_pb.User,
    responseType: account_pb.User,
    requestSerialize: serialize_account_User,
    requestDeserialize: deserialize_account_User,
    responseSerialize: serialize_account_User,
    responseDeserialize: deserialize_account_User,
  },
};

exports.AccountClient = grpc.makeGenericClientConstructor(AccountService);
