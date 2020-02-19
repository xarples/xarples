// package: access_token
// file: access_token.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as common_pb from "./common_pb";

export class AccessTokenRequest extends jspb.Message { 
    getId(): string;
    setId(value: string): void;

    getClientId(): string;
    setClientId(value: string): void;

    getUserId(): string;
    setUserId(value: string): void;

    getToken(): string;
    setToken(value: string): void;

    getScope(): string;
    setScope(value: string): void;


    hasCreatedAt(): boolean;
    clearCreatedAt(): void;
    getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): void;


    hasUpdatedAt(): boolean;
    clearUpdatedAt(): void;
    getUpdatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setUpdatedAt(value?: google_protobuf_timestamp_pb.Timestamp): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AccessTokenRequest.AsObject;
    static toObject(includeInstance: boolean, msg: AccessTokenRequest): AccessTokenRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AccessTokenRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AccessTokenRequest;
    static deserializeBinaryFromReader(message: AccessTokenRequest, reader: jspb.BinaryReader): AccessTokenRequest;
}

export namespace AccessTokenRequest {
    export type AsObject = {
        id: string,
        clientId: string,
        userId: string,
        token: string,
        scope: string,
        createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        updatedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    }
}

export class AccessTokenListRequest extends jspb.Message { 
    clearAccessTokensList(): void;
    getAccessTokensList(): Array<AccessTokenRequest>;
    setAccessTokensList(value: Array<AccessTokenRequest>): void;
    addAccessTokens(value?: AccessTokenRequest, index?: number): AccessTokenRequest;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AccessTokenListRequest.AsObject;
    static toObject(includeInstance: boolean, msg: AccessTokenListRequest): AccessTokenListRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AccessTokenListRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AccessTokenListRequest;
    static deserializeBinaryFromReader(message: AccessTokenListRequest, reader: jspb.BinaryReader): AccessTokenListRequest;
}

export namespace AccessTokenListRequest {
    export type AsObject = {
        accessTokensList: Array<AccessTokenRequest.AsObject>,
    }
}
