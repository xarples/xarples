// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var authorization_code_pb = require('./authorization_code_pb.js');
var common_pb = require('./common_pb.js');

function serialize_authorization_code_AuthorizationCodeListRequest(arg) {
  if (!(arg instanceof authorization_code_pb.AuthorizationCodeListRequest)) {
    throw new Error('Expected argument of type authorization_code.AuthorizationCodeListRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_authorization_code_AuthorizationCodeListRequest(buffer_arg) {
  return authorization_code_pb.AuthorizationCodeListRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_authorization_code_AuthorizationCodeRequest(arg) {
  if (!(arg instanceof authorization_code_pb.AuthorizationCodeRequest)) {
    throw new Error('Expected argument of type authorization_code.AuthorizationCodeRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_authorization_code_AuthorizationCodeRequest(buffer_arg) {
  return authorization_code_pb.AuthorizationCodeRequest.deserializeBinary(new Uint8Array(buffer_arg));
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


var AuthorizationCodeService = exports.AuthorizationCodeService = {
  create: {
    path: '/authorization_code.AuthorizationCode/Create',
    requestStream: false,
    responseStream: false,
    requestType: authorization_code_pb.AuthorizationCodeRequest,
    responseType: authorization_code_pb.AuthorizationCodeRequest,
    requestSerialize: serialize_authorization_code_AuthorizationCodeRequest,
    requestDeserialize: deserialize_authorization_code_AuthorizationCodeRequest,
    responseSerialize: serialize_authorization_code_AuthorizationCodeRequest,
    responseDeserialize: deserialize_authorization_code_AuthorizationCodeRequest,
  },
  findOne: {
    path: '/authorization_code.AuthorizationCode/FindOne',
    requestStream: false,
    responseStream: false,
    requestType: authorization_code_pb.AuthorizationCodeRequest,
    responseType: authorization_code_pb.AuthorizationCodeRequest,
    requestSerialize: serialize_authorization_code_AuthorizationCodeRequest,
    requestDeserialize: deserialize_authorization_code_AuthorizationCodeRequest,
    responseSerialize: serialize_authorization_code_AuthorizationCodeRequest,
    responseDeserialize: deserialize_authorization_code_AuthorizationCodeRequest,
  },
  findAll: {
    path: '/authorization_code.AuthorizationCode/FindAll',
    requestStream: false,
    responseStream: false,
    requestType: common_pb.Empty,
    responseType: authorization_code_pb.AuthorizationCodeListRequest,
    requestSerialize: serialize_common_Empty,
    requestDeserialize: deserialize_common_Empty,
    responseSerialize: serialize_authorization_code_AuthorizationCodeListRequest,
    responseDeserialize: deserialize_authorization_code_AuthorizationCodeListRequest,
  },
  update: {
    path: '/authorization_code.AuthorizationCode/Update',
    requestStream: false,
    responseStream: false,
    requestType: authorization_code_pb.AuthorizationCodeRequest,
    responseType: authorization_code_pb.AuthorizationCodeRequest,
    requestSerialize: serialize_authorization_code_AuthorizationCodeRequest,
    requestDeserialize: deserialize_authorization_code_AuthorizationCodeRequest,
    responseSerialize: serialize_authorization_code_AuthorizationCodeRequest,
    responseDeserialize: deserialize_authorization_code_AuthorizationCodeRequest,
  },
  destroy: {
    path: '/authorization_code.AuthorizationCode/Destroy',
    requestStream: false,
    responseStream: false,
    requestType: authorization_code_pb.AuthorizationCodeRequest,
    responseType: authorization_code_pb.AuthorizationCodeRequest,
    requestSerialize: serialize_authorization_code_AuthorizationCodeRequest,
    requestDeserialize: deserialize_authorization_code_AuthorizationCodeRequest,
    responseSerialize: serialize_authorization_code_AuthorizationCodeRequest,
    responseDeserialize: deserialize_authorization_code_AuthorizationCodeRequest,
  },
};

exports.AuthorizationCodeClient = grpc.makeGenericClientConstructor(AuthorizationCodeService);
