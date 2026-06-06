import express from 'express'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import User from '../models/User.js'

const router = express.Router()

// REGISTRAZIONE
router.post('/register', async (req, res) => {
  try {
    const { nome, cognome, username, email, password } = req.body

    // 1. Controlla se email esiste già
    const utenteEsistente = await User.findOne({ email })
    if (utenteEsistente) {
      return res.status(400).json({ messaggio: 'Email già registrata' })
    }

    // 2. Cifra la password
    const salt = await bcrypt.genSalt(10)
    const passwordCifrata = await bcrypt.hash(password, salt)

    // 3. Crea e salva il nuovo utente
    const nuovoUtente = new User({
      nome,
      cognome,
      username,
      email,
      password: passwordCifrata
    })

    await nuovoUtente.save()

    res.status(201).json({ messaggio: 'Utente registrato con successo' })

  } catch (errore) {
    res.status(500).json({ messaggio: 'Errore del server', errore })
  }
})

// LOGIN
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body

    // 1. Cerca l'utente nel database
    const utente = await User.findOne({ email })
    if (!utente) {
      return res.status(400).json({ messaggio: 'Email non trovata' })
    }

    // 2. Controlla la password
    const passwordCorretta = await bcrypt.compare(password, utente.password)
    if (!passwordCorretta) {
      return res.status(400).json({ messaggio: 'Password errata' })
    }

    // 3. Crea il token JWT
    const token = jwt.sign(
      { id: utente._id },
      process.env.JWT_SECRET,
      { expiresIn: '7d' }
    )

    res.json({ token, utente: { id: utente._id, nome: utente.nome, username: utente.username } })

  } catch (errore) {
    console.log('ERRORE:', errore)
    res.status(500).json({ messaggio: 'Errore del server', errore })
  }
})


export default router