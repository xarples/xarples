// package: access_token
// file: access_token.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as access_token_pb from "./access_token_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as common_pb from "./common_pb";

interface IAccessTokenService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    create: IAccessTokenService_ICreate;
    findOne: IAccessTokenService_IFindOne;
    findAll: IAccessTokenService_IFindAll;
    update: IAccessTokenService_IUpdate;
    destroy: IAccessTokenService_IDestroy;
}

interface IAccessTokenService_ICreate extends grpc.MethodDefinition<access_token_pb.AccessTokenRequest, access_token_pb.AccessTokenRequest> {
    path: string; // "/access_token.AccessToken/Create"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<access_token_pb.AccessTokenRequest>;
    requestDeserialize: grpc.deserialize<access_token_pb.AccessTokenRequest>;
    responseSerialize: grpc.serialize<access_token_pb.AccessTokenRequest>;
    responseDeserialize: grpc.deserialize<access_token_pb.AccessTokenRequest>;
}
interface IAccessTokenService_IFindOne extends grpc.MethodDefinition<access_token_pb.AccessTokenRequest, access_token_pb.AccessTokenRequest> {
    path: string; // "/access_token.AccessToken/FindOne"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<access_token_pb.AccessTokenRequest>;
    requestDeserialize: grpc.deserialize<access_token_pb.AccessTokenRequest>;
    responseSerialize: grpc.serialize<access_token_pb.AccessTokenRequest>;
    responseDeserialize: grpc.deserialize<access_token_pb.AccessTokenRequest>;
}
interface IAccessTokenService_IFindAll extends grpc.MethodDefinition<common_pb.Empty, access_token_pb.AccessTokenListRequest> {
    path: string; // "/access_token.AccessToken/FindAll"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<common_pb.Empty>;
    requestDeserialize: grpc.deserialize<common_pb.Empty>;
    responseSerialize: grpc.serialize<access_token_pb.AccessTokenListRequest>;
    responseDeserialize: grpc.deserialize<access_token_pb.AccessTokenListRequest>;
}
interface IAccessTokenService_IUpdate extends grpc.MethodDefinition<access_token_pb.AccessTokenRequest, access_token_pb.AccessTokenRequest> {
    path: string; // "/access_token.AccessToken/Update"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<access_token_pb.AccessTokenRequest>;
    requestDeserialize: grpc.deserialize<access_token_pb.AccessTokenRequest>;
    responseSerialize: grpc.serialize<access_token_pb.AccessTokenRequest>;
    responseDeserialize: grpc.deserialize<access_token_pb.AccessTokenRequest>;
}
interface IAccessTokenService_IDestroy extends grpc.MethodDefinition<access_token_pb.AccessTokenRequest, access_token_pb.AccessTokenRequest> {
    path: string; // "/access_token.AccessToken/Destroy"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<access_token_pb.AccessTokenRequest>;
    requestDeserialize: grpc.deserialize<access_token_pb.AccessTokenRequest>;
    responseSerialize: grpc.serialize<access_token_pb.AccessTokenRequest>;
    responseDeserialize: grpc.deserialize<access_token_pb.AccessTokenRequest>;
}

export const AccessTokenService: IAccessTokenService;

export interface IAccessTokenServer {
    create: grpc.handleUnaryCall<access_token_pb.AccessTokenRequest, access_token_pb.AccessTokenRequest>;
    findOne: grpc.handleUnaryCall<access_token_pb.AccessTokenRequest, access_token_pb.AccessTokenRequest>;
    findAll: grpc.handleUnaryCall<common_pb.Empty, access_token_pb.AccessTokenListRequest>;
    update: grpc.handleUnaryCall<access_token_pb.AccessTokenRequest, access_token_pb.AccessTokenRequest>;
    destroy: grpc.handleUnaryCall<access_token_pb.AccessTokenRequest, access_token_pb.AccessTokenRequest>;
}

export interface IAccessTokenClient {
    create(request: access_token_pb.AccessTokenRequest, callback: (error: grpc.ServiceError | null, response: access_token_pb.AccessTokenRequest) => void): grpc.ClientUnaryCall;
    create(request: access_token_pb.AccessTokenRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: access_token_pb.AccessTokenRequest) => void): grpc.ClientUnaryCall;
    create(request: access_token_pb.AccessTokenRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: access_token_pb.AccessTokenRequest) => void): grpc.ClientUnaryCall;
    findOne(request: access_token_pb.AccessTokenRequest, callback: (error: grpc.ServiceError | null, response: access_token_pb.AccessTokenRequest) => void): grpc.ClientUnaryCall;
    findOne(request: access_token_pb.AccessTokenRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: access_token_pb.AccessTokenRequest) => void): grpc.ClientUnaryCall;
    findOne(request: access_token_pb.AccessTokenRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: access_token_pb.AccessTokenRequest) => void): grpc.ClientUnaryCall;
    findAll(request: common_pb.Empty, callback: (error: grpc.ServiceError | null, response: access_token_pb.AccessTokenListRequest) => void): grpc.ClientUnaryCall;
    findAll(request: common_pb.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: access_token_pb.AccessTokenListRequest) => void): grpc.ClientUnaryCall;
    findAll(request: common_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: access_token_pb.AccessTokenListRequest) => void): grpc.ClientUnaryCall;
    update(request: access_token_pb.AccessTokenRequest, callback: (error: grpc.ServiceError | null, response: access_token_pb.AccessTokenRequest) => void): grpc.ClientUnaryCall;
    update(request: access_token_pb.AccessTokenRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: access_token_pb.AccessTokenRequest) => void): grpc.ClientUnaryCall;
    update(request: access_token_pb.AccessTokenRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: access_token_pb.AccessTokenRequest) => void): grpc.ClientUnaryCall;
    destroy(request: access_token_pb.AccessTokenRequest, callback: (error: grpc.ServiceError | null, response: access_token_pb.AccessTokenRequest) => void): grpc.ClientUnaryCall;
    destroy(request: access_token_pb.AccessTokenRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: access_token_pb.AccessTokenRequest) => void): grpc.ClientUnaryCall;
    destroy(request: access_token_pb.AccessTokenRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: access_token_pb.AccessTokenRequest) => void): grpc.ClientUnaryCall;
}

export class AccessTokenClient extends grpc.Client implements IAccessTokenClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public create(request: access_token_pb.AccessTokenRequest, callback: (error: grpc.ServiceError | null, response: access_token_pb.AccessTokenRequest) => void): grpc.ClientUnaryCall;
    public create(request: access_token_pb.AccessTokenRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: access_token_pb.AccessTokenRequest) => void): grpc.ClientUnaryCall;
    public create(request: access_token_pb.AccessTokenRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: access_token_pb.AccessTokenRequest) => void): grpc.ClientUnaryCall;
    public findOne(request: access_token_pb.AccessTokenRequest, callback: (error: grpc.ServiceError | null, response: access_token_pb.AccessTokenRequest) => void): grpc.ClientUnaryCall;
    public findOne(request: access_token_pb.AccessTokenRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: access_token_pb.AccessTokenRequest) => void): grpc.ClientUnaryCall;
    public findOne(request: access_token_pb.AccessTokenRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: access_token_pb.AccessTokenRequest) => void): grpc.ClientUnaryCall;
    public findAll(request: common_pb.Empty, callback: (error: grpc.ServiceError | null, response: access_token_pb.AccessTokenListRequest) => void): grpc.ClientUnaryCall;
    public findAll(request: common_pb.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: access_token_pb.AccessTokenListRequest) => void): grpc.ClientUnaryCall;
    public findAll(request: common_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: access_token_pb.AccessTokenListRequest) => void): grpc.ClientUnaryCall;
    public update(request: access_token_pb.AccessTokenRequest, callback: (error: grpc.ServiceError | null, response: access_token_pb.AccessTokenRequest) => void): grpc.ClientUnaryCall;
    public update(request: access_token_pb.AccessTokenRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: access_token_pb.AccessTokenRequest) => void): grpc.ClientUnaryCall;
    public update(request: access_token_pb.AccessTokenRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: access_token_pb.AccessTokenRequest) => void): grpc.ClientUnaryCall;
    public destroy(request: access_token_pb.AccessTokenRequest, callback: (error: grpc.ServiceError | null, response: access_token_pb.AccessTokenRequest) => void): grpc.ClientUnaryCall;
    public destroy(request: access_token_pb.AccessTokenRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: access_token_pb.AccessTokenRequest) => void): grpc.ClientUnaryCall;
    public destroy(request: access_token_pb.AccessTokenRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: access_token_pb.AccessTokenRequest) => void): grpc.ClientUnaryCall;
}
