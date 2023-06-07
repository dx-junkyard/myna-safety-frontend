/* tslint:disable */
/* eslint-disable */
/**
 * FastAPI
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import type { Configuration } from './configuration';
import type { AxiosPromise, AxiosInstance, AxiosRequestConfig } from 'axios';
import globalAxios from 'axios';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from './common';
import type { RequestArgs } from './base';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, BaseAPI, RequiredError } from './base';

/**
 * ユーザ通知リクエストに含める項目
 * @export
 * @interface EntryUserReportRequest
 */
export interface EntryUserReportRequest {
    /**
     * UserID、LINEのIDなど？
     * @type {string}
     * @memberof EntryUserReportRequest
     */
    'user_id': string;
    /**
     * 
     * @type {Location1}
     * @memberof EntryUserReportRequest
     */
    'location': Location1;
    /**
     * 報告内容、選択式にする？
     * @type {string}
     * @memberof EntryUserReportRequest
     */
    'content'?: string;
}
/**
 * 
 * @export
 * @interface EntryUserReportResponse
 */
export interface EntryUserReportResponse {
    /**
     * 発行された申告ID
     * @type {string}
     * @memberof EntryUserReportResponse
     */
    'user_report_id': string;
}
/**
 * 
 * @export
 * @interface HTTPValidationError
 */
export interface HTTPValidationError {
    /**
     * 
     * @type {Array<ValidationError>}
     * @memberof HTTPValidationError
     */
    'detail'?: Array<ValidationError>;
}
/**
 * 
 * @export
 * @interface ListUserReportResponse
 */
export interface ListUserReportResponse {
    /**
     * ユーザが申告した情報一覧
     * @type {Array<UserReportModel>}
     * @memberof ListUserReportResponse
     */
    'user_reports'?: Array<UserReportModel>;
}
/**
 * 
 * @export
 * @interface Location
 */
export interface Location {
    /**
     * 経度
     * @type {number}
     * @memberof Location
     */
    'longitude': number;
    /**
     * 緯度
     * @type {number}
     * @memberof Location
     */
    'latitude': number;
}
/**
 * 申告者の位置情報
 * @export
 * @interface Location1
 */
export interface Location1 {
    /**
     * 経度
     * @type {number}
     * @memberof Location1
     */
    'longitude': number;
    /**
     * 緯度
     * @type {number}
     * @memberof Location1
     */
    'latitude': number;
}
/**
 * 
 * @export
 * @interface Location2Inner
 */
export interface Location2Inner {
}
/**
 * An enumeration.
 * @export
 * @enum {string}
 */

export const ReportLevel = {
    High: 'High',
    Middle: 'Middle',
    Low: 'Low'
} as const;

export type ReportLevel = typeof ReportLevel[keyof typeof ReportLevel];


/**
 * An enumeration.
 * @export
 * @enum {string}
 */

export const ReportStatus = {
    NoAssign: 'NO ASSIGN',
    InProgress: 'IN PROGRESS',
    Complete: 'COMPLETE',
    Pending: 'PENDING'
} as const;

export type ReportStatus = typeof ReportStatus[keyof typeof ReportStatus];


/**
 * 
 * @export
 * @interface UpdateUserReportRequest
 */
export interface UpdateUserReportRequest {
    /**
     * 
     * @type {Location1}
     * @memberof UpdateUserReportRequest
     */
    'location': Location1;
    /**
     * 報告内容、選択式にする？
     * @type {string}
     * @memberof UpdateUserReportRequest
     */
    'content': string;
    /**
     * 
     * @type {ReportLevel}
     * @memberof UpdateUserReportRequest
     */
    'report_level': ReportLevel;
    /**
     * 
     * @type {ReportStatus}
     * @memberof UpdateUserReportRequest
     */
    'report_status': ReportStatus;
}


/**
 * 
 * @export
 * @interface UpdateUserReportResponse
 */
export interface UpdateUserReportResponse {
    /**
     * 発行された申告ID
     * @type {string}
     * @memberof UpdateUserReportResponse
     */
    'user_report_id': string;
}
/**
 * 
 * @export
 * @interface UserReportModel
 */
export interface UserReportModel {
    /**
     * UserID、LINEのIDなど？
     * @type {string}
     * @memberof UserReportModel
     */
    'user_id': string;
    /**
     * 申告ID
     * @type {string}
     * @memberof UserReportModel
     */
    'user_report_id': string;
    /**
     * 
     * @type {Location1}
     * @memberof UserReportModel
     */
    'location': Location1;
    /**
     * 報告内容、選択式にする？
     * @type {string}
     * @memberof UserReportModel
     */
    'content': string;
    /**
     * 画像のURL
     * @type {string}
     * @memberof UserReportModel
     */
    'image_url'?: string;
    /**
     * 
     * @type {ReportLevel}
     * @memberof UserReportModel
     */
    'report_level': ReportLevel;
    /**
     * 
     * @type {ReportStatus}
     * @memberof UserReportModel
     */
    'report_status': ReportStatus;
    /**
     * 作成時間
     * @type {string}
     * @memberof UserReportModel
     */
    'created_at'?: string;
    /**
     * 最終更新時間
     * @type {string}
     * @memberof UserReportModel
     */
    'updated_at'?: string;
}


/**
 * 
 * @export
 * @interface ValidationError
 */
export interface ValidationError {
    /**
     * 
     * @type {Array<Location2Inner>}
     * @memberof ValidationError
     */
    'loc': Array<Location2Inner>;
    /**
     * 
     * @type {string}
     * @memberof ValidationError
     */
    'msg': string;
    /**
     * 
     * @type {string}
     * @memberof ValidationError
     */
    'type': string;
}

/**
 * LineBotApi - axios parameter creator
 * @export
 */
export const LineBotApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Line Bot用のエンドポイントです
         * @summary Callback
         * @param {any} [xLineSignature] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        callbackCallbackPost: async (xLineSignature?: any, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/callback`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (xLineSignature != null) {
                localVarHeaderParameter['x-line-signature'] = typeof xLineSignature === 'string' 
                    ? xLineSignature 
                    : JSON.stringify(xLineSignature);
            }


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * LineBotApi - functional programming interface
 * @export
 */
export const LineBotApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = LineBotApiAxiosParamCreator(configuration)
    return {
        /**
         * Line Bot用のエンドポイントです
         * @summary Callback
         * @param {any} [xLineSignature] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async callbackCallbackPost(xLineSignature?: any, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<any>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.callbackCallbackPost(xLineSignature, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * LineBotApi - factory interface
 * @export
 */
export const LineBotApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = LineBotApiFp(configuration)
    return {
        /**
         * Line Bot用のエンドポイントです
         * @summary Callback
         * @param {any} [xLineSignature] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        callbackCallbackPost(xLineSignature?: any, options?: any): AxiosPromise<any> {
            return localVarFp.callbackCallbackPost(xLineSignature, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * LineBotApi - object-oriented interface
 * @export
 * @class LineBotApi
 * @extends {BaseAPI}
 */
export class LineBotApi extends BaseAPI {
    /**
     * Line Bot用のエンドポイントです
     * @summary Callback
     * @param {any} [xLineSignature] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof LineBotApi
     */
    public callbackCallbackPost(xLineSignature?: any, options?: AxiosRequestConfig) {
        return LineBotApiFp(this.configuration).callbackCallbackPost(xLineSignature, options).then((request) => request(this.axios, this.basePath));
    }
}


/**
 * ReportApi - axios parameter creator
 * @export
 */
export const ReportApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary  Dummy Post
         * @param {string} userReportId 
         * @param {EntryUserReportRequest} entryUserReportRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        dummyPostReportDummyAGet: async (userReportId: string, entryUserReportRequest: EntryUserReportRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'userReportId' is not null or undefined
            assertParamExists('dummyPostReportDummyAGet', 'userReportId', userReportId)
            // verify required parameter 'entryUserReportRequest' is not null or undefined
            assertParamExists('dummyPostReportDummyAGet', 'entryUserReportRequest', entryUserReportRequest)
            const localVarPath = `/report/_dummy_a`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (userReportId !== undefined) {
                localVarQueryParameter['user_report_id'] = userReportId;
            }


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(entryUserReportRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary  Dummy Put
         * @param {string} userReportId 
         * @param {UpdateUserReportRequest} updateUserReportRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        dummyPutReportDummyBGet: async (userReportId: string, updateUserReportRequest: UpdateUserReportRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'userReportId' is not null or undefined
            assertParamExists('dummyPutReportDummyBGet', 'userReportId', userReportId)
            // verify required parameter 'updateUserReportRequest' is not null or undefined
            assertParamExists('dummyPutReportDummyBGet', 'updateUserReportRequest', updateUserReportRequest)
            const localVarPath = `/report/_dummy_b`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (userReportId !== undefined) {
                localVarQueryParameter['user_report_id'] = userReportId;
            }


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(updateUserReportRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * ユースケース2: 申告内容の一覧を取得する
         * @summary Get User Reports
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getUserReportsReportGet: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/report`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * ユースケース1: ユーザがHelpを申請する
         * @summary Post User Report
         * @param {EntryUserReportRequest} request 
         * @param {File} [file] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        postUserReportReportPost: async (request: EntryUserReportRequest, file?: File, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'request' is not null or undefined
            assertParamExists('postUserReportReportPost', 'request', request)
            const localVarPath = `/report`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            const localVarFormParams = new ((configuration && configuration.formDataCtor) || FormData)();


            if (request !== undefined) { 
                localVarFormParams.append('request', new Blob([JSON.stringify(request)], { type: "application/json", }));
            }
    
            if (file !== undefined) { 
                localVarFormParams.append('file', file as any);
            }
    
    
            localVarHeaderParameter['Content-Type'] = 'multipart/form-data';
    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = localVarFormParams;

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * ユースケース3: ユーザがヘルプ情報を更新する
         * @summary Put User Report
         * @param {string} userReportId 
         * @param {UpdateUserReportRequest} request 
         * @param {File} [file] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        putUserReportReportUserReportIdPut: async (userReportId: string, request: UpdateUserReportRequest, file?: File, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'userReportId' is not null or undefined
            assertParamExists('putUserReportReportUserReportIdPut', 'userReportId', userReportId)
            // verify required parameter 'request' is not null or undefined
            assertParamExists('putUserReportReportUserReportIdPut', 'request', request)
            const localVarPath = `/report/{user_report_id}`
                .replace(`{${"user_report_id"}}`, encodeURIComponent(String(userReportId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'PUT', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            const localVarFormParams = new ((configuration && configuration.formDataCtor) || FormData)();


            if (request !== undefined) { 
                localVarFormParams.append('request', new Blob([JSON.stringify(request)], { type: "application/json", }));
            }
    
            if (file !== undefined) { 
                localVarFormParams.append('file', file as any);
            }
    
    
            localVarHeaderParameter['Content-Type'] = 'multipart/form-data';
    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = localVarFormParams;

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * ReportApi - functional programming interface
 * @export
 */
export const ReportApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = ReportApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @summary  Dummy Post
         * @param {string} userReportId 
         * @param {EntryUserReportRequest} entryUserReportRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async dummyPostReportDummyAGet(userReportId: string, entryUserReportRequest: EntryUserReportRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<any>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.dummyPostReportDummyAGet(userReportId, entryUserReportRequest, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary  Dummy Put
         * @param {string} userReportId 
         * @param {UpdateUserReportRequest} updateUserReportRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async dummyPutReportDummyBGet(userReportId: string, updateUserReportRequest: UpdateUserReportRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<any>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.dummyPutReportDummyBGet(userReportId, updateUserReportRequest, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * ユースケース2: 申告内容の一覧を取得する
         * @summary Get User Reports
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getUserReportsReportGet(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ListUserReportResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getUserReportsReportGet(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * ユースケース1: ユーザがHelpを申請する
         * @summary Post User Report
         * @param {EntryUserReportRequest} request 
         * @param {File} [file] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async postUserReportReportPost(request: EntryUserReportRequest, file?: File, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<EntryUserReportResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.postUserReportReportPost(request, file, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * ユースケース3: ユーザがヘルプ情報を更新する
         * @summary Put User Report
         * @param {string} userReportId 
         * @param {UpdateUserReportRequest} request 
         * @param {File} [file] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async putUserReportReportUserReportIdPut(userReportId: string, request: UpdateUserReportRequest, file?: File, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<UpdateUserReportResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.putUserReportReportUserReportIdPut(userReportId, request, file, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * ReportApi - factory interface
 * @export
 */
export const ReportApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = ReportApiFp(configuration)
    return {
        /**
         * 
         * @summary  Dummy Post
         * @param {string} userReportId 
         * @param {EntryUserReportRequest} entryUserReportRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        dummyPostReportDummyAGet(userReportId: string, entryUserReportRequest: EntryUserReportRequest, options?: any): AxiosPromise<any> {
            return localVarFp.dummyPostReportDummyAGet(userReportId, entryUserReportRequest, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary  Dummy Put
         * @param {string} userReportId 
         * @param {UpdateUserReportRequest} updateUserReportRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        dummyPutReportDummyBGet(userReportId: string, updateUserReportRequest: UpdateUserReportRequest, options?: any): AxiosPromise<any> {
            return localVarFp.dummyPutReportDummyBGet(userReportId, updateUserReportRequest, options).then((request) => request(axios, basePath));
        },
        /**
         * ユースケース2: 申告内容の一覧を取得する
         * @summary Get User Reports
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getUserReportsReportGet(options?: any): AxiosPromise<ListUserReportResponse> {
            return localVarFp.getUserReportsReportGet(options).then((request) => request(axios, basePath));
        },
        /**
         * ユースケース1: ユーザがHelpを申請する
         * @summary Post User Report
         * @param {EntryUserReportRequest} request 
         * @param {File} [file] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        postUserReportReportPost(request: EntryUserReportRequest, file?: File, options?: any): AxiosPromise<EntryUserReportResponse> {
            return localVarFp.postUserReportReportPost(request, file, options).then((request) => request(axios, basePath));
        },
        /**
         * ユースケース3: ユーザがヘルプ情報を更新する
         * @summary Put User Report
         * @param {string} userReportId 
         * @param {UpdateUserReportRequest} request 
         * @param {File} [file] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        putUserReportReportUserReportIdPut(userReportId: string, request: UpdateUserReportRequest, file?: File, options?: any): AxiosPromise<UpdateUserReportResponse> {
            return localVarFp.putUserReportReportUserReportIdPut(userReportId, request, file, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * ReportApi - object-oriented interface
 * @export
 * @class ReportApi
 * @extends {BaseAPI}
 */
export class ReportApi extends BaseAPI {
    /**
     * 
     * @summary  Dummy Post
     * @param {string} userReportId 
     * @param {EntryUserReportRequest} entryUserReportRequest 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ReportApi
     */
    public dummyPostReportDummyAGet(userReportId: string, entryUserReportRequest: EntryUserReportRequest, options?: AxiosRequestConfig) {
        return ReportApiFp(this.configuration).dummyPostReportDummyAGet(userReportId, entryUserReportRequest, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary  Dummy Put
     * @param {string} userReportId 
     * @param {UpdateUserReportRequest} updateUserReportRequest 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ReportApi
     */
    public dummyPutReportDummyBGet(userReportId: string, updateUserReportRequest: UpdateUserReportRequest, options?: AxiosRequestConfig) {
        return ReportApiFp(this.configuration).dummyPutReportDummyBGet(userReportId, updateUserReportRequest, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * ユースケース2: 申告内容の一覧を取得する
     * @summary Get User Reports
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ReportApi
     */
    public getUserReportsReportGet(options?: AxiosRequestConfig) {
        return ReportApiFp(this.configuration).getUserReportsReportGet(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * ユースケース1: ユーザがHelpを申請する
     * @summary Post User Report
     * @param {EntryUserReportRequest} request 
     * @param {File} [file] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ReportApi
     */
    public postUserReportReportPost(request: EntryUserReportRequest, file?: File, options?: AxiosRequestConfig) {
        return ReportApiFp(this.configuration).postUserReportReportPost(request, file, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * ユースケース3: ユーザがヘルプ情報を更新する
     * @summary Put User Report
     * @param {string} userReportId 
     * @param {UpdateUserReportRequest} request 
     * @param {File} [file] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ReportApi
     */
    public putUserReportReportUserReportIdPut(userReportId: string, request: UpdateUserReportRequest, file?: File, options?: AxiosRequestConfig) {
        return ReportApiFp(this.configuration).putUserReportReportUserReportIdPut(userReportId, request, file, options).then((request) => request(this.axios, this.basePath));
    }
}


