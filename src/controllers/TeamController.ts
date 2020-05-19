import { Request, Response } from 'express'

import Team from '../schemas/Team'
import type {TypeResponse} from '../types/index'

class TeamController {
  public async index (request:Request, response:Response): Promise<Response>{
    let contentResponse:TypeResponse
    try {
        
      const teams = await Team.find()
      const totalTeams = teams.length

      contentResponse = {
          message: `Total de times cadastrados: ${totalTeams}`,
          teamList: teams
      }

      return response.status(200).json(contentResponse)

    } catch (error) {
        contentResponse = {
          message: 'Ops! Ouve um erro ao listar os times, tente novamente.',
          error
        }
        return response.status(400).json(contentResponse)
    }
  }

  public async store (request:Request, response:Response):Promise<Response>{
    let contentResponse:TypeResponse

    try {
      const {name, members}:{name:string, members:string[]} = request.body

      const team = await Team.create({name, members})

      contentResponse = {
        message:'Time criado com sucesso.',
        team
      }

      return response.status(200).json(contentResponse)
    } catch (error) {
      contentResponse = {
        message:"Ops! Não foi possivel cadastra o time, tente novamente!",
        error
      }

      return response.status(400).json(contentResponse)
    }
  }

  public async update (request:Request, response:Response):Promise<Response>{
    let contentResponse:TypeResponse
    
    try {
      const teamId = request.params.id
      const data = request.body
      const validKeys = ['name','members', 'scheduledMentoring' ]

      const team = await Team.findById(teamId)
      const teamNew = team?.toObject()
      validKeys.forEach(item => {
        if(data[item])teamNew[item] = data[item]
      })

      await Team.updateOne({_id: teamId}, teamNew)

      contentResponse = {
        message:'Time atualizado com sucesso.',
        team:{
          name: teamNew.name,
          members: teamNew.members,
          scheduledMentoring: teamNew.scheduledMentoring
        }
      }

      return response.status(200).json(contentResponse)
    } catch (error) {
      contentResponse = {
        message: 'Ops! Não foi possivel atualizar o time, tente novamente.',
        error
      }

      return response.status(400).json(contentResponse)
    }
    
  }

}

export default new TeamController()