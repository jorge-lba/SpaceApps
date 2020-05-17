import { Request, Response } from 'express'

import User from '../schemas/User'
import type {TypeResponse} from '../types/index'

class UserController {

  public async index (request: Request, response: Response): Promise<Response> {
    let contentResponse: TypeResponse
    try {
      const users = await User.find()
      const totalUsers = users.length
      
      contentResponse = {
        message: `Total de usuários: ${totalUsers}`,
        userList: users
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

      const user = await User.create({ name, email, cellPhone })

      contentResponse = {
        message: 'Usuário cadastrado com sucesso.',
        user:{
          name: user.name,
          email: user.email
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
      
      const userId = request.params.id
      const data = request.body
      const validKeys = ['email', 'name', 'discordName', 'discordUserId', 'cellPhone']
      
      const user = await User.findById(userId)
      const userNew = user?.toObject()
      validKeys.forEach(item => {
        if(data[item])userNew[item] = data[item]
      })
      
      await User.updateOne({_id: userId}, userNew)
     
      contentResponse = {
        message: 'Usuário atualizado com sucesso.',
        user:{
          name: userNew.name,
          email: userNew.email,
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
      const userId = request.params.id
      const user = await User.findByIdAndDelete(userId)

      const userDeleted = user?.toObject()

      contentResponse = {
        message: 'Usuário cadastrado com sucesso.',
        user:{
          name: userDeleted.name,
          email: userDeleted.email
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

export default new UserController()
