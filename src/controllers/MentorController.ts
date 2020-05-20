import { Request, Response } from 'express'

import Mentor from '../schemas/Mentor'
import type {TypeResponse} from '../types/index'

class MentorController {

  public async index (request: Request, response: Response): Promise<Response> {
    let contentResponse: TypeResponse
    try {
      const mentors = await Mentor.find()
      const totalMentors = mentors.length
      
      contentResponse = {
        message: `Total de usuários: ${totalMentors}`,
        userList: mentors
      }

      return response.status(200).json(contentResponse)
      
    } catch (error) {
      contentResponse = {
        message: 'Ops! Ouve um erro ao listar os usuários, tente novamente.',
        error
      }
      return response.status(400).json(contentResponse)
    }
  }

  public async store (request: Request, response: Response): Promise<Response> {
    let contentResponse: TypeResponse
    
    try {
      const {name, email, cellPhone}:
      { name:string, email:string, cellPhone:string|undefined } = request.body

      const mentor = await Mentor.create({ name, email, cellPhone })

      contentResponse = {
        message: 'Usuário cadastrado com sucesso.',
        user:{
          name: mentor.name,
          email: mentor.email
        }
      }

      return response.status(200).json(contentResponse)
    } catch (error) {
      contentResponse = {
        message: 'Ops! Não conseguimos cadastrar o usuário, tente novamente.',
        error
      }

      return response.status(400).json(contentResponse)
    }
    
  }

  public async update (request:Request, response:Response):Promise<Response>{

    let contentResponse: TypeResponse
   
    try {
      
      const mentorId = request.params.id
      const data = request.body
      const validKeys = ['email', 'name', 'discordName', 'discordUserId', 'cellPhone', 'areas', 'mentoringSchedule', 'markedMentoringID']
      
      const mentor = await Mentor.findById(mentorId)
      const mentorNew = mentor?.toObject()
      validKeys.forEach(item => {
        if(data[item])mentorNew[item] = data[item]
      })
      
      await Mentor.updateOne({_id: mentorId}, mentorNew)
     
      contentResponse = {
        message: 'Usuário atualizado com sucesso.',
        user:{
          name: mentorNew.name,
          email: mentorNew.email,
        }
      }

      return response.status(200).json(contentResponse)
    } catch (error) {
      contentResponse = {
        message: 'Ops! Não foi possivel atualizar o usuário, tente novamente',
        error
      }

      return response.status(400).json(contentResponse)
    }

  }

  public async delete (request:Request, response:Response): Promise<Response>{
    let contentResponse: TypeResponse
    
    try {
      const mentorId = request.params.id
      const mentor = await Mentor.findByIdAndDelete(mentorId)

      const mentorDeleted = mentor?.toObject()

      contentResponse = {
        message: 'Usuário cadastrado com sucesso.',
        user:{
          name: mentorDeleted.name,
          email: mentorDeleted.email
        }
      }

      return response.status(200).json(contentResponse)
    } catch (error) {
      contentResponse = {
        message: 'Ops! Não conseguimos cadastrar o usuário, tente novamente.',
        error
      }

      return response.status(400).json(contentResponse)
    }
  }

}

export default new MentorController()
