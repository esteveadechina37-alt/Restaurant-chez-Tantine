import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus, faHeart, faStar } from '@fortawesome/free-solid-svg-icons'
import { useState, useEffect, useRef } from 'react'

const plats = [
  {
    id: 1,
    nom: 'Amiwo',
    description: 'Pâte de maïs rouge accompagnée de sauce tomate épicée et poisson fumé',
    prix: '500 FCFA',
    badge: 'Végétarien',
    badgeColor: '#27ae60',
    note: 4.8,
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Akume.jpg/640px-Akume.jpg',
  },
  {
    id: 2,
    nom: 'Sauce Graine',
    description: 'Sauce palmiste onctueuse avec viande de bœuf et légumes frais du marché',
    prix: '800 FCFA',
    badge: 'Populaire',
    badgeColor: '#e67e22',
    note: 4.9,
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Palm_nut_soup.jpg/640px-Palm_nut_soup.jpg',
  },
  {
    id: 3,
    nom: 'Poisson Braisé',
    description: 'Poisson entier grillé au charbon, servi avec attiéké maison et piment',
    prix: '1 500 FCFA',
    badge: 'Spécialité',
    badgeColor: '#c0392b',
    note: 5.0,
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Grilled_tilapia.jpg/640px-Grilled_tilapia.jpg',
  },
  {
    id: 4,
    nom: 'Poulet DG',
    description: 'Poulet sauté aux légumes frais et plantains dorés, recette signature de Tantine',
    prix: '2 000 FCFA',
    badge: 'Coup de cœur',
    badgeColor: '#8e44ad',
    note: 4.9,
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Poulet_DG.jpg/640px-Poulet_DG.jpg',
  },
  {
    id: 5,
    nom: 'Riz au Gras',
    description: 'Riz cuit lentement dans une sauce tomate épicée avec viande de mouton',
    prix: '700 FCFA',
    badge: 'Économique',
    badgeColor: '#27ae60',
    note: 4.7,
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Jollof_Rice.jpg/640px-Jollof_Rice.jpg',
  },
  {
    id: 6,
    nom: 'Akassa & Sauce Crabe',
    description: 'Pâte de maïs fermentée servie avec riche sauce aux crabes ou crevettes',
    prix: '600 FCFA',
    badge: 'Traditionnel',
    badgeColor: '#c0392b',
    note: 4.6,
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Banku_with_okra_soup.jpg/640px-Banku_with_okra_soup.jpg',
  },
  {
    id: 7,
    nom: 'Gbègiri',
    description: 'Soupe de haricots onctueuse, servie avec riz blanc ou igname pilée',
    prix: '600 FCFA',
    badge: 'Traditionnel',
    badgeColor: '#c0392b',
    note: 4.5,
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Egusi_soup.jpg/640px-Egusi_soup.jpg',
  },
  {
    id: 8,
    nom: 'Alloco & Poisson',
    description: 'Plantains frits bien dorés, poisson braisé et sauce pimentée maison',
    prix: '900 FCFA',
    badge: 'Populaire',
    badgeColor: '#e67e22',
    note: 4.8,
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Aloko.jpg/640px-Aloko.jpg',
  },
]

function useReveal(threshold = 0.12) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true) },
      { threshold }
    )
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])
  return [ref, visible]
}

function PlatCard({ plat, index, featured }) {
  const [liked, setLiked] = useState(false)
  const [ref, visible] = useReveal()

  return (
    <div
      ref={ref}
      className={`plat-card ${featured ? 'plat-card--featured' : ''} ${visible ? 'card-visible' : 'card-hidden'}`}
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      <div className="plat-img-wrapper">
        <img src={plat.img} alt={plat.nom} className="plat-img" loading="lazy" />
        <span className="plat-badge" style={{ background: plat.badgeColor }}>{plat.badge}</span>
        <button className={`plat-like ${liked ? 'liked' : ''}`} onClick={() => setLiked(!liked)}>
          <FontAwesomeIcon icon={faHeart} />
        </button>
      </div>
      <div className="plat-body">
        <div className="plat-note">
          <FontAwesomeIcon icon={faStar} />
          <span>{plat.note.toFixed(1)}</span>
        </div>
        <h3 className="plat-nom">{plat.nom}</h3>
        <p className="plat-desc">{plat.description}</p>
        <div className="plat-footer">
          <span className="plat-prix">{plat.prix}</span>
          <a href="#contact" className="plat-commander">
            <FontAwesomeIcon icon={faCartPlus} />
          </a>
        </div>
      </div>
    </div>
  )
}

function Menu() {
  const [ref, visible] = useReveal()
  return (
    <section id="menu" className="menu-section">
      <div className="menu-container">
        <div ref={ref} className={`section-header ${visible ? 'card-visible' : 'card-hidden'}`}>
          <span className="section-label">Ce que nous servons</span>
          <h2>Nos <span className="hero-accent">Meilleurs</span> Plats</h2>
          <p>Préparés chaque jour avec des ingrédients frais du marché Ouando</p>
        </div>
        <div className="menu-grid">
          {plats.map((plat, i) => (
            <PlatCard key={plat.id} plat={plat} index={i} featured={i === 0} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Menu