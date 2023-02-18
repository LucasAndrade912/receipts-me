import { Router } from 'express'

const router = Router()

import { Recipe } from './controllers/Recipe'
import { User } from './controllers/User'
import { Comment } from './controllers/Comment'
import { Bookmark } from './controllers/Bookmark'

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


/* Bookmark methods */
router.get('/bookmarks', getAllBookmarks)
router.get('/bookmarks/post/:cod_recipe', getAllBookmarkedFromPost)
router.get('/bookmarks/user/:google_id', getAllBookmarksFromUser)
router.post('/bookmarks', createBookmark)


export default router
