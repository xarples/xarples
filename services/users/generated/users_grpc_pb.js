// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var users_pb = require('./users_pb.js');

function serialize_users_Empty(arg) {
  if (!(arg instanceof users_pb.Empty)) {
    throw new Error('Expected argument of type users.Empty');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_users_Empty(buffer_arg) {
  return users_pb.Empty.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_users_User(arg) {
  if (!(arg instanceof users_pb.User)) {
    throw new Error('Expected argument of type users.User');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_users_User(buffer_arg) {
  return users_pb.User.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_users_UserList(arg) {
  if (!(arg instanceof users_pb.UserList)) {
    throw new Error('Expected argument of type users.UserList');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_users_UserList(buffer_arg) {
  return users_pb.UserList.deserializeBinary(new Uint8Array(buffer_arg));
}


var UserManagerService = exports.UserManagerService = {
  getUser: {
    path: '/users.UserManager/GetUser',
    requestStream: false,
    responseStream: false,
    requestType: users_pb.User,
    responseType: users_pb.User,
    requestSerialize: serialize_users_User,
    requestDeserialize: deserialize_users_User,
    responseSerialize: serialize_users_User,
    responseDeserialize: deserialize_users_User,
  },
  getUserByUsername: {
    path: '/users.UserManager/GetUserByUsername',
    requestStream: false,
    responseStream: false,
    requestType: users_pb.User,
    responseType: users_pb.User,
    requestSerialize: serialize_users_User,
    requestDeserialize: deserialize_users_User,
    responseSerialize: serialize_users_User,
    responseDeserialize: deserialize_users_User,
  },
  getUserByEmail: {
    path: '/users.UserManager/GetUserByEmail',
    requestStream: false,
    responseStream: false,
    requestType: users_pb.User,
    responseType: users_pb.User,
    requestSerialize: serialize_users_User,
    requestDeserialize: deserialize_users_User,
    responseSerialize: serialize_users_User,
    responseDeserialize: deserialize_users_User,
  },
  listUsers: {
    path: '/users.UserManager/ListUsers',
    requestStream: false,
    responseStream: false,
    requestType: users_pb.Empty,
    responseType: users_pb.UserList,
    requestSerialize: serialize_users_Empty,
    requestDeserialize: deserialize_users_Empty,
    responseSerialize: serialize_users_UserList,
    responseDeserialize: deserialize_users_UserList,
  },
  updateUser: {
    path: '/users.UserManager/UpdateUser',
    requestStream: false,
    responseStream: false,
    requestType: users_pb.User,
    responseType: users_pb.User,
    requestSerialize: serialize_users_User,
    requestDeserialize: deserialize_users_User,
    responseSerialize: serialize_users_User,
    responseDeserialize: deserialize_users_User,
  },
  deleteUser: {
    path: '/users.UserManager/DeleteUser',
    requestStream: false,
    responseStream: false,
    requestType: users_pb.User,
    responseType: users_pb.User,
    requestSerialize: serialize_users_User,
    requestDeserialize: deserialize_users_User,
    responseSerialize: serialize_users_User,
    responseDeserialize: deserialize_users_User,
  },
};

exports.UserManagerClient = grpc.makeGenericClientConstructor(UserManagerService);
