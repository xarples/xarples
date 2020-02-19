// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var user_pb = require('./user_pb.js');
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

function serialize_user_UserListRequest(arg) {
  if (!(arg instanceof user_pb.UserListRequest)) {
    throw new Error('Expected argument of type user.UserListRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_user_UserListRequest(buffer_arg) {
  return user_pb.UserListRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_user_UserRequest(arg) {
  if (!(arg instanceof user_pb.UserRequest)) {
    throw new Error('Expected argument of type user.UserRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_user_UserRequest(buffer_arg) {
  return user_pb.UserRequest.deserializeBinary(new Uint8Array(buffer_arg));
}


var UserService = exports.UserService = {
  create: {
    path: '/user.User/Create',
    requestStream: false,
    responseStream: false,
    requestType: user_pb.UserRequest,
    responseType: user_pb.UserRequest,
    requestSerialize: serialize_user_UserRequest,
    requestDeserialize: deserialize_user_UserRequest,
    responseSerialize: serialize_user_UserRequest,
    responseDeserialize: deserialize_user_UserRequest,
  },
  findOne: {
    path: '/user.User/FindOne',
    requestStream: false,
    responseStream: false,
    requestType: user_pb.UserRequest,
    responseType: user_pb.UserRequest,
    requestSerialize: serialize_user_UserRequest,
    requestDeserialize: deserialize_user_UserRequest,
    responseSerialize: serialize_user_UserRequest,
    responseDeserialize: deserialize_user_UserRequest,
  },
  findByUsername: {
    path: '/user.User/FindByUsername',
    requestStream: false,
    responseStream: false,
    requestType: user_pb.UserRequest,
    responseType: user_pb.UserRequest,
    requestSerialize: serialize_user_UserRequest,
    requestDeserialize: deserialize_user_UserRequest,
    responseSerialize: serialize_user_UserRequest,
    responseDeserialize: deserialize_user_UserRequest,
  },
  findAll: {
    path: '/user.User/FindAll',
    requestStream: false,
    responseStream: false,
    requestType: common_pb.Empty,
    responseType: user_pb.UserListRequest,
    requestSerialize: serialize_common_Empty,
    requestDeserialize: deserialize_common_Empty,
    responseSerialize: serialize_user_UserListRequest,
    responseDeserialize: deserialize_user_UserListRequest,
  },
  update: {
    path: '/user.User/Update',
    requestStream: false,
    responseStream: false,
    requestType: user_pb.UserRequest,
    responseType: user_pb.UserRequest,
    requestSerialize: serialize_user_UserRequest,
    requestDeserialize: deserialize_user_UserRequest,
    responseSerialize: serialize_user_UserRequest,
    responseDeserialize: deserialize_user_UserRequest,
  },
  destroy: {
    path: '/user.User/Destroy',
    requestStream: false,
    responseStream: false,
    requestType: user_pb.UserRequest,
    responseType: user_pb.UserRequest,
    requestSerialize: serialize_user_UserRequest,
    requestDeserialize: deserialize_user_UserRequest,
    responseSerialize: serialize_user_UserRequest,
    responseDeserialize: deserialize_user_UserRequest,
  },
};

exports.UserClient = grpc.makeGenericClientConstructor(UserService);
