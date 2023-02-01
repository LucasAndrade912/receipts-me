import { Request, Response } from 'express'
import { prismaClient } from '../database/prismaClient'

export class User {
  async getAllUsers(request: Request, response: Response) {
    const allUsers = await prismaClient.user.findMany()

    return response.json(allUsers)
  }

  async createUser(request: Request, response: Response) {
    const {
      avatar,
      email,
      google_id,
      name,

      bookMarked,
      comment,
      recipes,
    } = request.body

    const user = await prismaClient.user.create({
      data: {
        avatar,
        email,
        google_id,
        name,

        bookMarked,
        comment,
        recipes,
      },
    })

    return response.json(user)
  }
}
