import { useNavigate } from 'react-router-dom'

function Navbar({ utente }) {
  const navigate = useNavigate()

  const handleLogout = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('utente')
    navigate('/login')
  }

  return (
    <nav className="navbar">
      <h2>MySocial</h2>
      <div className="navbar-user">
        <span>Ciao, {utente ? utente.nome : 'Utente'}!</span>
        <button onClick={handleLogout}>Logout</button>
      </div>
    </nav>
  )
}

export default Navbar