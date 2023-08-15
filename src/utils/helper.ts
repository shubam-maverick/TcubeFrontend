import {CHAT_HISTORY, CONNECTIONS, PROFILE, SIGNUP} from "./CONSTANTS";
import {ChatHistory, ConnectionInfo, ProfileInfo} from "./data";
import {API_METHOD, ApiRequest, makeApiCall} from "./apiHelper";

export async function getProfileData(): Promise<ProfileInfo> {
    let request: ApiRequest = {
        url: PROFILE,
        METHOD: API_METHOD.GET
    }

    return await makeApiCall(request) as Promise<ProfileInfo>;
}

export async function getConnections(): Promise<ConnectionInfo> {
    let request: ApiRequest = {
        url: CONNECTIONS,
        METHOD: API_METHOD.GET
    }
    return await makeApiCall(request)
}

export async function getChatHistory(): Promise<ChatHistory> {
    let request: ApiRequest = {
        url: CHAT_HISTORY,
        METHOD: API_METHOD.GET
    }

    return await makeApiCall(request)
}

export async function signUp(username:string, password:string){
    console.log("got it", username , password);
    let request : ApiRequest = {
        url : SIGNUP,
        METHOD: API_METHOD.POST,
        body : {email : username, password : password}
    }
    makeApiCall(request);
}

