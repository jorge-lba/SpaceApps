import { Schema, model, Document } from 'mongoose'

interface UserInterface extends Document{
  email?: string
  fristName?: string
  lastName?: string
  fullName(): string
}

const UserSchema = new Schema({
  email: String,
  fristName: String,
  lastName: String
}, {
  timestamps: true
})

UserSchema.methods.fullName = function (): string {
  return `${this.fristName} ${this.lastName}`
}

export default model <UserInterface>('User', UserSchema)