import { Schema, model, Document } from 'mongoose'

export interface MentoringInterface extends Document {
    mentor:string
    team:string
    date:Date
    area:string
    state:string
    feedbackMentor?:string
}

const MentoringSchema = new Schema({
    mentor:{type:String, required:true},
    team:{type:String, required:true},
    date:{type:Date, required:true},
    area:{type:String, required:true},
    feedbackMentor:{type:String}
})

export default model <MentoringInterface>('Mentoring', MentoringSchema)