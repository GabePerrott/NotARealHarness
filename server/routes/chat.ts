import { Router } from 'express'
import request from 'superagent'

const router = Router()

router.post('/', async (req, res) => {
  console.log('request params:', req.params)
  try {
    const chatResponse = await request.post('http://127.0.0.1:8731/v1/chat/completions').send(req.body)
    await res.json(chatResponse.body)
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'Something went wrong' })
  }
})


export default router
