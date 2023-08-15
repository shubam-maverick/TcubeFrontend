export type ProfileInfo = {
    username: string,
    status?: string,
    createdAt?: number,
    profileImage?: string
}

export type ConnectionInfo = {}

export type ChatHistory = {}


export type ApiResponse = ProfileInfo | ConnectionInfo | ChatHistory;