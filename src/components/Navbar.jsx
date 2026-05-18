import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUtensils, faBars, faXmark, faSearch, faShoppingBag } from '@fortawesome/free-solid-svg-icons'

function Navbar() {
  const [menuOuvert, setMenuOuvert] = useState(false)

  return (
    <nav className="navbar">
      <div className="logo">
        <FontAwesomeIcon icon={faUtensils} className="logo-icon" />
        <span>Chez <strong>Tantine</strong></span>
      </div>

      <ul className={`nav-links ${menuOuvert ? 'actif' : ''}`}>
        <li><a href="#accueil" onClick={() => setMenuOuvert(false)}>Accueil</a></li>
        <li><a href="#menu" onClick={() => setMenuOuvert(false)}>Menu</a></li>
        <li><a href="#apropos" onClick={() => setMenuOuvert(false)}>À propos</a></li>
        <li><a href="#contact" onClick={() => setMenuOuvert(false)}>Contact</a></li>
      </ul>

      <div className="nav-actions">
        <button className="nav-icon-btn" aria-label="Rechercher">
          <FontAwesomeIcon icon={faSearch} />
        </button>
        <a href="#contact" className="nav-order-btn">
          <FontAwesomeIcon icon={faShoppingBag} />
          Commander
        </a>
        <button
          className="menu-btn"
          onClick={() => setMenuOuvert(!menuOuvert)}
          aria-label="Menu"
        >
          <FontAwesomeIcon icon={menuOuvert ? faXmark : faBars} />
        </button>
      </div>
    </nav>
  )
}

export default Navbar