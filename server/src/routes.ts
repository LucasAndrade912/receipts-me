import express from 'express'

const router = express.Router()

router.get('/', (req, res) => {
  res.json({ message: 'now we use eslint and editorconfig' })
})

export default router