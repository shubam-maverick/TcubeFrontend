import {BASE_URL} from "./CONSTANTS";
import {ApiResponse} from "./data";
import axios from "axios";

export type ApiRequest = {
    METHOD: API_METHOD,
    url: string,
    body?: object,
    queryParams?: object
}

export enum API_METHOD {
    GET, POST
}

export async function makeApiCall(apiRequest: ApiRequest): Promise<ApiResponse>  {

    const URL = BASE_URL + apiRequest.url;

    switch (apiRequest.METHOD) {

        case API_METHOD.GET:

            const response = await fetch(URL);
            const data = await response.json();
            console.log("Data: ", data);
            return data;

        case API_METHOD.POST:
            let apiResponse : ApiResponse='';
            axios.post(URL, 
                    apiRequest.body
                )
                .then(function (response) {
                    console.log(response);
                    apiResponse=  response;
                    return apiResponse;
                })
                .catch(function (error) {
                    console.log(error);
                });
                return apiResponse
    }
}
