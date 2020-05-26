import { Schema, model, Document } from 'mongoose'

export interface UserInterface extends Document{
  email: string
  name: string
  discordName?: string
  discordUserId?: number
  cellPhone?: string
}

const UserSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true
  },
  name:{
    type: String,
    required: true,
  },
  discordName: {
    type: String
  },
  discordUserId: {
    type: Number,
    // unique: true
  },
  cellPhone:{
    type: String
  },
  team:{
    type: String
  }
}, {
  timestamps: true
})

export default model <UserInterface>('User', UserSchema)