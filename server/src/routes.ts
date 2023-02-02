import { Router } from 'express'

const router = Router()

import { Recipe } from './controllers/Recipe'
import { User } from './controllers/User'
import { Comment } from './controllers/Comment'

const getAllUsers = new User().getAllUsers
const createUser = new User().createUser

const getAllRecipes = new Recipe().getAllRecipes
const createRecipe = new Recipe().createRecipe

const getAllComents = new Comment().getAllComents
const getAllComentsFromPost = new Comment().getAllComentsFromPost
const getAllComentsFromUser  = new Comment().getAllComentsFromUser
const createComment = new Comment().createComment

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


/* Comment methods */
router.get('/comments', getAllComents)
router.get('/comments/post/:cod_recipe', getAllComentsFromPost)
router.get('/comments/user/:google_id', getAllComentsFromUser)
router.post('/comments', createComment)

export default router
