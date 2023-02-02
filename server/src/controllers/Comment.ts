import { Request, Response } from 'express'
import { prismaClient } from '../database/prismaClient'

export class Comment {
  async getAllComents(request: Request, response: Response) {
    const allComments = await prismaClient.comment.findMany()

    return response.json(allComments)
  }


  async getAllComentsFromPost(request: Request, response: Response) {
    const { cod_recipe } = request.params

    const allCommentsOfPost = await prismaClient.comment.findMany({
      where: {
        cod_recipe: cod_recipe
      }
    })

    return response.json(allCommentsOfPost)
  }

  async getAllComentsFromUser(request: Request, response: Response) {
    console.log('we good')
    const { google_id } = request.params

    const allComentFromUser = await prismaClient.comment.findMany({
      where: {
        google_id: google_id
      }
    })
    console.log('ye')
    console.table(allComentFromUser)
    return response.json(allComentFromUser)
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
