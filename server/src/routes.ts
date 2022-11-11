import express from 'express'

const router = express.Router()

router.get('/', (req, res) => {
    res.json({'message': 'okay'})
})

export default router