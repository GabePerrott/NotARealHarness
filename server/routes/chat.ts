import { Router } from 'express'
import request from 'superagent'

const router = Router()

router.post('/', async (req, res) => {
  console.log('chat request query:', req.query)
  try {
    const chatResponse = await request.post(`${req.query.url}/v1/chat/completions`).send(req.body)
    await res.json(chatResponse.body)
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'Something went wrong' })
  }
})


export default router
