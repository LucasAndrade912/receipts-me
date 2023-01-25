import { Router } from 'express'


const router = Router()

import { Recipe } from './controllers/Recipe'
import { User } from './controllers/User'

const getAllUsers = new User().getAllUsers
const createUser = new User().createUser

const getAllRecipes = new Recipe().getAllRecipes
const createRecipe = new Recipe().createRecipe

router.get('/', (req, res) => {
  res.json({ message: 'Server is running' })
})

router.get('/recipes', getAllRecipes)



/* User methods */
router.get('/users', getAllUsers) // lists users
router.post('/users', createUser) // creates a new user


/* Recipe methods */
router.get('/recipes', getAllRecipes)
router.post('/recipes', createRecipe)

export default router
