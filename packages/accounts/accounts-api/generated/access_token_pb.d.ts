// package: access_token
// file: access_token.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as common_pb from "./common_pb";

export class AccessTokenRequest extends jspb.Message { 
    getId(): string;
    setId(value: string): void;

    getName(): string;
    setName(value: string): void;

    getPassword(): string;
    setPassword(value: string): void;

    getEmail(): string;
    setEmail(value: string): void;

    getFirstName(): string;
    setFirstName(value: string): void;

    getLastName(): string;
    setLastName(value: string): void;


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
        name: string,
        password: string,
        email: string,
        firstName: string,
        lastName: string,
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
