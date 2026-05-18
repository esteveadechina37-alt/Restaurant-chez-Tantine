import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUtensils, faTruck, faStore, faStar, faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { useEffect, useState } from 'react'

const services = [
  { icon: faTruck, titre: 'Livraison rapide', texte: 'Dans Porto-Novo' },
  { icon: faStore, titre: 'Sur place', texte: 'Ambiance familiale' },
  { icon: faStar,  titre: 'Qualité premium', texte: 'Ingrédients frais' },
]

const miniPlats = [
  {
    img: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=100&q=75&fit=crop',
    nom: 'Poisson Braisé', prix: '1 500 FCFA',
  },
  {
    img: 'https://images.unsplash.com/photo-1547592180-85f173990554?w=100&q=75&fit=crop',
    nom: 'Sauce Graine', prix: '800 FCFA',
  },
  {
    img: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?w=100&q=75&fit=crop',
    nom: 'Riz au Gras', prix: '700 FCFA',
  },
]

function Hero() {
  const [loaded, setLoaded] = useState(false)
  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 80)
    return () => clearTimeout(t)
  }, [])

  return (
    <section id="accueil" className="hero">
      {/* GAUCHE */}
      <div className={`hero-left ${loaded ? 'hero-anim-left' : ''}`}>
        <span className="hero-tag">
          <FontAwesomeIcon icon={faUtensils} />
          Restaurant Béninois Authentique
        </span>

        <h1>
          Savourez la vraie<br />
          cuisine <span className="hero-accent">béninoise</span><br />
          à Porto-Novo
        </h1>

        <p>
          Plats préparés chaque jour avec des ingrédients frais du marché.
          Venez manger comme à la maison ou commandez via WhatsApp.
        </p>

        <div className="hero-buttons">
          <a href="#menu" className="btn-primary">
            Voir le menu <FontAwesomeIcon icon={faArrowRight} />
          </a>
          <a href="#contact" className="btn-outline">Nous contacter</a>
        </div>

        <div className="hero-mini-cards">
          {miniPlats.map((p, i) => (
            <div key={i} className="hero-mini-card" style={{ animationDelay: `${0.6 + i * 0.15}s` }}>
              <img src={p.img} alt={p.nom} />
              <div>
                <span className="hero-mini-nom">{p.nom}</span>
                <span className="hero-mini-prix">{p.prix}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* DROITE */}
      <div className={`hero-right ${loaded ? 'hero-anim-right' : ''}`}>
        <div className="hero-img-wrapper">
          <img
            src="https://images.unsplash.com/photo-1598103442097-8b74394b95c2?w=700&q=80&fit=crop"
            alt="Plat béninois"
            className="hero-main-img"
          />
          <div className="hero-img-badge">
            <span className="hero-badge-num">4.9 ⭐</span>
            <span className="hero-badge-label">Note clients</span>
          </div>
          <div className="hero-img-pill">🍽️ +200 plats/jour</div>
        </div>

        <div className="hero-services">
          {services.map((s, i) => (
            <div key={i} className="hero-service-card" style={{ animationDelay: `${0.4 + i * 0.12}s` }}>
              <div className="hero-service-icon">
                <FontAwesomeIcon icon={s.icon} />
              </div>
              <div>
                <p className="hero-service-titre">{s.titre}</p>
                <p className="hero-service-texte">{s.texte}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Hero