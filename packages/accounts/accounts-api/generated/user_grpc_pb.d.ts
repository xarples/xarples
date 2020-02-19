// package: user
// file: user.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as user_pb from "./user_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as common_pb from "./common_pb";

interface IUserService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    create: IUserService_ICreate;
    findOne: IUserService_IFindOne;
    findByUsername: IUserService_IFindByUsername;
    findAll: IUserService_IFindAll;
    update: IUserService_IUpdate;
    destroy: IUserService_IDestroy;
}

interface IUserService_ICreate extends grpc.MethodDefinition<user_pb.UserRequest, user_pb.UserRequest> {
    path: string; // "/user.User/Create"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<user_pb.UserRequest>;
    requestDeserialize: grpc.deserialize<user_pb.UserRequest>;
    responseSerialize: grpc.serialize<user_pb.UserRequest>;
    responseDeserialize: grpc.deserialize<user_pb.UserRequest>;
}
interface IUserService_IFindOne extends grpc.MethodDefinition<user_pb.UserRequest, user_pb.UserRequest> {
    path: string; // "/user.User/FindOne"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<user_pb.UserRequest>;
    requestDeserialize: grpc.deserialize<user_pb.UserRequest>;
    responseSerialize: grpc.serialize<user_pb.UserRequest>;
    responseDeserialize: grpc.deserialize<user_pb.UserRequest>;
}
interface IUserService_IFindByUsername extends grpc.MethodDefinition<user_pb.UserRequest, user_pb.UserRequest> {
    path: string; // "/user.User/FindByUsername"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<user_pb.UserRequest>;
    requestDeserialize: grpc.deserialize<user_pb.UserRequest>;
    responseSerialize: grpc.serialize<user_pb.UserRequest>;
    responseDeserialize: grpc.deserialize<user_pb.UserRequest>;
}
interface IUserService_IFindAll extends grpc.MethodDefinition<common_pb.Empty, user_pb.UserListRequest> {
    path: string; // "/user.User/FindAll"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<common_pb.Empty>;
    requestDeserialize: grpc.deserialize<common_pb.Empty>;
    responseSerialize: grpc.serialize<user_pb.UserListRequest>;
    responseDeserialize: grpc.deserialize<user_pb.UserListRequest>;
}
interface IUserService_IUpdate extends grpc.MethodDefinition<user_pb.UserRequest, user_pb.UserRequest> {
    path: string; // "/user.User/Update"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<user_pb.UserRequest>;
    requestDeserialize: grpc.deserialize<user_pb.UserRequest>;
    responseSerialize: grpc.serialize<user_pb.UserRequest>;
    responseDeserialize: grpc.deserialize<user_pb.UserRequest>;
}
interface IUserService_IDestroy extends grpc.MethodDefinition<user_pb.UserRequest, user_pb.UserRequest> {
    path: string; // "/user.User/Destroy"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<user_pb.UserRequest>;
    requestDeserialize: grpc.deserialize<user_pb.UserRequest>;
    responseSerialize: grpc.serialize<user_pb.UserRequest>;
    responseDeserialize: grpc.deserialize<user_pb.UserRequest>;
}

export const UserService: IUserService;

export interface IUserServer {
    create: grpc.handleUnaryCall<user_pb.UserRequest, user_pb.UserRequest>;
    findOne: grpc.handleUnaryCall<user_pb.UserRequest, user_pb.UserRequest>;
    findByUsername: grpc.handleUnaryCall<user_pb.UserRequest, user_pb.UserRequest>;
    findAll: grpc.handleUnaryCall<common_pb.Empty, user_pb.UserListRequest>;
    update: grpc.handleUnaryCall<user_pb.UserRequest, user_pb.UserRequest>;
    destroy: grpc.handleUnaryCall<user_pb.UserRequest, user_pb.UserRequest>;
}

export interface IUserClient {
    create(request: user_pb.UserRequest, callback: (error: grpc.ServiceError | null, response: user_pb.UserRequest) => void): grpc.ClientUnaryCall;
    create(request: user_pb.UserRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: user_pb.UserRequest) => void): grpc.ClientUnaryCall;
    create(request: user_pb.UserRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: user_pb.UserRequest) => void): grpc.ClientUnaryCall;
    findOne(request: user_pb.UserRequest, callback: (error: grpc.ServiceError | null, response: user_pb.UserRequest) => void): grpc.ClientUnaryCall;
    findOne(request: user_pb.UserRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: user_pb.UserRequest) => void): grpc.ClientUnaryCall;
    findOne(request: user_pb.UserRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: user_pb.UserRequest) => void): grpc.ClientUnaryCall;
    findByUsername(request: user_pb.UserRequest, callback: (error: grpc.ServiceError | null, response: user_pb.UserRequest) => void): grpc.ClientUnaryCall;
    findByUsername(request: user_pb.UserRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: user_pb.UserRequest) => void): grpc.ClientUnaryCall;
    findByUsername(request: user_pb.UserRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: user_pb.UserRequest) => void): grpc.ClientUnaryCall;
    findAll(request: common_pb.Empty, callback: (error: grpc.ServiceError | null, response: user_pb.UserListRequest) => void): grpc.ClientUnaryCall;
    findAll(request: common_pb.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: user_pb.UserListRequest) => void): grpc.ClientUnaryCall;
    findAll(request: common_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: user_pb.UserListRequest) => void): grpc.ClientUnaryCall;
    update(request: user_pb.UserRequest, callback: (error: grpc.ServiceError | null, response: user_pb.UserRequest) => void): grpc.ClientUnaryCall;
    update(request: user_pb.UserRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: user_pb.UserRequest) => void): grpc.ClientUnaryCall;
    update(request: user_pb.UserRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: user_pb.UserRequest) => void): grpc.ClientUnaryCall;
    destroy(request: user_pb.UserRequest, callback: (error: grpc.ServiceError | null, response: user_pb.UserRequest) => void): grpc.ClientUnaryCall;
    destroy(request: user_pb.UserRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: user_pb.UserRequest) => void): grpc.ClientUnaryCall;
    destroy(request: user_pb.UserRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: user_pb.UserRequest) => void): grpc.ClientUnaryCall;
}

export class UserClient extends grpc.Client implements IUserClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public create(request: user_pb.UserRequest, callback: (error: grpc.ServiceError | null, response: user_pb.UserRequest) => void): grpc.ClientUnaryCall;
    public create(request: user_pb.UserRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: user_pb.UserRequest) => void): grpc.ClientUnaryCall;
    public create(request: user_pb.UserRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: user_pb.UserRequest) => void): grpc.ClientUnaryCall;
    public findOne(request: user_pb.UserRequest, callback: (error: grpc.ServiceError | null, response: user_pb.UserRequest) => void): grpc.ClientUnaryCall;
    public findOne(request: user_pb.UserRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: user_pb.UserRequest) => void): grpc.ClientUnaryCall;
    public findOne(request: user_pb.UserRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: user_pb.UserRequest) => void): grpc.ClientUnaryCall;
    public findByUsername(request: user_pb.UserRequest, callback: (error: grpc.ServiceError | null, response: user_pb.UserRequest) => void): grpc.ClientUnaryCall;
    public findByUsername(request: user_pb.UserRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: user_pb.UserRequest) => void): grpc.ClientUnaryCall;
    public findByUsername(request: user_pb.UserRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: user_pb.UserRequest) => void): grpc.ClientUnaryCall;
    public findAll(request: common_pb.Empty, callback: (error: grpc.ServiceError | null, response: user_pb.UserListRequest) => void): grpc.ClientUnaryCall;
    public findAll(request: common_pb.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: user_pb.UserListRequest) => void): grpc.ClientUnaryCall;
    public findAll(request: common_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: user_pb.UserListRequest) => void): grpc.ClientUnaryCall;
    public update(request: user_pb.UserRequest, callback: (error: grpc.ServiceError | null, response: user_pb.UserRequest) => void): grpc.ClientUnaryCall;
    public update(request: user_pb.UserRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: user_pb.UserRequest) => void): grpc.ClientUnaryCall;
    public update(request: user_pb.UserRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: user_pb.UserRequest) => void): grpc.ClientUnaryCall;
    public destroy(request: user_pb.UserRequest, callback: (error: grpc.ServiceError | null, response: user_pb.UserRequest) => void): grpc.ClientUnaryCall;
    public destroy(request: user_pb.UserRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: user_pb.UserRequest) => void): grpc.ClientUnaryCall;
    public destroy(request: user_pb.UserRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: user_pb.UserRequest) => void): grpc.ClientUnaryCall;
}
