import * as dotenv from 'dotenv'
import mongoose from 'mongoose'

dotenv.config()
const url:string = String(process.env.URL_DATABASE)
console.log(url)
function database (): void {
  mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
}

export default database