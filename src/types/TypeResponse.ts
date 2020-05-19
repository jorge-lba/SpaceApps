type TypeResponse = {
    message: string
    user?:{
        name:string
        email:string
        cellPhone?:string
        discordName?: string
        discordUserId?: number
    }
    userList?:[]
    error?: string
}


export type {TypeResponse}