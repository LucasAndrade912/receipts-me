import { Request, Response } from 'express'
import { prismaClient } from '../database/prismaClient'

export class Ingredient {
  async getAllIngredients(request: Request, response: Response) {
    const allIngredients = await prismaClient.ingredient.findMany()

    return response.json(allIngredients)
  }

  async createIngredient(request: Request, response: Response) {
    const {
      cod_ingredient,
      name_ingredient,
      Recipe_Ingredient
    } = request.body


    const ingredient = await prismaClient.ingredient.create({
      data: {
        cod_ingredient,
        name_ingredient,
        Recipe_Ingredient
      },
    })

    return response.json(ingredient)
  }
}
