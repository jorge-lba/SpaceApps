import { Request, Response } from 'express'

import Mentoring from '../schemas/Mentoring'
import type {TypeResponse} from '../types/index'

class MentoringController {
    public async index (request:Request, response:Response):Promise<Response>{
        let contentResponse:TypeResponse
        try {
            
            const mentoring = await Mentoring.find()
            const totalMentoring = mentoring.length

            contentResponse = {
                message: `Total de mentorias marcadas: ${totalMentoring}`,
                mentoringList: mentoring
            }

            return response.status(200).json(contentResponse)

        } catch (error) {
            contentResponse = {
                message: 'Ops! Não foi possivel listar as mmentorias, tente novamente.',
                error
            }

            return response.status(400).json(contentResponse)
        }
    }

    public async getById(request:Request, response:Response):Promise<Response>{
        let contentResponse:TypeResponse

        try {
            
            const mentoringId = request.params.id

            const mentoring = await Mentoring.findById(mentoringId)
            const mentoringNew = mentoring?.toObject()

            contentResponse = {
                message:'Mentoria atualizada com sucesso.',
                mentoring: mentoringNew
            }

            return response.status(200).json(contentResponse)

        } catch (error) {
           contentResponse = {
               message: 'Ops! Não foi possivel atualizar a mentoria, tente novamente.',
               error
           } 

           return response.status(400).json(contentResponse)
        } 
    }

    public async store (request:Request, response:Response):Promise<Response>{
        let contentResponse: TypeResponse

        try {
            
            const {mentor, team, date, area}:{mentor:string, team:string, date:Date, area:string} = request.body

            const mentoring = await Mentoring.create({
                mentor,
                team,
                date,
                area,
                state: 'Marked'
            })

            contentResponse = {
                message: 'Mentoria cadastrada com sucesso.',
                mentoring
            }

            return response.status(200).json(contentResponse)
            
        } catch (error) {
            contentResponse = {
                message: 'Ops! Não foi possivel marcar a mentoria, tente novamente.',
                error
            }
            
            return response.status(400).json(contentResponse)
        }
    }

    public async update (request:Request, response:Response):Promise<Response>{
        let contentResponse:TypeResponse

        try {
            
            const mentoringId = request.params.id
            const data = request.body
            const validKeys = ['mentor', 'team', 'date', 'area', 'state', 'feedbackMentor']

            const mentoring = await Mentoring.findById(mentoringId)
            const mentoringNew = mentoring?.toObject()

            validKeys.forEach(item => {
                if(data[item])mentoringNew[item] = data[item]
            })

            await Mentoring.updateOne({_id:mentoringId}, mentoringNew)

            contentResponse = {
                message:'Mentoria atualizada com sucesso.',
                mentoring: mentoringNew
            }

            return response.status(200).json(contentResponse)

        } catch (error) {
           contentResponse = {
               message: 'Ops! Não foi possivel atualizar a mentoria, tente novamente.',
               error
           } 

           return response.status(400).json(contentResponse)
        }
    }
}

export default new MentoringController()