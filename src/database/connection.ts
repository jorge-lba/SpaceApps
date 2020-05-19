import mongoose from 'mongoose'
import * as env from '../../env'

function database (): void {
  mongoose.connect(env.URL_DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
}

export default database