import { Router } from 'express'
import request from 'superagent'

const router = Router()

router.get('/', async (req, res) => {
  try {
    const models = await request.get('http://127.0.0.1:8731/v1/models')
    await res.json(models.body.data)
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'Something went wrong' })
  }
})


export default router
