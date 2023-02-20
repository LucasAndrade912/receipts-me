import { Request, Response } from 'express'
import { prismaClient } from '../database/prismaClient'

export class Category {
  async getAllCategories(request: Request, response: Response) {
    const allCategories = await prismaClient.category.findMany()

    return response.json(allCategories)
  }

  async createCategory(request: Request, response: Response) {
    const {
      cod_category,
      name_category,
      Recipe_Category
    } = request.body


    const category = await prismaClient.category.create({
      data: {
        name_category,
        cod_category,
        Recipe_Category
      },
    })

    return response.json(category)
  }
}
