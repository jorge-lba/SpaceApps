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
    }|null
    mentoring?:{
        mentor:string
        team:string
        date:Date
        area:string
        state?:string
        feedbackMentor?:string
    }
    userList?:{}[]
    error?: string
    teamList?:{}[]
    mentoringList?:{}[]
}


type UserDefault = {
    name:string
    email:string
    cellPhone?:string
    discordName?: string
    discordUserId?: number
}

export type { TypeResponse, UserDefault }