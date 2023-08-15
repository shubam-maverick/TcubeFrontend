import {BASE_URL} from "./CONSTANTS";
import {ApiResponse} from "./data";

export type ApiRequest = {
    METHOD: API_METHOD,
    url: string,
    body?: object,
    queryParams?: object
}

export enum API_METHOD {
    GET, POST
}

export async function makeApiCall(apiRequest: ApiRequest): Promise<ApiResponse> {

    const URL = BASE_URL + apiRequest.url;

    switch (apiRequest.METHOD) {

        case API_METHOD.GET:

            const response = await fetch(URL);
            const data = await response.json();
            console.log("Data: ", data);
            return data;

        case API_METHOD.POST:
        default:
            return {}

    }
}
