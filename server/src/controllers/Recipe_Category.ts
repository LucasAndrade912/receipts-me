import { Request, Response } from 'express'
import { prismaClient } from '../database/prismaClient'

export class Recipe_Category {
  async getAll_recipe_category(request: Request, response: Response) {
    const allRecipe_category = await prismaClient.recipe_Category.findMany()

    return response.json(allRecipe_category)
  }

  async create_recipe_category(request: Request, response: Response) {
    const {
      cod_category,
      cod_recipe
    } = request.body


    const recipe_category = await prismaClient.recipe_Category.create({
      data: {
        Recipe: {
          connect: {
            cod_recipe
          }
        },

        Category: {
          connect: {
            cod_category
          }
        },
      },
    })

    return response.json(recipe_category)
  }
}
