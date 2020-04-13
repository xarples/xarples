// package: client
// file: client.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as common_pb from "./common_pb";

export class ClientRequest extends jspb.Message { 
    getId(): string;
    setId(value: string): void;

    getUserId(): string;
    setUserId(value: string): void;

    getClientId(): string;
    setClientId(value: string): void;

    getClientSecret(): string;
    setClientSecret(value: string): void;

    getRedirectUri(): string;
    setRedirectUri(value: string): void;

    getName(): string;
    setName(value: string): void;

    getDescription(): string;
    setDescription(value: string): void;

    getType(): string;
    setType(value: string): void;

    getHomepageUrl(): string;
    setHomepageUrl(value: string): void;

    getLogoUrl(): string;
    setLogoUrl(value: string): void;

    getCreatedAt(): string;
    setCreatedAt(value: string): void;

    getUpdatedAt(): string;
    setUpdatedAt(value: string): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ClientRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ClientRequest): ClientRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ClientRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ClientRequest;
    static deserializeBinaryFromReader(message: ClientRequest, reader: jspb.BinaryReader): ClientRequest;
}

export namespace ClientRequest {
    export type AsObject = {
        id: string,
        userId: string,
        clientId: string,
        clientSecret: string,
        redirectUri: string,
        name: string,
        description: string,
        type: string,
        homepageUrl: string,
        logoUrl: string,
        createdAt: string,
        updatedAt: string,
    }
}

export class ClientListRequest extends jspb.Message { 
    clearClientsList(): void;
    getClientsList(): Array<ClientRequest>;
    setClientsList(value: Array<ClientRequest>): void;
    addClients(value?: ClientRequest, index?: number): ClientRequest;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ClientListRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ClientListRequest): ClientListRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ClientListRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ClientListRequest;
    static deserializeBinaryFromReader(message: ClientListRequest, reader: jspb.BinaryReader): ClientListRequest;
}

export namespace ClientListRequest {
    export type AsObject = {
        clientsList: Array<ClientRequest.AsObject>,
    }
}
