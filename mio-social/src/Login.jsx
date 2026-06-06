import { useNavigate } from 'react-router-dom'
import { useState } from "react";
import './Login.css'
import { Link } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  const handleLogin = async () => {

    try {
      const risposta = await fetch('http://localhost:5000/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
      })

      const dati = await risposta.json()

      if (risposta.ok) {
        localStorage.setItem('token', dati.token)
        localStorage.setItem('utente', JSON.stringify(dati.utente))
        alert('Login riuscito! Benvenuto ' + dati.utente.nome)
        navigate('/feed')
      } else {
        alert(dati.messaggio)
      }

    } catch {
      alert('Errore di connessione al server')
    }
  }

  const navigate = useNavigate()

  return (
    <div className="login-container">
      <div className="login-box">
        <h1>Mio progetto</h1>
        <h2>Account login</h2>
        <input type="email" placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input type="password" placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        {/* <button onClick={()=> alert('Email: ' + email +' Password: ' + password)}>Click</button> */}
        <button onClick={handleLogin}>Invia</button>
        <p>Non hai un account ? <Link to="/register">Registrati</Link></p>

      </div>
    </div>

  )
}
export default Login 
