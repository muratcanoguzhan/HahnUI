/* tslint:disable */
/* eslint-disable */
//----------------------
// <auto-generated>
//     Generated using the NSwag toolchain v13.9.4.0 (NJsonSchema v10.3.1.0 (Newtonsoft.Json v12.0.0.0)) (http://NSwag.org)
// </auto-generated>
//----------------------
// ReSharper disable InconsistentNaming

import { inject } from 'aurelia-framework';
import { HttpClient, RequestInit } from 'aurelia-fetch-client';
import { HttpClient as asd } from 'aurelia-http-client';

@inject(String, HttpClient)
export class Client {
    private http: { fetch(url: RequestInfo, init?: RequestInit): Promise<Response> };
    private baseUrl: string;
    protected jsonParseReviver: ((key: string, value: any) => any) | undefined = undefined;

    constructor(baseUrl?: string, http?: { fetch(url: RequestInfo, init?: RequestInit): Promise<Response> }) {
        this.http = http ? http : <any>window;
        this.baseUrl = "https://localhost:44307";
    }

    /**
     * @return Success
     */
    getAll(): Promise<ApplicantDto[]> {
        let url_ = this.baseUrl + "/api/Applicants";
        url_ = url_.replace(/[?&]$/, "");

        let options_ = <RequestInit>{
            method: "GET",
            headers: {
                "Accept": "text/plain"
            }
        };

        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processApplicantsAll(_response);
        });
    }

    protected processApplicantsAll(response: Response): Promise<ApplicantDto[]> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
                let result200: any = null;
                let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
                if (Array.isArray(resultData200)) {
                    result200 = [] as any;
                    for (let item of resultData200)
                        result200!.push(ApplicantDto.fromJS(item));
                }
                return result200;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<ApplicantDto[]>(<any>null);
    }

    /**
     * @param body (optional) 
     * @return Success
     */
    update(body: ApplicantDto | undefined): Promise<void> {
        let url_ = this.baseUrl + "/api/Applicants";
        url_ = url_.replace(/[?&]$/, "");

        const content_ = JSON.stringify(body);

        let options_ = <RequestInit>{
            body: content_,
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            }
        };

        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processApplicants(_response);
        });
    }

    protected processApplicants(response: Response): Promise<void> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 204) {
            return response.text().then((_responseText) => {
                return;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<void>(<any>null);
    }

    /**
     * @param body (optional) 
     * @return Success
     */
    insert(body: ApplicantDto | undefined): Promise<ApplicantDto> {
        let url_ = this.baseUrl + "/api/Applicants";
        url_ = url_.replace(/[?&]$/, "");

        const content_ = JSON.stringify(body);

        let options_ = <RequestInit>{
            body: content_,
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "text/plain"
            }
        };

        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processApplicants2(_response);
        });
    }

    protected processApplicants2(response: Response): Promise<ApplicantDto> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 201) {
            return response.text().then((_responseText) => {
                let result200: any = null;
                let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
                result200 = ApplicantDto.fromJS(resultData200);
                return result200;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<ApplicantDto>(<any>null);
    }

    /**
     * @return Success
     */
    get(id: number): Promise<ApplicantDto> {
        let url_ = this.baseUrl + "/api/Applicants/{id}";
        if (id === undefined || id === null)
            throw new Error("The parameter 'id' must be defined.");
        url_ = url_.replace("{id}", encodeURIComponent("" + id));
        url_ = url_.replace(/[?&]$/, "");

        let options_ = <RequestInit>{
            method: "GET",
            headers: {
                "Accept": "text/plain"
            }
        };

        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processApplicants3(_response);
        });
    }

    protected processApplicants3(response: Response): Promise<ApplicantDto> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
                let result200: any = null;
                let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
                result200 = ApplicantDto.fromJS(resultData200);
                return result200;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<ApplicantDto>(<any>null);
    }

    /**
     * @return Success
     */
    delete(id: number): Promise<void> {
        let url_ = this.baseUrl + "/api/Applicants/{id}";
        if (id === undefined || id === null)
            throw new Error("The parameter 'id' must be defined.");
        url_ = url_.replace("{id}", encodeURIComponent("" + id));
        url_ = url_.replace(/[?&]$/, "");

        let options_ = <RequestInit>{
            method: "DELETE",
            headers: {
            }
        };

        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processApplicants4(_response);
        });
    }

    protected processApplicants4(response: Response): Promise<void> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 204) {
            return response.text().then((_responseText) => {
                return;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<void>(<any>null);
    }

    /**
    * @return Success
    */
    getCountryInfo(countryName: string): Promise<any> {
        let url_ = `https://restcountries.eu/rest/v2/name/${encodeURIComponent(countryName)}`;
        if (countryName === undefined || countryName === null)
            throw new Error("The parameter 'countryName' must be defined.");
        url_ = url_.replace(/[?&]$/, "");

        let url = new URL(url_);

        let urlSearchParams = new URLSearchParams();
        urlSearchParams.append("fullText", true.toString());
        url.search = urlSearchParams.toString();

        let options_ = <RequestInit>{
            method: 'GET'
        };

        return this.http.fetch(url_, options_).then(r => {
            return r.text().then((_responseText) => {
                let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
                return resultData200;
            });
        });
    }
}

export class ApplicantDto implements IApplicantDto {
    id?: number;
    name?: string | undefined;
    familyName?: string | undefined;
    address?: string | undefined;
    countryOfOrigin?: string | undefined;
    emailAdress?: string | undefined;
    age: number;
    hired: boolean;

    constructor(data?: IApplicantDto) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(_data?: any) {
        if (_data) {
            this.id = _data["id"];
            this.name = _data["name"];
            this.familyName = _data["familyName"];
            this.address = _data["address"];
            this.countryOfOrigin = _data["countryOfOrigin"];
            this.emailAdress = _data["emailAdress"];
            this.age = _data["age"];
            this.hired = _data["hired"];
        }
    }

    static fromJS(data: any): ApplicantDto {
        data = typeof data === 'object' ? data : {};
        let result = new ApplicantDto();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["id"] = this.id;
        data["name"] = this.name;
        data["familyName"] = this.familyName;
        data["address"] = this.address;
        data["countryOfOrigin"] = this.countryOfOrigin;
        data["emailAdress"] = this.emailAdress;
        data["age"] = this.age;
        data["hired"] = this.hired;
        return data;
    }
}

export interface IApplicantDto {
    id?: number;
    name?: string | undefined;
    familyName?: string | undefined;
    address?: string | undefined;
    countryOfOrigin?: string | undefined;
    emailAdress?: string | undefined;
    age?: number;
    hired?: boolean;
}

export class ApiException extends Error {
    message: string;
    status: number;
    response: string;
    headers: { [key: string]: any; };
    result: any;

    constructor(message: string, status: number, response: string, headers: { [key: string]: any; }, result: any) {
        super();

        this.message = message;
        this.status = status;
        this.response = response;
        this.headers = headers;
        this.result = result;
    }

    protected isApiException = true;

    static isApiException(obj: any): obj is ApiException {
        return obj.isApiException === true;
    }
}

function throwException(message: string, status: number, response: string, headers: { [key: string]: any; }, result?: any): any {
    if (result !== null && result !== undefined)
        throw result;
    else
        throw new ApiException(message, status, response, headers, null);
}
