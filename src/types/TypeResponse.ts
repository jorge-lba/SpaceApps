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
    teamList?:[],
    team?:any
}


export type {TypeResponse}