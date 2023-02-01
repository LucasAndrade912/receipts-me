import { Request, Response } from 'express'
import { prismaClient } from '../database/prismaClient'

export class Comment {
  async getAllComentsFromPost(request: Request, response: Response) {
    const allRecipes = await prismaClient.user.findMany({
      where: {
        //TODO
      }
    })

    return response.json(allRecipes)
  }

  async createComment(request: Request, response: Response) {
    const {
      google_id,
      cod_recipe,
      text
    } = request.body

    const comment = await prismaClient.comment.create({
      data: {
        text,

        User: {
          connect: {
            google_id
          }
        },
        Recipe: {
          connect: {
            cod_recipe
          }
        }
      },
    })

    return response.json(comment)
  }
}
