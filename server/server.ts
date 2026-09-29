import express from 'express'
import * as Path from 'node:path'

import modelRoutes from './routes/models.ts'
import chatRoutes from './routes/chat.ts'

const server = express()

server.use(express.json())

server.use('/api/v1/models', modelRoutes)
server.use('/api/v1/chat', chatRoutes)

if (process.env.NODE_ENV === 'production') {
  server.use(express.static(Path.resolve('public')))
  server.use('/assets', express.static(Path.resolve('./dist/assets')))
  server.get('*', (req, res) => {
    res.sendFile(Path.resolve('./dist/index.html'))
  })
}

export default server
