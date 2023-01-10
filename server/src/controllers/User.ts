import { Request, Response } from "express";
import { prismaClient } from "../database/prismaClient";

export class User {
  async getAllUsers(request: Request, response: Response) {
    const allRecipes = await prismaClient.user.findMany();

    return response.json(allRecipes);
  }
}