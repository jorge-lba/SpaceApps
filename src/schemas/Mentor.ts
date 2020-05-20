import { Schema, model, Document } from 'mongoose'

export interface MentorInterface extends Document{
  email: string
  name: string
  discordName?: string
  discordUserId?: number
  cellPhone?: string
}

const MentorSchema = new Schema({
  email: { type: String, required: true, unique: true },
  name:{ type: String, brequired: true },
  discordName: { type:String },
  discordUserId: {type:Number },
  cellPhone:{ type:String },
  areas:[{ type:String }],
  mentoringSchedule:[{
    area: {type:String, required:true},
    dates: [{ 
      date: {type:Date, required:true},
      state: {type:String, default: 'Open'}
    }]
  }],
  markedMentoringID:[{ type:String }]

}, {
  timestamps: true
})

export default model <MentorInterface>('Mentor', MentorSchema)