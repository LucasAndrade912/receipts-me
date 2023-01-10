import { Request, Response } from "express";
import { prismaClient } from "../database/prismaClient";

export class Recipe {
  async getAllRecipes(request: Request, response: Response) {
    const allRecipes = await prismaClient.recipe.findMany();

    return response.json(allRecipes);
  }
}