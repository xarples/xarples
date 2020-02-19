// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var refresh_token_pb = require('./refresh_token_pb.js');
var common_pb = require('./common_pb.js');

function serialize_common_Empty(arg) {
  if (!(arg instanceof common_pb.Empty)) {
    throw new Error('Expected argument of type common.Empty');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_common_Empty(buffer_arg) {
  return common_pb.Empty.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_refresh_token_RefreshTokenListRequest(arg) {
  if (!(arg instanceof refresh_token_pb.RefreshTokenListRequest)) {
    throw new Error('Expected argument of type refresh_token.RefreshTokenListRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_refresh_token_RefreshTokenListRequest(buffer_arg) {
  return refresh_token_pb.RefreshTokenListRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_refresh_token_RefreshTokenRequest(arg) {
  if (!(arg instanceof refresh_token_pb.RefreshTokenRequest)) {
    throw new Error('Expected argument of type refresh_token.RefreshTokenRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_refresh_token_RefreshTokenRequest(buffer_arg) {
  return refresh_token_pb.RefreshTokenRequest.deserializeBinary(new Uint8Array(buffer_arg));
}


var RefreshTokenService = exports.RefreshTokenService = {
  create: {
    path: '/refresh_token.RefreshToken/Create',
    requestStream: false,
    responseStream: false,
    requestType: refresh_token_pb.RefreshTokenRequest,
    responseType: refresh_token_pb.RefreshTokenRequest,
    requestSerialize: serialize_refresh_token_RefreshTokenRequest,
    requestDeserialize: deserialize_refresh_token_RefreshTokenRequest,
    responseSerialize: serialize_refresh_token_RefreshTokenRequest,
    responseDeserialize: deserialize_refresh_token_RefreshTokenRequest,
  },
  findOne: {
    path: '/refresh_token.RefreshToken/FindOne',
    requestStream: false,
    responseStream: false,
    requestType: refresh_token_pb.RefreshTokenRequest,
    responseType: refresh_token_pb.RefreshTokenRequest,
    requestSerialize: serialize_refresh_token_RefreshTokenRequest,
    requestDeserialize: deserialize_refresh_token_RefreshTokenRequest,
    responseSerialize: serialize_refresh_token_RefreshTokenRequest,
    responseDeserialize: deserialize_refresh_token_RefreshTokenRequest,
  },
  findAll: {
    path: '/refresh_token.RefreshToken/FindAll',
    requestStream: false,
    responseStream: false,
    requestType: common_pb.Empty,
    responseType: refresh_token_pb.RefreshTokenListRequest,
    requestSerialize: serialize_common_Empty,
    requestDeserialize: deserialize_common_Empty,
    responseSerialize: serialize_refresh_token_RefreshTokenListRequest,
    responseDeserialize: deserialize_refresh_token_RefreshTokenListRequest,
  },
  update: {
    path: '/refresh_token.RefreshToken/Update',
    requestStream: false,
    responseStream: false,
    requestType: refresh_token_pb.RefreshTokenRequest,
    responseType: refresh_token_pb.RefreshTokenRequest,
    requestSerialize: serialize_refresh_token_RefreshTokenRequest,
    requestDeserialize: deserialize_refresh_token_RefreshTokenRequest,
    responseSerialize: serialize_refresh_token_RefreshTokenRequest,
    responseDeserialize: deserialize_refresh_token_RefreshTokenRequest,
  },
  destroy: {
    path: '/refresh_token.RefreshToken/Destroy',
    requestStream: false,
    responseStream: false,
    requestType: refresh_token_pb.RefreshTokenRequest,
    responseType: refresh_token_pb.RefreshTokenRequest,
    requestSerialize: serialize_refresh_token_RefreshTokenRequest,
    requestDeserialize: deserialize_refresh_token_RefreshTokenRequest,
    responseSerialize: serialize_refresh_token_RefreshTokenRequest,
    responseDeserialize: deserialize_refresh_token_RefreshTokenRequest,
  },
};

exports.RefreshTokenClient = grpc.makeGenericClientConstructor(RefreshTokenService);
