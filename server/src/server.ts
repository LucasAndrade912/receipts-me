import express from 'express'

const app = express()

import router from './routes'

app.use(router)

app.listen(3333, () => {
  console.log('Server is running at http://localhost:3333')
})
