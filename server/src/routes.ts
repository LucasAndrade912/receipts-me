import { Router } from 'express'

const router = Router()

import { Recipe } from './controllers/Recipe'
import { User } from './controllers/User'
import { Comment } from './controllers/Comment'
import { Bookmark } from './controllers/Bookmark'
import { Category } from './controllers/Category'
import { Recipe_Category } from './controllers/Recipe_Category'
import { Ingredient } from './controllers/Ingredient'
import { Recipe_Ingredient } from './controllers/Recipe_Ingredient'

const getAllUsers = new User().getAllUsers
const createUser = new User().createUser

const getAllRecipes = new Recipe().getAllRecipes
const createRecipe = new Recipe().createRecipe

const getAllComents = new Comment().getAllComents
const getAllComentsFromPost = new Comment().getAllComentsFromPost
const getAllComentsFromUser  = new Comment().getAllComentsFromUser
const createComment = new Comment().createComment

const getAllBookmarks = new Bookmark().getAllBookmarks
const getAllBookmarkedFromPost = new Bookmark().getAllBookmarkedFromPost
const getAllBookmarksFromUser = new Bookmark().getAllBookmarksFromUser
const createBookmark = new Bookmark().createBookmark

const getAllCategories = new Category().getAllCategories
const createCategory = new Category().createCategory

const getAll_recipe_category = new Recipe_Category().getAll_recipe_category
const create_recipe_category = new Recipe_Category().create_recipe_category

const getAllIngredients = new Ingredient().getAllIngredients
const createIngredient = new Ingredient().createIngredient

const getAll_recipe_ingredient = new Recipe_Ingredient().getAll_recipe_ingredient
const create_recipe_ingredient = new Recipe_Ingredient().create_recipe_ingredient

router.get('/', (req, res) => {
  res.json({ message: 'Server is running' })
})



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


/* Bookmark methods */
router.get('/bookmarks', getAllBookmarks)
router.get('/bookmarks/post/:cod_recipe', getAllBookmarkedFromPost)
router.get('/bookmarks/user/:google_id', getAllBookmarksFromUser)
router.post('/bookmarks', createBookmark)

/* Category methods */
router.get('/categories', getAllCategories)
router.post('/categories', createCategory)

/* Recipe_Category */
router.get('/recipe_categories', getAll_recipe_category)
router.post('/recipe_categories', create_recipe_category)

/* Ingredients */
router.get('/ingredients', getAllIngredients)
router.post('/ingredients', createIngredient)

/* recipe_ingredients */
router.get('/recipe_ingredients', getAll_recipe_ingredient)
router.post('/recipe_ingredients', create_recipe_ingredient)



export default router
