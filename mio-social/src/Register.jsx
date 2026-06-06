import { useState } from "react"
import { Link } from "react-router-dom"
import './Register.css'

function Register() {
    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [cognome, setCognome] = useState('')
    const [username, setUsername] = useState('')
    
    const handleRegister = async () => {
  try {
    const risposta = await fetch('http://localhost:5000/api/auth/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ nome, cognome, username, email, password })
    })

    const dati = await risposta.json()

    if (risposta.ok) {
      alert('Registrazione riuscita! Ora accedi.')
    } else {
      alert(dati.messaggio)
    }

  } catch (err) {
    alert('Errore di connessione al server'+err)
  }
}
    return (
        <div className="register-container">
            <div className="register-box">
                <h1>Crea un account</h1>
                <input type="text" placeholder="Nome" value={nome} onChange={(e) => setNome(e.target.value)} />
                <input type="text" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <input type="text" placeholder="Cognome"  value={cognome}  onChange={(e) => setCognome(e.target.value)} />
                <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
                <button onClick={handleRegister}>Registrati</button>
                <p>hai già un account ? <Link to="/login">Accedi</Link></p>
            </div>
        </div>
    )
}

export default Register