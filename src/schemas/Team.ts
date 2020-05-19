import { Schema, model, Document } from 'mongoose'

export interface TeamInterface extends Document {
    name:string
    members:string[]
    scheduledMentoring?:string[]
}

const TeamSchema = new Schema({
    name:{type:String, required: true, unique:true},
    members:[{type:String, _id:false}],
    scheduledMentoring:[{type:String, _id:false}]
},{timestamps:true})

export default model <TeamInterface>('Team', TeamSchema)