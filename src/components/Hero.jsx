import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUtensils, faArrowDown } from '@fortawesome/free-solid-svg-icons'

function Hero() {
  return (
    <section id="accueil" className="hero">
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <div className="hero-badge">
          <FontAwesomeIcon icon={faUtensils} />
          <span>Restaurant Béninois Authentique</span>
        </div>
        <h1>La vraie cuisine béninoise<br />à <span className="hero-accent">Porto-Novo</span></h1>
        <p>Saveurs authentiques, ambiance chaleureuse.<br />Venez manger comme à la maison.</p>
        <div className="hero-buttons">
          <a href="#menu" className="btn-primary">Voir le menu</a>
          <a href="#contact" className="btn-secondary">Nous contacter</a>
        </div>
      </div>
      <a href="#menu" className="scroll-down">
        <FontAwesomeIcon icon={faArrowDown} />
      </a>
    </section>
  )
}

export default Hero