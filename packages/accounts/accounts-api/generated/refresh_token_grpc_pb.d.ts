// package: refresh_token
// file: refresh_token.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as refresh_token_pb from "./refresh_token_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as common_pb from "./common_pb";

interface IRefreshTokenService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    create: IRefreshTokenService_ICreate;
    findOne: IRefreshTokenService_IFindOne;
    findAll: IRefreshTokenService_IFindAll;
    update: IRefreshTokenService_IUpdate;
    destroy: IRefreshTokenService_IDestroy;
}

interface IRefreshTokenService_ICreate extends grpc.MethodDefinition<refresh_token_pb.RefreshTokenRequest, refresh_token_pb.RefreshTokenRequest> {
    path: string; // "/refresh_token.RefreshToken/Create"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<refresh_token_pb.RefreshTokenRequest>;
    requestDeserialize: grpc.deserialize<refresh_token_pb.RefreshTokenRequest>;
    responseSerialize: grpc.serialize<refresh_token_pb.RefreshTokenRequest>;
    responseDeserialize: grpc.deserialize<refresh_token_pb.RefreshTokenRequest>;
}
interface IRefreshTokenService_IFindOne extends grpc.MethodDefinition<refresh_token_pb.RefreshTokenRequest, refresh_token_pb.RefreshTokenRequest> {
    path: string; // "/refresh_token.RefreshToken/FindOne"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<refresh_token_pb.RefreshTokenRequest>;
    requestDeserialize: grpc.deserialize<refresh_token_pb.RefreshTokenRequest>;
    responseSerialize: grpc.serialize<refresh_token_pb.RefreshTokenRequest>;
    responseDeserialize: grpc.deserialize<refresh_token_pb.RefreshTokenRequest>;
}
interface IRefreshTokenService_IFindAll extends grpc.MethodDefinition<common_pb.Empty, refresh_token_pb.RefreshTokenListRequest> {
    path: string; // "/refresh_token.RefreshToken/FindAll"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<common_pb.Empty>;
    requestDeserialize: grpc.deserialize<common_pb.Empty>;
    responseSerialize: grpc.serialize<refresh_token_pb.RefreshTokenListRequest>;
    responseDeserialize: grpc.deserialize<refresh_token_pb.RefreshTokenListRequest>;
}
interface IRefreshTokenService_IUpdate extends grpc.MethodDefinition<refresh_token_pb.RefreshTokenRequest, refresh_token_pb.RefreshTokenRequest> {
    path: string; // "/refresh_token.RefreshToken/Update"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<refresh_token_pb.RefreshTokenRequest>;
    requestDeserialize: grpc.deserialize<refresh_token_pb.RefreshTokenRequest>;
    responseSerialize: grpc.serialize<refresh_token_pb.RefreshTokenRequest>;
    responseDeserialize: grpc.deserialize<refresh_token_pb.RefreshTokenRequest>;
}
interface IRefreshTokenService_IDestroy extends grpc.MethodDefinition<refresh_token_pb.RefreshTokenRequest, refresh_token_pb.RefreshTokenRequest> {
    path: string; // "/refresh_token.RefreshToken/Destroy"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<refresh_token_pb.RefreshTokenRequest>;
    requestDeserialize: grpc.deserialize<refresh_token_pb.RefreshTokenRequest>;
    responseSerialize: grpc.serialize<refresh_token_pb.RefreshTokenRequest>;
    responseDeserialize: grpc.deserialize<refresh_token_pb.RefreshTokenRequest>;
}

export const RefreshTokenService: IRefreshTokenService;

export interface IRefreshTokenServer {
    create: grpc.handleUnaryCall<refresh_token_pb.RefreshTokenRequest, refresh_token_pb.RefreshTokenRequest>;
    findOne: grpc.handleUnaryCall<refresh_token_pb.RefreshTokenRequest, refresh_token_pb.RefreshTokenRequest>;
    findAll: grpc.handleUnaryCall<common_pb.Empty, refresh_token_pb.RefreshTokenListRequest>;
    update: grpc.handleUnaryCall<refresh_token_pb.RefreshTokenRequest, refresh_token_pb.RefreshTokenRequest>;
    destroy: grpc.handleUnaryCall<refresh_token_pb.RefreshTokenRequest, refresh_token_pb.RefreshTokenRequest>;
}

export interface IRefreshTokenClient {
    create(request: refresh_token_pb.RefreshTokenRequest, callback: (error: grpc.ServiceError | null, response: refresh_token_pb.RefreshTokenRequest) => void): grpc.ClientUnaryCall;
    create(request: refresh_token_pb.RefreshTokenRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: refresh_token_pb.RefreshTokenRequest) => void): grpc.ClientUnaryCall;
    create(request: refresh_token_pb.RefreshTokenRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: refresh_token_pb.RefreshTokenRequest) => void): grpc.ClientUnaryCall;
    findOne(request: refresh_token_pb.RefreshTokenRequest, callback: (error: grpc.ServiceError | null, response: refresh_token_pb.RefreshTokenRequest) => void): grpc.ClientUnaryCall;
    findOne(request: refresh_token_pb.RefreshTokenRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: refresh_token_pb.RefreshTokenRequest) => void): grpc.ClientUnaryCall;
    findOne(request: refresh_token_pb.RefreshTokenRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: refresh_token_pb.RefreshTokenRequest) => void): grpc.ClientUnaryCall;
    findAll(request: common_pb.Empty, callback: (error: grpc.ServiceError | null, response: refresh_token_pb.RefreshTokenListRequest) => void): grpc.ClientUnaryCall;
    findAll(request: common_pb.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: refresh_token_pb.RefreshTokenListRequest) => void): grpc.ClientUnaryCall;
    findAll(request: common_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: refresh_token_pb.RefreshTokenListRequest) => void): grpc.ClientUnaryCall;
    update(request: refresh_token_pb.RefreshTokenRequest, callback: (error: grpc.ServiceError | null, response: refresh_token_pb.RefreshTokenRequest) => void): grpc.ClientUnaryCall;
    update(request: refresh_token_pb.RefreshTokenRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: refresh_token_pb.RefreshTokenRequest) => void): grpc.ClientUnaryCall;
    update(request: refresh_token_pb.RefreshTokenRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: refresh_token_pb.RefreshTokenRequest) => void): grpc.ClientUnaryCall;
    destroy(request: refresh_token_pb.RefreshTokenRequest, callback: (error: grpc.ServiceError | null, response: refresh_token_pb.RefreshTokenRequest) => void): grpc.ClientUnaryCall;
    destroy(request: refresh_token_pb.RefreshTokenRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: refresh_token_pb.RefreshTokenRequest) => void): grpc.ClientUnaryCall;
    destroy(request: refresh_token_pb.RefreshTokenRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: refresh_token_pb.RefreshTokenRequest) => void): grpc.ClientUnaryCall;
}

export class RefreshTokenClient extends grpc.Client implements IRefreshTokenClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public create(request: refresh_token_pb.RefreshTokenRequest, callback: (error: grpc.ServiceError | null, response: refresh_token_pb.RefreshTokenRequest) => void): grpc.ClientUnaryCall;
    public create(request: refresh_token_pb.RefreshTokenRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: refresh_token_pb.RefreshTokenRequest) => void): grpc.ClientUnaryCall;
    public create(request: refresh_token_pb.RefreshTokenRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: refresh_token_pb.RefreshTokenRequest) => void): grpc.ClientUnaryCall;
    public findOne(request: refresh_token_pb.RefreshTokenRequest, callback: (error: grpc.ServiceError | null, response: refresh_token_pb.RefreshTokenRequest) => void): grpc.ClientUnaryCall;
    public findOne(request: refresh_token_pb.RefreshTokenRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: refresh_token_pb.RefreshTokenRequest) => void): grpc.ClientUnaryCall;
    public findOne(request: refresh_token_pb.RefreshTokenRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: refresh_token_pb.RefreshTokenRequest) => void): grpc.ClientUnaryCall;
    public findAll(request: common_pb.Empty, callback: (error: grpc.ServiceError | null, response: refresh_token_pb.RefreshTokenListRequest) => void): grpc.ClientUnaryCall;
    public findAll(request: common_pb.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: refresh_token_pb.RefreshTokenListRequest) => void): grpc.ClientUnaryCall;
    public findAll(request: common_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: refresh_token_pb.RefreshTokenListRequest) => void): grpc.ClientUnaryCall;
    public update(request: refresh_token_pb.RefreshTokenRequest, callback: (error: grpc.ServiceError | null, response: refresh_token_pb.RefreshTokenRequest) => void): grpc.ClientUnaryCall;
    public update(request: refresh_token_pb.RefreshTokenRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: refresh_token_pb.RefreshTokenRequest) => void): grpc.ClientUnaryCall;
    public update(request: refresh_token_pb.RefreshTokenRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: refresh_token_pb.RefreshTokenRequest) => void): grpc.ClientUnaryCall;
    public destroy(request: refresh_token_pb.RefreshTokenRequest, callback: (error: grpc.ServiceError | null, response: refresh_token_pb.RefreshTokenRequest) => void): grpc.ClientUnaryCall;
    public destroy(request: refresh_token_pb.RefreshTokenRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: refresh_token_pb.RefreshTokenRequest) => void): grpc.ClientUnaryCall;
    public destroy(request: refresh_token_pb.RefreshTokenRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: refresh_token_pb.RefreshTokenRequest) => void): grpc.ClientUnaryCall;
}
