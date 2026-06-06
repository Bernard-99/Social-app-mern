import express from 'express'
import Post from '../models/Post.js'
import jwt from 'jsonwebtoken'

const router = express.Router()

// MIDDLEWARE — verifica il token JWT
const verificaToken = (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1]

  if (!token) {
    return res.status(401).json({ messaggio: 'Token mancante' })
  }

  try {
    const dati = jwt.verify(token, process.env.JWT_SECRET)
    req.utente = dati
    next()
  } catch {
    res.status(401).json({ messaggio: 'Token non valido' })
  }
}

// CREA POST
router.post('/', verificaToken, async (req, res) => {
  try {
    const { testo } = req.body

    const nuovoPost = new Post({
      autore: req.utente.id,
      testo
    })

    await nuovoPost.save()
    await nuovoPost.populate('autore', 'nome username')

    res.status(201).json(nuovoPost)

  } catch (errore) {
    console.log(errore)
    res.status(500).json({ messaggio: 'Errore del server' })
  }
})

// LEGGI TUTTI I POST
router.get('/', verificaToken, async (req, res) => {
  try {
    const posts = await Post.find()
      .populate('autore', 'nome username')
      .sort({ createdAt: -1 })

    res.json(posts)

  } catch (errore) {
    res.status(500).json({ messaggio: 'Errore del server' })
  }
})

export default router