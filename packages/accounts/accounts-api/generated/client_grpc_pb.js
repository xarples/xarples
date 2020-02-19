// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var client_pb = require('./client_pb.js');
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');
var common_pb = require('./common_pb.js');

function serialize_client_ClientListRequest(arg) {
  if (!(arg instanceof client_pb.ClientListRequest)) {
    throw new Error('Expected argument of type client.ClientListRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_client_ClientListRequest(buffer_arg) {
  return client_pb.ClientListRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_client_ClientRequest(arg) {
  if (!(arg instanceof client_pb.ClientRequest)) {
    throw new Error('Expected argument of type client.ClientRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_client_ClientRequest(buffer_arg) {
  return client_pb.ClientRequest.deserializeBinary(new Uint8Array(buffer_arg));
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


var ClientService = exports.ClientService = {
  create: {
    path: '/client.Client/Create',
    requestStream: false,
    responseStream: false,
    requestType: client_pb.ClientRequest,
    responseType: client_pb.ClientRequest,
    requestSerialize: serialize_client_ClientRequest,
    requestDeserialize: deserialize_client_ClientRequest,
    responseSerialize: serialize_client_ClientRequest,
    responseDeserialize: deserialize_client_ClientRequest,
  },
  findOne: {
    path: '/client.Client/FindOne',
    requestStream: false,
    responseStream: false,
    requestType: client_pb.ClientRequest,
    responseType: client_pb.ClientRequest,
    requestSerialize: serialize_client_ClientRequest,
    requestDeserialize: deserialize_client_ClientRequest,
    responseSerialize: serialize_client_ClientRequest,
    responseDeserialize: deserialize_client_ClientRequest,
  },
  findAll: {
    path: '/client.Client/FindAll',
    requestStream: false,
    responseStream: false,
    requestType: common_pb.Empty,
    responseType: client_pb.ClientListRequest,
    requestSerialize: serialize_common_Empty,
    requestDeserialize: deserialize_common_Empty,
    responseSerialize: serialize_client_ClientListRequest,
    responseDeserialize: deserialize_client_ClientListRequest,
  },
  update: {
    path: '/client.Client/Update',
    requestStream: false,
    responseStream: false,
    requestType: client_pb.ClientRequest,
    responseType: client_pb.ClientRequest,
    requestSerialize: serialize_client_ClientRequest,
    requestDeserialize: deserialize_client_ClientRequest,
    responseSerialize: serialize_client_ClientRequest,
    responseDeserialize: deserialize_client_ClientRequest,
  },
  destroy: {
    path: '/client.Client/Destroy',
    requestStream: false,
    responseStream: false,
    requestType: client_pb.ClientRequest,
    responseType: client_pb.ClientRequest,
    requestSerialize: serialize_client_ClientRequest,
    requestDeserialize: deserialize_client_ClientRequest,
    responseSerialize: serialize_client_ClientRequest,
    responseDeserialize: deserialize_client_ClientRequest,
  },
};

exports.ClientClient = grpc.makeGenericClientConstructor(ClientService);
