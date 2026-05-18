import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUtensils } from '@fortawesome/free-solid-svg-icons'

function Navbar() {
  const [menuOuvert, setMenuOuvert] = useState(false)

  return (
    <nav className="navbar">
    <div className="logo">
        <FontAwesomeIcon icon={faUtensils} className="logo-icon" />
        <span>Chez Tantine</span>
    </div>
      <ul className={`nav-links ${menuOuvert ? 'actif' : ''}`}>
        <li><a href="#accueil" onClick={() => setMenuOuvert(false)}>Accueil</a></li>
        <li><a href="#menu" onClick={() => setMenuOuvert(false)}>Menu</a></li>
        <li><a href="#apropos" onClick={() => setMenuOuvert(false)}>À propos</a></li>
        <li><a href="#contact" onClick={() => setMenuOuvert(false)}>Contact</a></li>
      </ul>

      <button
        className="menu-btn"
        onClick={() => setMenuOuvert(!menuOuvert)}
      >
        {menuOuvert ? '✕' : '☰'}
      </button>
    </nav>
  )
}

export default Navbar