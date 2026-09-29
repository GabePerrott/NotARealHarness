import { Router } from 'express'
import request from 'superagent'

const router = Router()

router.get('/', async (req, res) => {
  console.log('request query:', req.query)
  try {
    const models = await request.get(`${req.query.url}/v1/models`)
    await res.json(models.body.data)
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'Something went wrong' })
  }
})


export default router
