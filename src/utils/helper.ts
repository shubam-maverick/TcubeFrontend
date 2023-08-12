import {BASE_URL, PROFILE, CHAT_HISTORY, CONNECTIONS} from "./CONSTANTS";

function getProfileData(){
    let url = PROFILE;
}

function getConnections(){
    let url = CONNECTIONS;
}

function getChatHistory(){
    let url = CHAT_HISTORY;
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

function makeApiCall(apiRequest: ApiRequest){

}