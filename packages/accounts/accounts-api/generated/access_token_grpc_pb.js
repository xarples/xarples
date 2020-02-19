// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var access_token_pb = require('./access_token_pb.js');
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');
var common_pb = require('./common_pb.js');

function serialize_access_token_AccessTokenListRequest(arg) {
  if (!(arg instanceof access_token_pb.AccessTokenListRequest)) {
    throw new Error('Expected argument of type access_token.AccessTokenListRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_access_token_AccessTokenListRequest(buffer_arg) {
  return access_token_pb.AccessTokenListRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_access_token_AccessTokenRequest(arg) {
  if (!(arg instanceof access_token_pb.AccessTokenRequest)) {
    throw new Error('Expected argument of type access_token.AccessTokenRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_access_token_AccessTokenRequest(buffer_arg) {
  return access_token_pb.AccessTokenRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_common_Empty(arg) {
  if (!(arg instanceof common_pb.Empty)) {
    throw new Error('Expected argument of type common.Empty');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_common_Empty(buffer_arg) {
  return common_pb.Empty.deserializeBinary(new Uint8Array(buffer_arg));
}


var AccessTokenService = exports.AccessTokenService = {
  create: {
    path: '/access_token.AccessToken/Create',
    requestStream: false,
    responseStream: false,
    requestType: access_token_pb.AccessTokenRequest,
    responseType: access_token_pb.AccessTokenRequest,
    requestSerialize: serialize_access_token_AccessTokenRequest,
    requestDeserialize: deserialize_access_token_AccessTokenRequest,
    responseSerialize: serialize_access_token_AccessTokenRequest,
    responseDeserialize: deserialize_access_token_AccessTokenRequest,
  },
  findOne: {
    path: '/access_token.AccessToken/FindOne',
    requestStream: false,
    responseStream: false,
    requestType: access_token_pb.AccessTokenRequest,
    responseType: access_token_pb.AccessTokenRequest,
    requestSerialize: serialize_access_token_AccessTokenRequest,
    requestDeserialize: deserialize_access_token_AccessTokenRequest,
    responseSerialize: serialize_access_token_AccessTokenRequest,
    responseDeserialize: deserialize_access_token_AccessTokenRequest,
  },
  findAll: {
    path: '/access_token.AccessToken/FindAll',
    requestStream: false,
    responseStream: false,
    requestType: common_pb.Empty,
    responseType: access_token_pb.AccessTokenListRequest,
    requestSerialize: serialize_common_Empty,
    requestDeserialize: deserialize_common_Empty,
    responseSerialize: serialize_access_token_AccessTokenListRequest,
    responseDeserialize: deserialize_access_token_AccessTokenListRequest,
  },
  update: {
    path: '/access_token.AccessToken/Update',
    requestStream: false,
    responseStream: false,
    requestType: access_token_pb.AccessTokenRequest,
    responseType: access_token_pb.AccessTokenRequest,
    requestSerialize: serialize_access_token_AccessTokenRequest,
    requestDeserialize: deserialize_access_token_AccessTokenRequest,
    responseSerialize: serialize_access_token_AccessTokenRequest,
    responseDeserialize: deserialize_access_token_AccessTokenRequest,
  },
  destroy: {
    path: '/access_token.AccessToken/Destroy',
    requestStream: false,
    responseStream: false,
    requestType: access_token_pb.AccessTokenRequest,
    responseType: access_token_pb.AccessTokenRequest,
    requestSerialize: serialize_access_token_AccessTokenRequest,
    requestDeserialize: deserialize_access_token_AccessTokenRequest,
    responseSerialize: serialize_access_token_AccessTokenRequest,
    responseDeserialize: deserialize_access_token_AccessTokenRequest,
  },
};

exports.AccessTokenClient = grpc.makeGenericClientConstructor(AccessTokenService);
