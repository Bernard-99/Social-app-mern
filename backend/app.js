import { config } from 'dotenv'
config()

import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import authRoutes from './routes/auth.js'

const app = express()

app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true
}))
app.use(express.json())

//questo si può omettere è per prova da fare all'inzio---> console.log('URI:', process.env.MONGO_URI)

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connesso!'))
  .catch((err) => console.log('Errore connessione:', err))

app.use('/api/auth',authRoutes)

app.get('/', (req, res) => {
  res.send('Backend funzionante!')
})

const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
  console.log(`Server avviato sulla porta ${PORT}`)
})