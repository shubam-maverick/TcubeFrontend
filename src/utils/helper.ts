import axios from "axios";
import {BASE_URL, PROFILE, CHAT_HISTORY, CONNECTIONS} from "./CONSTANTS.ts";

export async function getProfileData() : Promise<ProfileInfo>{
    let request: ApiRequest = {
        url: PROFILE,
        METHOD: API_METHOD.GET
    }

    return makeApiCall(request) as unknown as ProfileInfo;
}

export function getConnections(){
    let url = CONNECTIONS;
}

export function getChatHistory(){
    let url = CHAT_HISTORY;
}

export type ProfileInfo = {
    username: string,
    status?: string,
    createdAt?: number,
    profileImage?: string
}

type ApiRequest = {
    METHOD: API_METHOD,
    url: string,
    body?: object,
    queryParams?: object
}

enum API_METHOD {
    GET, POST
}

async function makeApiCall(apiRequest: ApiRequest): Promise<any>{

    const URL = BASE_URL+apiRequest.url;

    switch(apiRequest.METHOD){

        case API_METHOD.GET:
            
            const response = await fetch(URL);
            const data = await response.json();
            console.log("Data: ", data);
            return data;

        case API_METHOD.POST:

             
    }
}
