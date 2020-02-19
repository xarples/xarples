// package: client
// file: client.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as client_pb from "./client_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as common_pb from "./common_pb";

interface IClientService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    create: IClientService_ICreate;
    findOne: IClientService_IFindOne;
    findAll: IClientService_IFindAll;
    update: IClientService_IUpdate;
    destroy: IClientService_IDestroy;
}

interface IClientService_ICreate extends grpc.MethodDefinition<client_pb.ClientRequest, client_pb.ClientRequest> {
    path: string; // "/client.Client/Create"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<client_pb.ClientRequest>;
    requestDeserialize: grpc.deserialize<client_pb.ClientRequest>;
    responseSerialize: grpc.serialize<client_pb.ClientRequest>;
    responseDeserialize: grpc.deserialize<client_pb.ClientRequest>;
}
interface IClientService_IFindOne extends grpc.MethodDefinition<client_pb.ClientRequest, client_pb.ClientRequest> {
    path: string; // "/client.Client/FindOne"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<client_pb.ClientRequest>;
    requestDeserialize: grpc.deserialize<client_pb.ClientRequest>;
    responseSerialize: grpc.serialize<client_pb.ClientRequest>;
    responseDeserialize: grpc.deserialize<client_pb.ClientRequest>;
}
interface IClientService_IFindAll extends grpc.MethodDefinition<common_pb.Empty, client_pb.ClientListRequest> {
    path: string; // "/client.Client/FindAll"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<common_pb.Empty>;
    requestDeserialize: grpc.deserialize<common_pb.Empty>;
    responseSerialize: grpc.serialize<client_pb.ClientListRequest>;
    responseDeserialize: grpc.deserialize<client_pb.ClientListRequest>;
}
interface IClientService_IUpdate extends grpc.MethodDefinition<client_pb.ClientRequest, client_pb.ClientRequest> {
    path: string; // "/client.Client/Update"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<client_pb.ClientRequest>;
    requestDeserialize: grpc.deserialize<client_pb.ClientRequest>;
    responseSerialize: grpc.serialize<client_pb.ClientRequest>;
    responseDeserialize: grpc.deserialize<client_pb.ClientRequest>;
}
interface IClientService_IDestroy extends grpc.MethodDefinition<client_pb.ClientRequest, client_pb.ClientRequest> {
    path: string; // "/client.Client/Destroy"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<client_pb.ClientRequest>;
    requestDeserialize: grpc.deserialize<client_pb.ClientRequest>;
    responseSerialize: grpc.serialize<client_pb.ClientRequest>;
    responseDeserialize: grpc.deserialize<client_pb.ClientRequest>;
}

export const ClientService: IClientService;

export interface IClientServer {
    create: grpc.handleUnaryCall<client_pb.ClientRequest, client_pb.ClientRequest>;
    findOne: grpc.handleUnaryCall<client_pb.ClientRequest, client_pb.ClientRequest>;
    findAll: grpc.handleUnaryCall<common_pb.Empty, client_pb.ClientListRequest>;
    update: grpc.handleUnaryCall<client_pb.ClientRequest, client_pb.ClientRequest>;
    destroy: grpc.handleUnaryCall<client_pb.ClientRequest, client_pb.ClientRequest>;
}

export interface IClientClient {
    create(request: client_pb.ClientRequest, callback: (error: grpc.ServiceError | null, response: client_pb.ClientRequest) => void): grpc.ClientUnaryCall;
    create(request: client_pb.ClientRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: client_pb.ClientRequest) => void): grpc.ClientUnaryCall;
    create(request: client_pb.ClientRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: client_pb.ClientRequest) => void): grpc.ClientUnaryCall;
    findOne(request: client_pb.ClientRequest, callback: (error: grpc.ServiceError | null, response: client_pb.ClientRequest) => void): grpc.ClientUnaryCall;
    findOne(request: client_pb.ClientRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: client_pb.ClientRequest) => void): grpc.ClientUnaryCall;
    findOne(request: client_pb.ClientRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: client_pb.ClientRequest) => void): grpc.ClientUnaryCall;
    findAll(request: common_pb.Empty, callback: (error: grpc.ServiceError | null, response: client_pb.ClientListRequest) => void): grpc.ClientUnaryCall;
    findAll(request: common_pb.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: client_pb.ClientListRequest) => void): grpc.ClientUnaryCall;
    findAll(request: common_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: client_pb.ClientListRequest) => void): grpc.ClientUnaryCall;
    update(request: client_pb.ClientRequest, callback: (error: grpc.ServiceError | null, response: client_pb.ClientRequest) => void): grpc.ClientUnaryCall;
    update(request: client_pb.ClientRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: client_pb.ClientRequest) => void): grpc.ClientUnaryCall;
    update(request: client_pb.ClientRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: client_pb.ClientRequest) => void): grpc.ClientUnaryCall;
    destroy(request: client_pb.ClientRequest, callback: (error: grpc.ServiceError | null, response: client_pb.ClientRequest) => void): grpc.ClientUnaryCall;
    destroy(request: client_pb.ClientRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: client_pb.ClientRequest) => void): grpc.ClientUnaryCall;
    destroy(request: client_pb.ClientRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: client_pb.ClientRequest) => void): grpc.ClientUnaryCall;
}

export class ClientClient extends grpc.Client implements IClientClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public create(request: client_pb.ClientRequest, callback: (error: grpc.ServiceError | null, response: client_pb.ClientRequest) => void): grpc.ClientUnaryCall;
    public create(request: client_pb.ClientRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: client_pb.ClientRequest) => void): grpc.ClientUnaryCall;
    public create(request: client_pb.ClientRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: client_pb.ClientRequest) => void): grpc.ClientUnaryCall;
    public findOne(request: client_pb.ClientRequest, callback: (error: grpc.ServiceError | null, response: client_pb.ClientRequest) => void): grpc.ClientUnaryCall;
    public findOne(request: client_pb.ClientRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: client_pb.ClientRequest) => void): grpc.ClientUnaryCall;
    public findOne(request: client_pb.ClientRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: client_pb.ClientRequest) => void): grpc.ClientUnaryCall;
    public findAll(request: common_pb.Empty, callback: (error: grpc.ServiceError | null, response: client_pb.ClientListRequest) => void): grpc.ClientUnaryCall;
    public findAll(request: common_pb.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: client_pb.ClientListRequest) => void): grpc.ClientUnaryCall;
    public findAll(request: common_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: client_pb.ClientListRequest) => void): grpc.ClientUnaryCall;
    public update(request: client_pb.ClientRequest, callback: (error: grpc.ServiceError | null, response: client_pb.ClientRequest) => void): grpc.ClientUnaryCall;
    public update(request: client_pb.ClientRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: client_pb.ClientRequest) => void): grpc.ClientUnaryCall;
    public update(request: client_pb.ClientRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: client_pb.ClientRequest) => void): grpc.ClientUnaryCall;
    public destroy(request: client_pb.ClientRequest, callback: (error: grpc.ServiceError | null, response: client_pb.ClientRequest) => void): grpc.ClientUnaryCall;
    public destroy(request: client_pb.ClientRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: client_pb.ClientRequest) => void): grpc.ClientUnaryCall;
    public destroy(request: client_pb.ClientRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: client_pb.ClientRequest) => void): grpc.ClientUnaryCall;
}
