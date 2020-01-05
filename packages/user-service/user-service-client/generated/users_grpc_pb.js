// GENERATED CODE -- DO NOT EDIT!

'use strict'
var grpc = require('grpc')
var users_pb = require('./users_pb.js')

function serialize_proto_Empty (arg) {
  if (!(arg instanceof users_pb.Empty)) {
    throw new Error('Expected argument of type proto.Empty')
  }
  return Buffer.from(arg.serializeBinary())
}

function deserialize_proto_Empty (buffer_arg) {
  return users_pb.Empty.deserializeBinary(new Uint8Array(buffer_arg))
}

function serialize_proto_User (arg) {
  if (!(arg instanceof users_pb.User)) {
    throw new Error('Expected argument of type proto.User')
  }
  return Buffer.from(arg.serializeBinary())
}

function deserialize_proto_User (buffer_arg) {
  return users_pb.User.deserializeBinary(new Uint8Array(buffer_arg))
}

function serialize_proto_UserList (arg) {
  if (!(arg instanceof users_pb.UserList)) {
    throw new Error('Expected argument of type proto.UserList')
  }
  return Buffer.from(arg.serializeBinary())
}

function deserialize_proto_UserList (buffer_arg) {
  return users_pb.UserList.deserializeBinary(new Uint8Array(buffer_arg))
}

var UserManagerService = exports.UserManagerService = {
  getUser: {
    path: '/proto.UserManager/GetUser',
    requestStream: false,
    responseStream: false,
    requestType: users_pb.User,
    responseType: users_pb.User,
    requestSerialize: serialize_proto_User,
    requestDeserialize: deserialize_proto_User,
    responseSerialize: serialize_proto_User,
    responseDeserialize: deserialize_proto_User
  },
  getUserByUsername: {
    path: '/proto.UserManager/GetUserByUsername',
    requestStream: false,
    responseStream: false,
    requestType: users_pb.User,
    responseType: users_pb.User,
    requestSerialize: serialize_proto_User,
    requestDeserialize: deserialize_proto_User,
    responseSerialize: serialize_proto_User,
    responseDeserialize: deserialize_proto_User
  },
  getUserByEmail: {
    path: '/proto.UserManager/GetUserByEmail',
    requestStream: false,
    responseStream: false,
    requestType: users_pb.User,
    responseType: users_pb.User,
    requestSerialize: serialize_proto_User,
    requestDeserialize: deserialize_proto_User,
    responseSerialize: serialize_proto_User,
    responseDeserialize: deserialize_proto_User
  },
  listUsers: {
    path: '/proto.UserManager/ListUsers',
    requestStream: false,
    responseStream: false,
    requestType: users_pb.Empty,
    responseType: users_pb.UserList,
    requestSerialize: serialize_proto_Empty,
    requestDeserialize: deserialize_proto_Empty,
    responseSerialize: serialize_proto_UserList,
    responseDeserialize: deserialize_proto_UserList
  },
  updateUser: {
    path: '/proto.UserManager/UpdateUser',
    requestStream: false,
    responseStream: false,
    requestType: users_pb.User,
    responseType: users_pb.User,
    requestSerialize: serialize_proto_User,
    requestDeserialize: deserialize_proto_User,
    responseSerialize: serialize_proto_User,
    responseDeserialize: deserialize_proto_User
  },
  deleteUser: {
    path: '/proto.UserManager/DeleteUser',
    requestStream: false,
    responseStream: false,
    requestType: users_pb.User,
    responseType: users_pb.User,
    requestSerialize: serialize_proto_User,
    requestDeserialize: deserialize_proto_User,
    responseSerialize: serialize_proto_User,
    responseDeserialize: deserialize_proto_User
  }
}

exports.UserManagerClient = grpc.makeGenericClientConstructor(UserManagerService)
