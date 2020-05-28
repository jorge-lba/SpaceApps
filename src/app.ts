import * as dotenv from 'dotenv'
import express from 'express' 
import cors from 'cors'

import DataBase from './database/connection'
import Routes from './routes'
dotenv.config()

class App {
    public express: express.Application
    
    public constructor(){
        this.express = express()

        this.middlewares()
        this.database()
        this.routes()
    }

    private middlewares():void{
        this.express.use(express.json())
        this.express.use(cors({origin: 'https://spaceapps-discord-bot.herokuapp.com/'}))
    }

    private database:() => void = DataBase

    private routes():void{
        this.express.use(Routes)
    }


}

export default new App().express