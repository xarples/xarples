// package: authorization_code
// file: authorization_code.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as authorization_code_pb from "./authorization_code_pb";
import * as common_pb from "./common_pb";

interface IAuthorizationCodeService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    create: IAuthorizationCodeService_ICreate;
    findOne: IAuthorizationCodeService_IFindOne;
    findAll: IAuthorizationCodeService_IFindAll;
    update: IAuthorizationCodeService_IUpdate;
    destroy: IAuthorizationCodeService_IDestroy;
}

interface IAuthorizationCodeService_ICreate extends grpc.MethodDefinition<authorization_code_pb.AuthorizationCodeRequest, authorization_code_pb.AuthorizationCodeRequest> {
    path: string; // "/authorization_code.AuthorizationCode/Create"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<authorization_code_pb.AuthorizationCodeRequest>;
    requestDeserialize: grpc.deserialize<authorization_code_pb.AuthorizationCodeRequest>;
    responseSerialize: grpc.serialize<authorization_code_pb.AuthorizationCodeRequest>;
    responseDeserialize: grpc.deserialize<authorization_code_pb.AuthorizationCodeRequest>;
}
interface IAuthorizationCodeService_IFindOne extends grpc.MethodDefinition<authorization_code_pb.AuthorizationCodeRequest, authorization_code_pb.AuthorizationCodeRequest> {
    path: string; // "/authorization_code.AuthorizationCode/FindOne"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<authorization_code_pb.AuthorizationCodeRequest>;
    requestDeserialize: grpc.deserialize<authorization_code_pb.AuthorizationCodeRequest>;
    responseSerialize: grpc.serialize<authorization_code_pb.AuthorizationCodeRequest>;
    responseDeserialize: grpc.deserialize<authorization_code_pb.AuthorizationCodeRequest>;
}
interface IAuthorizationCodeService_IFindAll extends grpc.MethodDefinition<common_pb.Empty, authorization_code_pb.AuthorizationCodeListRequest> {
    path: string; // "/authorization_code.AuthorizationCode/FindAll"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<common_pb.Empty>;
    requestDeserialize: grpc.deserialize<common_pb.Empty>;
    responseSerialize: grpc.serialize<authorization_code_pb.AuthorizationCodeListRequest>;
    responseDeserialize: grpc.deserialize<authorization_code_pb.AuthorizationCodeListRequest>;
}
interface IAuthorizationCodeService_IUpdate extends grpc.MethodDefinition<authorization_code_pb.AuthorizationCodeRequest, authorization_code_pb.AuthorizationCodeRequest> {
    path: string; // "/authorization_code.AuthorizationCode/Update"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<authorization_code_pb.AuthorizationCodeRequest>;
    requestDeserialize: grpc.deserialize<authorization_code_pb.AuthorizationCodeRequest>;
    responseSerialize: grpc.serialize<authorization_code_pb.AuthorizationCodeRequest>;
    responseDeserialize: grpc.deserialize<authorization_code_pb.AuthorizationCodeRequest>;
}
interface IAuthorizationCodeService_IDestroy extends grpc.MethodDefinition<authorization_code_pb.AuthorizationCodeRequest, authorization_code_pb.AuthorizationCodeRequest> {
    path: string; // "/authorization_code.AuthorizationCode/Destroy"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<authorization_code_pb.AuthorizationCodeRequest>;
    requestDeserialize: grpc.deserialize<authorization_code_pb.AuthorizationCodeRequest>;
    responseSerialize: grpc.serialize<authorization_code_pb.AuthorizationCodeRequest>;
    responseDeserialize: grpc.deserialize<authorization_code_pb.AuthorizationCodeRequest>;
}

export const AuthorizationCodeService: IAuthorizationCodeService;

export interface IAuthorizationCodeServer {
    create: grpc.handleUnaryCall<authorization_code_pb.AuthorizationCodeRequest, authorization_code_pb.AuthorizationCodeRequest>;
    findOne: grpc.handleUnaryCall<authorization_code_pb.AuthorizationCodeRequest, authorization_code_pb.AuthorizationCodeRequest>;
    findAll: grpc.handleUnaryCall<common_pb.Empty, authorization_code_pb.AuthorizationCodeListRequest>;
    update: grpc.handleUnaryCall<authorization_code_pb.AuthorizationCodeRequest, authorization_code_pb.AuthorizationCodeRequest>;
    destroy: grpc.handleUnaryCall<authorization_code_pb.AuthorizationCodeRequest, authorization_code_pb.AuthorizationCodeRequest>;
}

export interface IAuthorizationCodeClient {
    create(request: authorization_code_pb.AuthorizationCodeRequest, callback: (error: grpc.ServiceError | null, response: authorization_code_pb.AuthorizationCodeRequest) => void): grpc.ClientUnaryCall;
    create(request: authorization_code_pb.AuthorizationCodeRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: authorization_code_pb.AuthorizationCodeRequest) => void): grpc.ClientUnaryCall;
    create(request: authorization_code_pb.AuthorizationCodeRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: authorization_code_pb.AuthorizationCodeRequest) => void): grpc.ClientUnaryCall;
    findOne(request: authorization_code_pb.AuthorizationCodeRequest, callback: (error: grpc.ServiceError | null, response: authorization_code_pb.AuthorizationCodeRequest) => void): grpc.ClientUnaryCall;
    findOne(request: authorization_code_pb.AuthorizationCodeRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: authorization_code_pb.AuthorizationCodeRequest) => void): grpc.ClientUnaryCall;
    findOne(request: authorization_code_pb.AuthorizationCodeRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: authorization_code_pb.AuthorizationCodeRequest) => void): grpc.ClientUnaryCall;
    findAll(request: common_pb.Empty, callback: (error: grpc.ServiceError | null, response: authorization_code_pb.AuthorizationCodeListRequest) => void): grpc.ClientUnaryCall;
    findAll(request: common_pb.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: authorization_code_pb.AuthorizationCodeListRequest) => void): grpc.ClientUnaryCall;
    findAll(request: common_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: authorization_code_pb.AuthorizationCodeListRequest) => void): grpc.ClientUnaryCall;
    update(request: authorization_code_pb.AuthorizationCodeRequest, callback: (error: grpc.ServiceError | null, response: authorization_code_pb.AuthorizationCodeRequest) => void): grpc.ClientUnaryCall;
    update(request: authorization_code_pb.AuthorizationCodeRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: authorization_code_pb.AuthorizationCodeRequest) => void): grpc.ClientUnaryCall;
    update(request: authorization_code_pb.AuthorizationCodeRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: authorization_code_pb.AuthorizationCodeRequest) => void): grpc.ClientUnaryCall;
    destroy(request: authorization_code_pb.AuthorizationCodeRequest, callback: (error: grpc.ServiceError | null, response: authorization_code_pb.AuthorizationCodeRequest) => void): grpc.ClientUnaryCall;
    destroy(request: authorization_code_pb.AuthorizationCodeRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: authorization_code_pb.AuthorizationCodeRequest) => void): grpc.ClientUnaryCall;
    destroy(request: authorization_code_pb.AuthorizationCodeRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: authorization_code_pb.AuthorizationCodeRequest) => void): grpc.ClientUnaryCall;
}

export class AuthorizationCodeClient extends grpc.Client implements IAuthorizationCodeClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public create(request: authorization_code_pb.AuthorizationCodeRequest, callback: (error: grpc.ServiceError | null, response: authorization_code_pb.AuthorizationCodeRequest) => void): grpc.ClientUnaryCall;
    public create(request: authorization_code_pb.AuthorizationCodeRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: authorization_code_pb.AuthorizationCodeRequest) => void): grpc.ClientUnaryCall;
    public create(request: authorization_code_pb.AuthorizationCodeRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: authorization_code_pb.AuthorizationCodeRequest) => void): grpc.ClientUnaryCall;
    public findOne(request: authorization_code_pb.AuthorizationCodeRequest, callback: (error: grpc.ServiceError | null, response: authorization_code_pb.AuthorizationCodeRequest) => void): grpc.ClientUnaryCall;
    public findOne(request: authorization_code_pb.AuthorizationCodeRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: authorization_code_pb.AuthorizationCodeRequest) => void): grpc.ClientUnaryCall;
    public findOne(request: authorization_code_pb.AuthorizationCodeRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: authorization_code_pb.AuthorizationCodeRequest) => void): grpc.ClientUnaryCall;
    public findAll(request: common_pb.Empty, callback: (error: grpc.ServiceError | null, response: authorization_code_pb.AuthorizationCodeListRequest) => void): grpc.ClientUnaryCall;
    public findAll(request: common_pb.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: authorization_code_pb.AuthorizationCodeListRequest) => void): grpc.ClientUnaryCall;
    public findAll(request: common_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: authorization_code_pb.AuthorizationCodeListRequest) => void): grpc.ClientUnaryCall;
    public update(request: authorization_code_pb.AuthorizationCodeRequest, callback: (error: grpc.ServiceError | null, response: authorization_code_pb.AuthorizationCodeRequest) => void): grpc.ClientUnaryCall;
    public update(request: authorization_code_pb.AuthorizationCodeRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: authorization_code_pb.AuthorizationCodeRequest) => void): grpc.ClientUnaryCall;
    public update(request: authorization_code_pb.AuthorizationCodeRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: authorization_code_pb.AuthorizationCodeRequest) => void): grpc.ClientUnaryCall;
    public destroy(request: authorization_code_pb.AuthorizationCodeRequest, callback: (error: grpc.ServiceError | null, response: authorization_code_pb.AuthorizationCodeRequest) => void): grpc.ClientUnaryCall;
    public destroy(request: authorization_code_pb.AuthorizationCodeRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: authorization_code_pb.AuthorizationCodeRequest) => void): grpc.ClientUnaryCall;
    public destroy(request: authorization_code_pb.AuthorizationCodeRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: authorization_code_pb.AuthorizationCodeRequest) => void): grpc.ClientUnaryCall;
}
