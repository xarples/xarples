// package: account
// file: account.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class Empty extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Empty.AsObject;
    static toObject(includeInstance: boolean, msg: Empty): Empty.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Empty, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Empty;
    static deserializeBinaryFromReader(message: Empty, reader: jspb.BinaryReader): Empty;
}

export namespace Empty {
    export type AsObject = {
    }
}

export class AccessToken extends jspb.Message { 
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

    getCreatedAt(): string;
    setCreatedAt(value: string): void;

    getUpdatedAt(): string;
    setUpdatedAt(value: string): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AccessToken.AsObject;
    static toObject(includeInstance: boolean, msg: AccessToken): AccessToken.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AccessToken, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AccessToken;
    static deserializeBinaryFromReader(message: AccessToken, reader: jspb.BinaryReader): AccessToken;
}

export namespace AccessToken {
    export type AsObject = {
        id: string,
        clientId: string,
        userId: string,
        token: string,
        scope: string,
        createdAt: string,
        updatedAt: string,
    }
}

export class AccessTokenList extends jspb.Message { 
    clearAccessTokensList(): void;
    getAccessTokensList(): Array<AccessToken>;
    setAccessTokensList(value: Array<AccessToken>): void;
    addAccessTokens(value?: AccessToken, index?: number): AccessToken;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AccessTokenList.AsObject;
    static toObject(includeInstance: boolean, msg: AccessTokenList): AccessTokenList.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AccessTokenList, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AccessTokenList;
    static deserializeBinaryFromReader(message: AccessTokenList, reader: jspb.BinaryReader): AccessTokenList;
}

export namespace AccessTokenList {
    export type AsObject = {
        accessTokensList: Array<AccessToken.AsObject>,
    }
}

export class AuthorizationCode extends jspb.Message { 
    getId(): string;
    setId(value: string): void;

    getClientId(): string;
    setClientId(value: string): void;

    getUserId(): string;
    setUserId(value: string): void;

    getCode(): string;
    setCode(value: string): void;

    getCodeChallenge(): string;
    setCodeChallenge(value: string): void;

    getCodeChallengeMethod(): string;
    setCodeChallengeMethod(value: string): void;

    getScope(): string;
    setScope(value: string): void;

    getCreatedAt(): string;
    setCreatedAt(value: string): void;

    getUpdatedAt(): string;
    setUpdatedAt(value: string): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AuthorizationCode.AsObject;
    static toObject(includeInstance: boolean, msg: AuthorizationCode): AuthorizationCode.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AuthorizationCode, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AuthorizationCode;
    static deserializeBinaryFromReader(message: AuthorizationCode, reader: jspb.BinaryReader): AuthorizationCode;
}

export namespace AuthorizationCode {
    export type AsObject = {
        id: string,
        clientId: string,
        userId: string,
        code: string,
        codeChallenge: string,
        codeChallengeMethod: string,
        scope: string,
        createdAt: string,
        updatedAt: string,
    }
}

export class AuthorizationCodeList extends jspb.Message { 
    clearAuthorizationCodesList(): void;
    getAuthorizationCodesList(): Array<AuthorizationCode>;
    setAuthorizationCodesList(value: Array<AuthorizationCode>): void;
    addAuthorizationCodes(value?: AuthorizationCode, index?: number): AuthorizationCode;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AuthorizationCodeList.AsObject;
    static toObject(includeInstance: boolean, msg: AuthorizationCodeList): AuthorizationCodeList.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AuthorizationCodeList, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AuthorizationCodeList;
    static deserializeBinaryFromReader(message: AuthorizationCodeList, reader: jspb.BinaryReader): AuthorizationCodeList;
}

export namespace AuthorizationCodeList {
    export type AsObject = {
        authorizationCodesList: Array<AuthorizationCode.AsObject>,
    }
}

export class Client extends jspb.Message { 
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
    toObject(includeInstance?: boolean): Client.AsObject;
    static toObject(includeInstance: boolean, msg: Client): Client.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Client, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Client;
    static deserializeBinaryFromReader(message: Client, reader: jspb.BinaryReader): Client;
}

export namespace Client {
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

export class ClientList extends jspb.Message { 
    clearClientsList(): void;
    getClientsList(): Array<Client>;
    setClientsList(value: Array<Client>): void;
    addClients(value?: Client, index?: number): Client;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ClientList.AsObject;
    static toObject(includeInstance: boolean, msg: ClientList): ClientList.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ClientList, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ClientList;
    static deserializeBinaryFromReader(message: ClientList, reader: jspb.BinaryReader): ClientList;
}

export namespace ClientList {
    export type AsObject = {
        clientsList: Array<Client.AsObject>,
    }
}

export class RefreshToken extends jspb.Message { 
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

    getCreatedAt(): string;
    setCreatedAt(value: string): void;

    getUpdatedAt(): string;
    setUpdatedAt(value: string): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RefreshToken.AsObject;
    static toObject(includeInstance: boolean, msg: RefreshToken): RefreshToken.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RefreshToken, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RefreshToken;
    static deserializeBinaryFromReader(message: RefreshToken, reader: jspb.BinaryReader): RefreshToken;
}

export namespace RefreshToken {
    export type AsObject = {
        id: string,
        clientId: string,
        userId: string,
        token: string,
        scope: string,
        createdAt: string,
        updatedAt: string,
    }
}

export class RefreshTokenList extends jspb.Message { 
    clearRefreshTokensList(): void;
    getRefreshTokensList(): Array<RefreshToken>;
    setRefreshTokensList(value: Array<RefreshToken>): void;
    addRefreshTokens(value?: RefreshToken, index?: number): RefreshToken;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RefreshTokenList.AsObject;
    static toObject(includeInstance: boolean, msg: RefreshTokenList): RefreshTokenList.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RefreshTokenList, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RefreshTokenList;
    static deserializeBinaryFromReader(message: RefreshTokenList, reader: jspb.BinaryReader): RefreshTokenList;
}

export namespace RefreshTokenList {
    export type AsObject = {
        refreshTokensList: Array<RefreshToken.AsObject>,
    }
}

export class User extends jspb.Message { 
    getId(): string;
    setId(value: string): void;

    getUsername(): string;
    setUsername(value: string): void;

    getPassword(): string;
    setPassword(value: string): void;

    getEmail(): string;
    setEmail(value: string): void;

    getFirstName(): string;
    setFirstName(value: string): void;

    getLastName(): string;
    setLastName(value: string): void;

    getCreatedAt(): string;
    setCreatedAt(value: string): void;

    getUpdatedAt(): string;
    setUpdatedAt(value: string): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): User.AsObject;
    static toObject(includeInstance: boolean, msg: User): User.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: User, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): User;
    static deserializeBinaryFromReader(message: User, reader: jspb.BinaryReader): User;
}

export namespace User {
    export type AsObject = {
        id: string,
        username: string,
        password: string,
        email: string,
        firstName: string,
        lastName: string,
        createdAt: string,
        updatedAt: string,
    }
}

export class UserList extends jspb.Message { 
    clearUsersList(): void;
    getUsersList(): Array<User>;
    setUsersList(value: Array<User>): void;
    addUsers(value?: User, index?: number): User;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UserList.AsObject;
    static toObject(includeInstance: boolean, msg: UserList): UserList.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UserList, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UserList;
    static deserializeBinaryFromReader(message: UserList, reader: jspb.BinaryReader): UserList;
}

export namespace UserList {
    export type AsObject = {
        usersList: Array<User.AsObject>,
    }
}
