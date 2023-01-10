import { Router } from 'express'

const router = Router()

import { Recipe } from './controllers/Recipe'
import { User } from './controllers/User'

const getAllRecipes = new Recipe().getAllRecipes
const getAllUsers = new User().getAllUsers

router.get('/', (req, res) => {
  res.json({'message': 'Server is running'})
})

router.get('/recipes', getAllRecipes)

router.get('/users', getAllUsers)

export default router