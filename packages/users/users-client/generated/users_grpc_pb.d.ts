// package: users
// file: users.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as users_pb from "./users_pb";

interface IUserManagerService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    getUser: IUserManagerService_IGetUser;
    getUserByUsername: IUserManagerService_IGetUserByUsername;
    getUserByEmail: IUserManagerService_IGetUserByEmail;
    listUsers: IUserManagerService_IListUsers;
    updateUser: IUserManagerService_IUpdateUser;
    deleteUser: IUserManagerService_IDeleteUser;
}

interface IUserManagerService_IGetUser extends grpc.MethodDefinition<users_pb.User, users_pb.User> {
    path: string; // "/users.UserManager/GetUser"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<users_pb.User>;
    requestDeserialize: grpc.deserialize<users_pb.User>;
    responseSerialize: grpc.serialize<users_pb.User>;
    responseDeserialize: grpc.deserialize<users_pb.User>;
}
interface IUserManagerService_IGetUserByUsername extends grpc.MethodDefinition<users_pb.User, users_pb.User> {
    path: string; // "/users.UserManager/GetUserByUsername"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<users_pb.User>;
    requestDeserialize: grpc.deserialize<users_pb.User>;
    responseSerialize: grpc.serialize<users_pb.User>;
    responseDeserialize: grpc.deserialize<users_pb.User>;
}
interface IUserManagerService_IGetUserByEmail extends grpc.MethodDefinition<users_pb.User, users_pb.User> {
    path: string; // "/users.UserManager/GetUserByEmail"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<users_pb.User>;
    requestDeserialize: grpc.deserialize<users_pb.User>;
    responseSerialize: grpc.serialize<users_pb.User>;
    responseDeserialize: grpc.deserialize<users_pb.User>;
}
interface IUserManagerService_IListUsers extends grpc.MethodDefinition<users_pb.Empty, users_pb.UserList> {
    path: string; // "/users.UserManager/ListUsers"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<users_pb.Empty>;
    requestDeserialize: grpc.deserialize<users_pb.Empty>;
    responseSerialize: grpc.serialize<users_pb.UserList>;
    responseDeserialize: grpc.deserialize<users_pb.UserList>;
}
interface IUserManagerService_IUpdateUser extends grpc.MethodDefinition<users_pb.User, users_pb.User> {
    path: string; // "/users.UserManager/UpdateUser"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<users_pb.User>;
    requestDeserialize: grpc.deserialize<users_pb.User>;
    responseSerialize: grpc.serialize<users_pb.User>;
    responseDeserialize: grpc.deserialize<users_pb.User>;
}
interface IUserManagerService_IDeleteUser extends grpc.MethodDefinition<users_pb.User, users_pb.User> {
    path: string; // "/users.UserManager/DeleteUser"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<users_pb.User>;
    requestDeserialize: grpc.deserialize<users_pb.User>;
    responseSerialize: grpc.serialize<users_pb.User>;
    responseDeserialize: grpc.deserialize<users_pb.User>;
}

export const UserManagerService: IUserManagerService;

export interface IUserManagerServer {
    getUser: grpc.handleUnaryCall<users_pb.User, users_pb.User>;
    getUserByUsername: grpc.handleUnaryCall<users_pb.User, users_pb.User>;
    getUserByEmail: grpc.handleUnaryCall<users_pb.User, users_pb.User>;
    listUsers: grpc.handleUnaryCall<users_pb.Empty, users_pb.UserList>;
    updateUser: grpc.handleUnaryCall<users_pb.User, users_pb.User>;
    deleteUser: grpc.handleUnaryCall<users_pb.User, users_pb.User>;
}

export interface IUserManagerClient {
    getUser(request: users_pb.User, callback: (error: grpc.ServiceError | null, response: users_pb.User) => void): grpc.ClientUnaryCall;
    getUser(request: users_pb.User, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: users_pb.User) => void): grpc.ClientUnaryCall;
    getUser(request: users_pb.User, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: users_pb.User) => void): grpc.ClientUnaryCall;
    getUserByUsername(request: users_pb.User, callback: (error: grpc.ServiceError | null, response: users_pb.User) => void): grpc.ClientUnaryCall;
    getUserByUsername(request: users_pb.User, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: users_pb.User) => void): grpc.ClientUnaryCall;
    getUserByUsername(request: users_pb.User, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: users_pb.User) => void): grpc.ClientUnaryCall;
    getUserByEmail(request: users_pb.User, callback: (error: grpc.ServiceError | null, response: users_pb.User) => void): grpc.ClientUnaryCall;
    getUserByEmail(request: users_pb.User, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: users_pb.User) => void): grpc.ClientUnaryCall;
    getUserByEmail(request: users_pb.User, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: users_pb.User) => void): grpc.ClientUnaryCall;
    listUsers(request: users_pb.Empty, callback: (error: grpc.ServiceError | null, response: users_pb.UserList) => void): grpc.ClientUnaryCall;
    listUsers(request: users_pb.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: users_pb.UserList) => void): grpc.ClientUnaryCall;
    listUsers(request: users_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: users_pb.UserList) => void): grpc.ClientUnaryCall;
    updateUser(request: users_pb.User, callback: (error: grpc.ServiceError | null, response: users_pb.User) => void): grpc.ClientUnaryCall;
    updateUser(request: users_pb.User, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: users_pb.User) => void): grpc.ClientUnaryCall;
    updateUser(request: users_pb.User, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: users_pb.User) => void): grpc.ClientUnaryCall;
    deleteUser(request: users_pb.User, callback: (error: grpc.ServiceError | null, response: users_pb.User) => void): grpc.ClientUnaryCall;
    deleteUser(request: users_pb.User, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: users_pb.User) => void): grpc.ClientUnaryCall;
    deleteUser(request: users_pb.User, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: users_pb.User) => void): grpc.ClientUnaryCall;
}

export class UserManagerClient extends grpc.Client implements IUserManagerClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public getUser(request: users_pb.User, callback: (error: grpc.ServiceError | null, response: users_pb.User) => void): grpc.ClientUnaryCall;
    public getUser(request: users_pb.User, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: users_pb.User) => void): grpc.ClientUnaryCall;
    public getUser(request: users_pb.User, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: users_pb.User) => void): grpc.ClientUnaryCall;
    public getUserByUsername(request: users_pb.User, callback: (error: grpc.ServiceError | null, response: users_pb.User) => void): grpc.ClientUnaryCall;
    public getUserByUsername(request: users_pb.User, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: users_pb.User) => void): grpc.ClientUnaryCall;
    public getUserByUsername(request: users_pb.User, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: users_pb.User) => void): grpc.ClientUnaryCall;
    public getUserByEmail(request: users_pb.User, callback: (error: grpc.ServiceError | null, response: users_pb.User) => void): grpc.ClientUnaryCall;
    public getUserByEmail(request: users_pb.User, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: users_pb.User) => void): grpc.ClientUnaryCall;
    public getUserByEmail(request: users_pb.User, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: users_pb.User) => void): grpc.ClientUnaryCall;
    public listUsers(request: users_pb.Empty, callback: (error: grpc.ServiceError | null, response: users_pb.UserList) => void): grpc.ClientUnaryCall;
    public listUsers(request: users_pb.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: users_pb.UserList) => void): grpc.ClientUnaryCall;
    public listUsers(request: users_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: users_pb.UserList) => void): grpc.ClientUnaryCall;
    public updateUser(request: users_pb.User, callback: (error: grpc.ServiceError | null, response: users_pb.User) => void): grpc.ClientUnaryCall;
    public updateUser(request: users_pb.User, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: users_pb.User) => void): grpc.ClientUnaryCall;
    public updateUser(request: users_pb.User, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: users_pb.User) => void): grpc.ClientUnaryCall;
    public deleteUser(request: users_pb.User, callback: (error: grpc.ServiceError | null, response: users_pb.User) => void): grpc.ClientUnaryCall;
    public deleteUser(request: users_pb.User, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: users_pb.User) => void): grpc.ClientUnaryCall;
    public deleteUser(request: users_pb.User, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: users_pb.User) => void): grpc.ClientUnaryCall;
}
