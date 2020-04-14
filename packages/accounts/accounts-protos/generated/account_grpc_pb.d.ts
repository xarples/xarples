// package: account
// file: account.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as account_pb from "./account_pb";

interface IAccountService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    createAccessToken: IAccountService_ICreateAccessToken;
    findOneAccessToken: IAccountService_IFindOneAccessToken;
    findAllAccessToken: IAccountService_IFindAllAccessToken;
    destroyAccessToken: IAccountService_IDestroyAccessToken;
    createAuthorizationCode: IAccountService_ICreateAuthorizationCode;
    findOneAuthorizationCode: IAccountService_IFindOneAuthorizationCode;
    findAllAuthorizationCode: IAccountService_IFindAllAuthorizationCode;
    destroyAuthorizationCode: IAccountService_IDestroyAuthorizationCode;
    createClient: IAccountService_ICreateClient;
    findOneClient: IAccountService_IFindOneClient;
    findAllClient: IAccountService_IFindAllClient;
    updateClient: IAccountService_IUpdateClient;
    destroyClient: IAccountService_IDestroyClient;
    createRefreshToken: IAccountService_ICreateRefreshToken;
    findOneRefreshToken: IAccountService_IFindOneRefreshToken;
    findAllRefreshToken: IAccountService_IFindAllRefreshToken;
    destroyRefreshToken: IAccountService_IDestroyRefreshToken;
    createUser: IAccountService_ICreateUser;
    findUserByUsername: IAccountService_IFindUserByUsername;
    findOneUser: IAccountService_IFindOneUser;
    findAllUser: IAccountService_IFindAllUser;
    updateUser: IAccountService_IUpdateUser;
    destroyUser: IAccountService_IDestroyUser;
}

interface IAccountService_ICreateAccessToken extends grpc.MethodDefinition<account_pb.AccessToken, account_pb.AccessToken> {
    path: string; // "/account.Account/CreateAccessToken"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<account_pb.AccessToken>;
    requestDeserialize: grpc.deserialize<account_pb.AccessToken>;
    responseSerialize: grpc.serialize<account_pb.AccessToken>;
    responseDeserialize: grpc.deserialize<account_pb.AccessToken>;
}
interface IAccountService_IFindOneAccessToken extends grpc.MethodDefinition<account_pb.AccessToken, account_pb.AccessToken> {
    path: string; // "/account.Account/FindOneAccessToken"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<account_pb.AccessToken>;
    requestDeserialize: grpc.deserialize<account_pb.AccessToken>;
    responseSerialize: grpc.serialize<account_pb.AccessToken>;
    responseDeserialize: grpc.deserialize<account_pb.AccessToken>;
}
interface IAccountService_IFindAllAccessToken extends grpc.MethodDefinition<account_pb.Empty, account_pb.AccessTokenList> {
    path: string; // "/account.Account/FindAllAccessToken"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<account_pb.Empty>;
    requestDeserialize: grpc.deserialize<account_pb.Empty>;
    responseSerialize: grpc.serialize<account_pb.AccessTokenList>;
    responseDeserialize: grpc.deserialize<account_pb.AccessTokenList>;
}
interface IAccountService_IDestroyAccessToken extends grpc.MethodDefinition<account_pb.AccessToken, account_pb.AccessToken> {
    path: string; // "/account.Account/DestroyAccessToken"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<account_pb.AccessToken>;
    requestDeserialize: grpc.deserialize<account_pb.AccessToken>;
    responseSerialize: grpc.serialize<account_pb.AccessToken>;
    responseDeserialize: grpc.deserialize<account_pb.AccessToken>;
}
interface IAccountService_ICreateAuthorizationCode extends grpc.MethodDefinition<account_pb.AuthorizationCode, account_pb.AuthorizationCode> {
    path: string; // "/account.Account/CreateAuthorizationCode"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<account_pb.AuthorizationCode>;
    requestDeserialize: grpc.deserialize<account_pb.AuthorizationCode>;
    responseSerialize: grpc.serialize<account_pb.AuthorizationCode>;
    responseDeserialize: grpc.deserialize<account_pb.AuthorizationCode>;
}
interface IAccountService_IFindOneAuthorizationCode extends grpc.MethodDefinition<account_pb.AuthorizationCode, account_pb.AuthorizationCode> {
    path: string; // "/account.Account/FindOneAuthorizationCode"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<account_pb.AuthorizationCode>;
    requestDeserialize: grpc.deserialize<account_pb.AuthorizationCode>;
    responseSerialize: grpc.serialize<account_pb.AuthorizationCode>;
    responseDeserialize: grpc.deserialize<account_pb.AuthorizationCode>;
}
interface IAccountService_IFindAllAuthorizationCode extends grpc.MethodDefinition<account_pb.Empty, account_pb.AuthorizationCodeList> {
    path: string; // "/account.Account/FindAllAuthorizationCode"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<account_pb.Empty>;
    requestDeserialize: grpc.deserialize<account_pb.Empty>;
    responseSerialize: grpc.serialize<account_pb.AuthorizationCodeList>;
    responseDeserialize: grpc.deserialize<account_pb.AuthorizationCodeList>;
}
interface IAccountService_IDestroyAuthorizationCode extends grpc.MethodDefinition<account_pb.AuthorizationCode, account_pb.AuthorizationCode> {
    path: string; // "/account.Account/DestroyAuthorizationCode"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<account_pb.AuthorizationCode>;
    requestDeserialize: grpc.deserialize<account_pb.AuthorizationCode>;
    responseSerialize: grpc.serialize<account_pb.AuthorizationCode>;
    responseDeserialize: grpc.deserialize<account_pb.AuthorizationCode>;
}
interface IAccountService_ICreateClient extends grpc.MethodDefinition<account_pb.Client, account_pb.Client> {
    path: string; // "/account.Account/CreateClient"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<account_pb.Client>;
    requestDeserialize: grpc.deserialize<account_pb.Client>;
    responseSerialize: grpc.serialize<account_pb.Client>;
    responseDeserialize: grpc.deserialize<account_pb.Client>;
}
interface IAccountService_IFindOneClient extends grpc.MethodDefinition<account_pb.Client, account_pb.Client> {
    path: string; // "/account.Account/FindOneClient"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<account_pb.Client>;
    requestDeserialize: grpc.deserialize<account_pb.Client>;
    responseSerialize: grpc.serialize<account_pb.Client>;
    responseDeserialize: grpc.deserialize<account_pb.Client>;
}
interface IAccountService_IFindAllClient extends grpc.MethodDefinition<account_pb.Empty, account_pb.ClientList> {
    path: string; // "/account.Account/FindAllClient"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<account_pb.Empty>;
    requestDeserialize: grpc.deserialize<account_pb.Empty>;
    responseSerialize: grpc.serialize<account_pb.ClientList>;
    responseDeserialize: grpc.deserialize<account_pb.ClientList>;
}
interface IAccountService_IUpdateClient extends grpc.MethodDefinition<account_pb.Client, account_pb.Client> {
    path: string; // "/account.Account/UpdateClient"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<account_pb.Client>;
    requestDeserialize: grpc.deserialize<account_pb.Client>;
    responseSerialize: grpc.serialize<account_pb.Client>;
    responseDeserialize: grpc.deserialize<account_pb.Client>;
}
interface IAccountService_IDestroyClient extends grpc.MethodDefinition<account_pb.Client, account_pb.Client> {
    path: string; // "/account.Account/DestroyClient"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<account_pb.Client>;
    requestDeserialize: grpc.deserialize<account_pb.Client>;
    responseSerialize: grpc.serialize<account_pb.Client>;
    responseDeserialize: grpc.deserialize<account_pb.Client>;
}
interface IAccountService_ICreateRefreshToken extends grpc.MethodDefinition<account_pb.RefreshToken, account_pb.RefreshToken> {
    path: string; // "/account.Account/CreateRefreshToken"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<account_pb.RefreshToken>;
    requestDeserialize: grpc.deserialize<account_pb.RefreshToken>;
    responseSerialize: grpc.serialize<account_pb.RefreshToken>;
    responseDeserialize: grpc.deserialize<account_pb.RefreshToken>;
}
interface IAccountService_IFindOneRefreshToken extends grpc.MethodDefinition<account_pb.RefreshToken, account_pb.RefreshToken> {
    path: string; // "/account.Account/FindOneRefreshToken"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<account_pb.RefreshToken>;
    requestDeserialize: grpc.deserialize<account_pb.RefreshToken>;
    responseSerialize: grpc.serialize<account_pb.RefreshToken>;
    responseDeserialize: grpc.deserialize<account_pb.RefreshToken>;
}
interface IAccountService_IFindAllRefreshToken extends grpc.MethodDefinition<account_pb.Empty, account_pb.RefreshTokenList> {
    path: string; // "/account.Account/FindAllRefreshToken"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<account_pb.Empty>;
    requestDeserialize: grpc.deserialize<account_pb.Empty>;
    responseSerialize: grpc.serialize<account_pb.RefreshTokenList>;
    responseDeserialize: grpc.deserialize<account_pb.RefreshTokenList>;
}
interface IAccountService_IDestroyRefreshToken extends grpc.MethodDefinition<account_pb.RefreshToken, account_pb.RefreshToken> {
    path: string; // "/account.Account/DestroyRefreshToken"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<account_pb.RefreshToken>;
    requestDeserialize: grpc.deserialize<account_pb.RefreshToken>;
    responseSerialize: grpc.serialize<account_pb.RefreshToken>;
    responseDeserialize: grpc.deserialize<account_pb.RefreshToken>;
}
interface IAccountService_ICreateUser extends grpc.MethodDefinition<account_pb.User, account_pb.User> {
    path: string; // "/account.Account/CreateUser"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<account_pb.User>;
    requestDeserialize: grpc.deserialize<account_pb.User>;
    responseSerialize: grpc.serialize<account_pb.User>;
    responseDeserialize: grpc.deserialize<account_pb.User>;
}
interface IAccountService_IFindUserByUsername extends grpc.MethodDefinition<account_pb.User, account_pb.User> {
    path: string; // "/account.Account/FindUserByUsername"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<account_pb.User>;
    requestDeserialize: grpc.deserialize<account_pb.User>;
    responseSerialize: grpc.serialize<account_pb.User>;
    responseDeserialize: grpc.deserialize<account_pb.User>;
}
interface IAccountService_IFindOneUser extends grpc.MethodDefinition<account_pb.User, account_pb.User> {
    path: string; // "/account.Account/FindOneUser"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<account_pb.User>;
    requestDeserialize: grpc.deserialize<account_pb.User>;
    responseSerialize: grpc.serialize<account_pb.User>;
    responseDeserialize: grpc.deserialize<account_pb.User>;
}
interface IAccountService_IFindAllUser extends grpc.MethodDefinition<account_pb.Empty, account_pb.UserList> {
    path: string; // "/account.Account/FindAllUser"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<account_pb.Empty>;
    requestDeserialize: grpc.deserialize<account_pb.Empty>;
    responseSerialize: grpc.serialize<account_pb.UserList>;
    responseDeserialize: grpc.deserialize<account_pb.UserList>;
}
interface IAccountService_IUpdateUser extends grpc.MethodDefinition<account_pb.User, account_pb.User> {
    path: string; // "/account.Account/UpdateUser"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<account_pb.User>;
    requestDeserialize: grpc.deserialize<account_pb.User>;
    responseSerialize: grpc.serialize<account_pb.User>;
    responseDeserialize: grpc.deserialize<account_pb.User>;
}
interface IAccountService_IDestroyUser extends grpc.MethodDefinition<account_pb.User, account_pb.User> {
    path: string; // "/account.Account/DestroyUser"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<account_pb.User>;
    requestDeserialize: grpc.deserialize<account_pb.User>;
    responseSerialize: grpc.serialize<account_pb.User>;
    responseDeserialize: grpc.deserialize<account_pb.User>;
}

export const AccountService: IAccountService;

export interface IAccountServer {
    createAccessToken: grpc.handleUnaryCall<account_pb.AccessToken, account_pb.AccessToken>;
    findOneAccessToken: grpc.handleUnaryCall<account_pb.AccessToken, account_pb.AccessToken>;
    findAllAccessToken: grpc.handleUnaryCall<account_pb.Empty, account_pb.AccessTokenList>;
    destroyAccessToken: grpc.handleUnaryCall<account_pb.AccessToken, account_pb.AccessToken>;
    createAuthorizationCode: grpc.handleUnaryCall<account_pb.AuthorizationCode, account_pb.AuthorizationCode>;
    findOneAuthorizationCode: grpc.handleUnaryCall<account_pb.AuthorizationCode, account_pb.AuthorizationCode>;
    findAllAuthorizationCode: grpc.handleUnaryCall<account_pb.Empty, account_pb.AuthorizationCodeList>;
    destroyAuthorizationCode: grpc.handleUnaryCall<account_pb.AuthorizationCode, account_pb.AuthorizationCode>;
    createClient: grpc.handleUnaryCall<account_pb.Client, account_pb.Client>;
    findOneClient: grpc.handleUnaryCall<account_pb.Client, account_pb.Client>;
    findAllClient: grpc.handleUnaryCall<account_pb.Empty, account_pb.ClientList>;
    updateClient: grpc.handleUnaryCall<account_pb.Client, account_pb.Client>;
    destroyClient: grpc.handleUnaryCall<account_pb.Client, account_pb.Client>;
    createRefreshToken: grpc.handleUnaryCall<account_pb.RefreshToken, account_pb.RefreshToken>;
    findOneRefreshToken: grpc.handleUnaryCall<account_pb.RefreshToken, account_pb.RefreshToken>;
    findAllRefreshToken: grpc.handleUnaryCall<account_pb.Empty, account_pb.RefreshTokenList>;
    destroyRefreshToken: grpc.handleUnaryCall<account_pb.RefreshToken, account_pb.RefreshToken>;
    createUser: grpc.handleUnaryCall<account_pb.User, account_pb.User>;
    findUserByUsername: grpc.handleUnaryCall<account_pb.User, account_pb.User>;
    findOneUser: grpc.handleUnaryCall<account_pb.User, account_pb.User>;
    findAllUser: grpc.handleUnaryCall<account_pb.Empty, account_pb.UserList>;
    updateUser: grpc.handleUnaryCall<account_pb.User, account_pb.User>;
    destroyUser: grpc.handleUnaryCall<account_pb.User, account_pb.User>;
}

export interface IAccountClient {
    createAccessToken(request: account_pb.AccessToken, callback: (error: grpc.ServiceError | null, response: account_pb.AccessToken) => void): grpc.ClientUnaryCall;
    createAccessToken(request: account_pb.AccessToken, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: account_pb.AccessToken) => void): grpc.ClientUnaryCall;
    createAccessToken(request: account_pb.AccessToken, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: account_pb.AccessToken) => void): grpc.ClientUnaryCall;
    findOneAccessToken(request: account_pb.AccessToken, callback: (error: grpc.ServiceError | null, response: account_pb.AccessToken) => void): grpc.ClientUnaryCall;
    findOneAccessToken(request: account_pb.AccessToken, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: account_pb.AccessToken) => void): grpc.ClientUnaryCall;
    findOneAccessToken(request: account_pb.AccessToken, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: account_pb.AccessToken) => void): grpc.ClientUnaryCall;
    findAllAccessToken(request: account_pb.Empty, callback: (error: grpc.ServiceError | null, response: account_pb.AccessTokenList) => void): grpc.ClientUnaryCall;
    findAllAccessToken(request: account_pb.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: account_pb.AccessTokenList) => void): grpc.ClientUnaryCall;
    findAllAccessToken(request: account_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: account_pb.AccessTokenList) => void): grpc.ClientUnaryCall;
    destroyAccessToken(request: account_pb.AccessToken, callback: (error: grpc.ServiceError | null, response: account_pb.AccessToken) => void): grpc.ClientUnaryCall;
    destroyAccessToken(request: account_pb.AccessToken, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: account_pb.AccessToken) => void): grpc.ClientUnaryCall;
    destroyAccessToken(request: account_pb.AccessToken, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: account_pb.AccessToken) => void): grpc.ClientUnaryCall;
    createAuthorizationCode(request: account_pb.AuthorizationCode, callback: (error: grpc.ServiceError | null, response: account_pb.AuthorizationCode) => void): grpc.ClientUnaryCall;
    createAuthorizationCode(request: account_pb.AuthorizationCode, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: account_pb.AuthorizationCode) => void): grpc.ClientUnaryCall;
    createAuthorizationCode(request: account_pb.AuthorizationCode, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: account_pb.AuthorizationCode) => void): grpc.ClientUnaryCall;
    findOneAuthorizationCode(request: account_pb.AuthorizationCode, callback: (error: grpc.ServiceError | null, response: account_pb.AuthorizationCode) => void): grpc.ClientUnaryCall;
    findOneAuthorizationCode(request: account_pb.AuthorizationCode, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: account_pb.AuthorizationCode) => void): grpc.ClientUnaryCall;
    findOneAuthorizationCode(request: account_pb.AuthorizationCode, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: account_pb.AuthorizationCode) => void): grpc.ClientUnaryCall;
    findAllAuthorizationCode(request: account_pb.Empty, callback: (error: grpc.ServiceError | null, response: account_pb.AuthorizationCodeList) => void): grpc.ClientUnaryCall;
    findAllAuthorizationCode(request: account_pb.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: account_pb.AuthorizationCodeList) => void): grpc.ClientUnaryCall;
    findAllAuthorizationCode(request: account_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: account_pb.AuthorizationCodeList) => void): grpc.ClientUnaryCall;
    destroyAuthorizationCode(request: account_pb.AuthorizationCode, callback: (error: grpc.ServiceError | null, response: account_pb.AuthorizationCode) => void): grpc.ClientUnaryCall;
    destroyAuthorizationCode(request: account_pb.AuthorizationCode, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: account_pb.AuthorizationCode) => void): grpc.ClientUnaryCall;
    destroyAuthorizationCode(request: account_pb.AuthorizationCode, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: account_pb.AuthorizationCode) => void): grpc.ClientUnaryCall;
    createClient(request: account_pb.Client, callback: (error: grpc.ServiceError | null, response: account_pb.Client) => void): grpc.ClientUnaryCall;
    createClient(request: account_pb.Client, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: account_pb.Client) => void): grpc.ClientUnaryCall;
    createClient(request: account_pb.Client, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: account_pb.Client) => void): grpc.ClientUnaryCall;
    findOneClient(request: account_pb.Client, callback: (error: grpc.ServiceError | null, response: account_pb.Client) => void): grpc.ClientUnaryCall;
    findOneClient(request: account_pb.Client, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: account_pb.Client) => void): grpc.ClientUnaryCall;
    findOneClient(request: account_pb.Client, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: account_pb.Client) => void): grpc.ClientUnaryCall;
    findAllClient(request: account_pb.Empty, callback: (error: grpc.ServiceError | null, response: account_pb.ClientList) => void): grpc.ClientUnaryCall;
    findAllClient(request: account_pb.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: account_pb.ClientList) => void): grpc.ClientUnaryCall;
    findAllClient(request: account_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: account_pb.ClientList) => void): grpc.ClientUnaryCall;
    updateClient(request: account_pb.Client, callback: (error: grpc.ServiceError | null, response: account_pb.Client) => void): grpc.ClientUnaryCall;
    updateClient(request: account_pb.Client, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: account_pb.Client) => void): grpc.ClientUnaryCall;
    updateClient(request: account_pb.Client, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: account_pb.Client) => void): grpc.ClientUnaryCall;
    destroyClient(request: account_pb.Client, callback: (error: grpc.ServiceError | null, response: account_pb.Client) => void): grpc.ClientUnaryCall;
    destroyClient(request: account_pb.Client, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: account_pb.Client) => void): grpc.ClientUnaryCall;
    destroyClient(request: account_pb.Client, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: account_pb.Client) => void): grpc.ClientUnaryCall;
    createRefreshToken(request: account_pb.RefreshToken, callback: (error: grpc.ServiceError | null, response: account_pb.RefreshToken) => void): grpc.ClientUnaryCall;
    createRefreshToken(request: account_pb.RefreshToken, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: account_pb.RefreshToken) => void): grpc.ClientUnaryCall;
    createRefreshToken(request: account_pb.RefreshToken, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: account_pb.RefreshToken) => void): grpc.ClientUnaryCall;
    findOneRefreshToken(request: account_pb.RefreshToken, callback: (error: grpc.ServiceError | null, response: account_pb.RefreshToken) => void): grpc.ClientUnaryCall;
    findOneRefreshToken(request: account_pb.RefreshToken, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: account_pb.RefreshToken) => void): grpc.ClientUnaryCall;
    findOneRefreshToken(request: account_pb.RefreshToken, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: account_pb.RefreshToken) => void): grpc.ClientUnaryCall;
    findAllRefreshToken(request: account_pb.Empty, callback: (error: grpc.ServiceError | null, response: account_pb.RefreshTokenList) => void): grpc.ClientUnaryCall;
    findAllRefreshToken(request: account_pb.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: account_pb.RefreshTokenList) => void): grpc.ClientUnaryCall;
    findAllRefreshToken(request: account_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: account_pb.RefreshTokenList) => void): grpc.ClientUnaryCall;
    destroyRefreshToken(request: account_pb.RefreshToken, callback: (error: grpc.ServiceError | null, response: account_pb.RefreshToken) => void): grpc.ClientUnaryCall;
    destroyRefreshToken(request: account_pb.RefreshToken, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: account_pb.RefreshToken) => void): grpc.ClientUnaryCall;
    destroyRefreshToken(request: account_pb.RefreshToken, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: account_pb.RefreshToken) => void): grpc.ClientUnaryCall;
    createUser(request: account_pb.User, callback: (error: grpc.ServiceError | null, response: account_pb.User) => void): grpc.ClientUnaryCall;
    createUser(request: account_pb.User, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: account_pb.User) => void): grpc.ClientUnaryCall;
    createUser(request: account_pb.User, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: account_pb.User) => void): grpc.ClientUnaryCall;
    findUserByUsername(request: account_pb.User, callback: (error: grpc.ServiceError | null, response: account_pb.User) => void): grpc.ClientUnaryCall;
    findUserByUsername(request: account_pb.User, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: account_pb.User) => void): grpc.ClientUnaryCall;
    findUserByUsername(request: account_pb.User, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: account_pb.User) => void): grpc.ClientUnaryCall;
    findOneUser(request: account_pb.User, callback: (error: grpc.ServiceError | null, response: account_pb.User) => void): grpc.ClientUnaryCall;
    findOneUser(request: account_pb.User, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: account_pb.User) => void): grpc.ClientUnaryCall;
    findOneUser(request: account_pb.User, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: account_pb.User) => void): grpc.ClientUnaryCall;
    findAllUser(request: account_pb.Empty, callback: (error: grpc.ServiceError | null, response: account_pb.UserList) => void): grpc.ClientUnaryCall;
    findAllUser(request: account_pb.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: account_pb.UserList) => void): grpc.ClientUnaryCall;
    findAllUser(request: account_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: account_pb.UserList) => void): grpc.ClientUnaryCall;
    updateUser(request: account_pb.User, callback: (error: grpc.ServiceError | null, response: account_pb.User) => void): grpc.ClientUnaryCall;
    updateUser(request: account_pb.User, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: account_pb.User) => void): grpc.ClientUnaryCall;
    updateUser(request: account_pb.User, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: account_pb.User) => void): grpc.ClientUnaryCall;
    destroyUser(request: account_pb.User, callback: (error: grpc.ServiceError | null, response: account_pb.User) => void): grpc.ClientUnaryCall;
    destroyUser(request: account_pb.User, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: account_pb.User) => void): grpc.ClientUnaryCall;
    destroyUser(request: account_pb.User, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: account_pb.User) => void): grpc.ClientUnaryCall;
}

export class AccountClient extends grpc.Client implements IAccountClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public createAccessToken(request: account_pb.AccessToken, callback: (error: grpc.ServiceError | null, response: account_pb.AccessToken) => void): grpc.ClientUnaryCall;
    public createAccessToken(request: account_pb.AccessToken, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: account_pb.AccessToken) => void): grpc.ClientUnaryCall;
    public createAccessToken(request: account_pb.AccessToken, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: account_pb.AccessToken) => void): grpc.ClientUnaryCall;
    public findOneAccessToken(request: account_pb.AccessToken, callback: (error: grpc.ServiceError | null, response: account_pb.AccessToken) => void): grpc.ClientUnaryCall;
    public findOneAccessToken(request: account_pb.AccessToken, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: account_pb.AccessToken) => void): grpc.ClientUnaryCall;
    public findOneAccessToken(request: account_pb.AccessToken, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: account_pb.AccessToken) => void): grpc.ClientUnaryCall;
    public findAllAccessToken(request: account_pb.Empty, callback: (error: grpc.ServiceError | null, response: account_pb.AccessTokenList) => void): grpc.ClientUnaryCall;
    public findAllAccessToken(request: account_pb.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: account_pb.AccessTokenList) => void): grpc.ClientUnaryCall;
    public findAllAccessToken(request: account_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: account_pb.AccessTokenList) => void): grpc.ClientUnaryCall;
    public destroyAccessToken(request: account_pb.AccessToken, callback: (error: grpc.ServiceError | null, response: account_pb.AccessToken) => void): grpc.ClientUnaryCall;
    public destroyAccessToken(request: account_pb.AccessToken, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: account_pb.AccessToken) => void): grpc.ClientUnaryCall;
    public destroyAccessToken(request: account_pb.AccessToken, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: account_pb.AccessToken) => void): grpc.ClientUnaryCall;
    public createAuthorizationCode(request: account_pb.AuthorizationCode, callback: (error: grpc.ServiceError | null, response: account_pb.AuthorizationCode) => void): grpc.ClientUnaryCall;
    public createAuthorizationCode(request: account_pb.AuthorizationCode, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: account_pb.AuthorizationCode) => void): grpc.ClientUnaryCall;
    public createAuthorizationCode(request: account_pb.AuthorizationCode, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: account_pb.AuthorizationCode) => void): grpc.ClientUnaryCall;
    public findOneAuthorizationCode(request: account_pb.AuthorizationCode, callback: (error: grpc.ServiceError | null, response: account_pb.AuthorizationCode) => void): grpc.ClientUnaryCall;
    public findOneAuthorizationCode(request: account_pb.AuthorizationCode, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: account_pb.AuthorizationCode) => void): grpc.ClientUnaryCall;
    public findOneAuthorizationCode(request: account_pb.AuthorizationCode, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: account_pb.AuthorizationCode) => void): grpc.ClientUnaryCall;
    public findAllAuthorizationCode(request: account_pb.Empty, callback: (error: grpc.ServiceError | null, response: account_pb.AuthorizationCodeList) => void): grpc.ClientUnaryCall;
    public findAllAuthorizationCode(request: account_pb.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: account_pb.AuthorizationCodeList) => void): grpc.ClientUnaryCall;
    public findAllAuthorizationCode(request: account_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: account_pb.AuthorizationCodeList) => void): grpc.ClientUnaryCall;
    public destroyAuthorizationCode(request: account_pb.AuthorizationCode, callback: (error: grpc.ServiceError | null, response: account_pb.AuthorizationCode) => void): grpc.ClientUnaryCall;
    public destroyAuthorizationCode(request: account_pb.AuthorizationCode, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: account_pb.AuthorizationCode) => void): grpc.ClientUnaryCall;
    public destroyAuthorizationCode(request: account_pb.AuthorizationCode, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: account_pb.AuthorizationCode) => void): grpc.ClientUnaryCall;
    public createClient(request: account_pb.Client, callback: (error: grpc.ServiceError | null, response: account_pb.Client) => void): grpc.ClientUnaryCall;
    public createClient(request: account_pb.Client, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: account_pb.Client) => void): grpc.ClientUnaryCall;
    public createClient(request: account_pb.Client, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: account_pb.Client) => void): grpc.ClientUnaryCall;
    public findOneClient(request: account_pb.Client, callback: (error: grpc.ServiceError | null, response: account_pb.Client) => void): grpc.ClientUnaryCall;
    public findOneClient(request: account_pb.Client, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: account_pb.Client) => void): grpc.ClientUnaryCall;
    public findOneClient(request: account_pb.Client, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: account_pb.Client) => void): grpc.ClientUnaryCall;
    public findAllClient(request: account_pb.Empty, callback: (error: grpc.ServiceError | null, response: account_pb.ClientList) => void): grpc.ClientUnaryCall;
    public findAllClient(request: account_pb.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: account_pb.ClientList) => void): grpc.ClientUnaryCall;
    public findAllClient(request: account_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: account_pb.ClientList) => void): grpc.ClientUnaryCall;
    public updateClient(request: account_pb.Client, callback: (error: grpc.ServiceError | null, response: account_pb.Client) => void): grpc.ClientUnaryCall;
    public updateClient(request: account_pb.Client, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: account_pb.Client) => void): grpc.ClientUnaryCall;
    public updateClient(request: account_pb.Client, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: account_pb.Client) => void): grpc.ClientUnaryCall;
    public destroyClient(request: account_pb.Client, callback: (error: grpc.ServiceError | null, response: account_pb.Client) => void): grpc.ClientUnaryCall;
    public destroyClient(request: account_pb.Client, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: account_pb.Client) => void): grpc.ClientUnaryCall;
    public destroyClient(request: account_pb.Client, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: account_pb.Client) => void): grpc.ClientUnaryCall;
    public createRefreshToken(request: account_pb.RefreshToken, callback: (error: grpc.ServiceError | null, response: account_pb.RefreshToken) => void): grpc.ClientUnaryCall;
    public createRefreshToken(request: account_pb.RefreshToken, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: account_pb.RefreshToken) => void): grpc.ClientUnaryCall;
    public createRefreshToken(request: account_pb.RefreshToken, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: account_pb.RefreshToken) => void): grpc.ClientUnaryCall;
    public findOneRefreshToken(request: account_pb.RefreshToken, callback: (error: grpc.ServiceError | null, response: account_pb.RefreshToken) => void): grpc.ClientUnaryCall;
    public findOneRefreshToken(request: account_pb.RefreshToken, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: account_pb.RefreshToken) => void): grpc.ClientUnaryCall;
    public findOneRefreshToken(request: account_pb.RefreshToken, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: account_pb.RefreshToken) => void): grpc.ClientUnaryCall;
    public findAllRefreshToken(request: account_pb.Empty, callback: (error: grpc.ServiceError | null, response: account_pb.RefreshTokenList) => void): grpc.ClientUnaryCall;
    public findAllRefreshToken(request: account_pb.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: account_pb.RefreshTokenList) => void): grpc.ClientUnaryCall;
    public findAllRefreshToken(request: account_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: account_pb.RefreshTokenList) => void): grpc.ClientUnaryCall;
    public destroyRefreshToken(request: account_pb.RefreshToken, callback: (error: grpc.ServiceError | null, response: account_pb.RefreshToken) => void): grpc.ClientUnaryCall;
    public destroyRefreshToken(request: account_pb.RefreshToken, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: account_pb.RefreshToken) => void): grpc.ClientUnaryCall;
    public destroyRefreshToken(request: account_pb.RefreshToken, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: account_pb.RefreshToken) => void): grpc.ClientUnaryCall;
    public createUser(request: account_pb.User, callback: (error: grpc.ServiceError | null, response: account_pb.User) => void): grpc.ClientUnaryCall;
    public createUser(request: account_pb.User, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: account_pb.User) => void): grpc.ClientUnaryCall;
    public createUser(request: account_pb.User, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: account_pb.User) => void): grpc.ClientUnaryCall;
    public findUserByUsername(request: account_pb.User, callback: (error: grpc.ServiceError | null, response: account_pb.User) => void): grpc.ClientUnaryCall;
    public findUserByUsername(request: account_pb.User, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: account_pb.User) => void): grpc.ClientUnaryCall;
    public findUserByUsername(request: account_pb.User, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: account_pb.User) => void): grpc.ClientUnaryCall;
    public findOneUser(request: account_pb.User, callback: (error: grpc.ServiceError | null, response: account_pb.User) => void): grpc.ClientUnaryCall;
    public findOneUser(request: account_pb.User, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: account_pb.User) => void): grpc.ClientUnaryCall;
    public findOneUser(request: account_pb.User, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: account_pb.User) => void): grpc.ClientUnaryCall;
    public findAllUser(request: account_pb.Empty, callback: (error: grpc.ServiceError | null, response: account_pb.UserList) => void): grpc.ClientUnaryCall;
    public findAllUser(request: account_pb.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: account_pb.UserList) => void): grpc.ClientUnaryCall;
    public findAllUser(request: account_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: account_pb.UserList) => void): grpc.ClientUnaryCall;
    public updateUser(request: account_pb.User, callback: (error: grpc.ServiceError | null, response: account_pb.User) => void): grpc.ClientUnaryCall;
    public updateUser(request: account_pb.User, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: account_pb.User) => void): grpc.ClientUnaryCall;
    public updateUser(request: account_pb.User, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: account_pb.User) => void): grpc.ClientUnaryCall;
    public destroyUser(request: account_pb.User, callback: (error: grpc.ServiceError | null, response: account_pb.User) => void): grpc.ClientUnaryCall;
    public destroyUser(request: account_pb.User, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: account_pb.User) => void): grpc.ClientUnaryCall;
    public destroyUser(request: account_pb.User, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: account_pb.User) => void): grpc.ClientUnaryCall;
}
