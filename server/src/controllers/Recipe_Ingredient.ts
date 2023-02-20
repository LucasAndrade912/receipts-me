import { Request, Response } from 'express'
import { prismaClient } from '../database/prismaClient'

export class Recipe_Ingredient {
  async getAll_recipe_ingredient(request: Request, response: Response) {
    const allRecipe_ingredient = await prismaClient.recipe_Ingredient.findMany()

    return response.json(allRecipe_ingredient)
  }

  async create_recipe_ingredient(request: Request, response: Response) {
    const {
      cod_ingredient,
      cod_recipe
    } = request.body


    const recipe_ingredient = await prismaClient.recipe_Ingredient.create({
      data: {
        Recipe: {
          connect: {
            cod_recipe
          }
        },

        Ingredient: {
          connect: {
            cod_ingredient
          }
        },
      },
    })

    return response.json(recipe_ingredient)
  }
}
