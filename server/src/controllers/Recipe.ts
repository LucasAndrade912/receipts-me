import { Request, Response } from 'express'
import { prismaClient } from '../database/prismaClient'

export class Recipe {
  async getAllRecipes(request: Request, response: Response) {
    const allRecipes = await prismaClient.recipe.findMany()

    return response.json(allRecipes)
  }

  async createRecipe(request: Request, response: Response) {
    const {
      cod_recipe,
      name_recipe,
      step_by_step,
      prep_time_min,
      prep_time_max,
      cape_picture,
      aditional_picture1,
      aditional_picture2,
      comment,
      bookMarked,
      Recipe_Ingredient,
      Recipe_Category,

      google_id,
    } = request.body

    let date_register = request.body.date_register


    date_register = new Date(date_register)

    const create = await prismaClient.recipe.create({
      data: {
        cod_recipe,
        date_register,
        name_recipe,
        prep_time_max,
        prep_time_min,
        step_by_step,

        cape_picture,
        aditional_picture1,
        aditional_picture2,

        bookMarked,
        comment,
        google_id,
        Recipe_Category,
        Recipe_Ingredient,
      },
    })
    return response.json(create)
  }

}
