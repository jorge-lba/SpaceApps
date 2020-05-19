type TypeResponse = {
    message: string
    user?:{
        name:string
        email:string
        cellPhone?:string
        discordName?: string
        discordUserId?: number
    }
    team?:{
        name:string
        members:string[],
        scheduledMentoring?:string[]
    }
    userList?:{}[]
    error?: string
    teamList?:{}[]
}


type UserDefault = {
    name:string
    email:string
    cellPhone?:string
    discordName?: string
    discordUserId?: number
}

export type { TypeResponse, UserDefault }