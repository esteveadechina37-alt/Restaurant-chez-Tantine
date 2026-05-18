import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFire, faLeaf, faStar } from '@fortawesome/free-solid-svg-icons'

const plats = [
  {
    id: 1,
    nom: 'Amiwo',
    description: 'Pâte de maïs accompagnée de sauce tomate et poisson fumé',
    prix: '500 FCFA',
    icon: faLeaf,
    badge: 'Végétarien',
    badgeColor: '#27ae60'
  },
  {
    id: 2,
    nom: 'Sauce Graine',
    description: 'Sauce palmiste avec viande de bœuf et légumes frais du marché',
    prix: '800 FCFA',
    icon: faStar,
    badge: 'Populaire',
    badgeColor: '#f39c12'
  },
  {
    id: 3,
    nom: 'Poisson Braisé',
    description: 'Poisson entier grillé au charbon, servi avec attiéké et piment',
    prix: '1 500 FCFA',
    icon: faFire,
    badge: 'Spécialité',
    badgeColor: '#c0392b'
  },
  {
    id: 4,
    nom: 'Poulet DG',
    description: 'Poulet sauté aux légumes et plantains, recette de Tantine',
    prix: '2 000 FCFA',
    icon: faStar,
    badge: 'Coup de cœur',
    badgeColor: '#8e44ad'
  },
  {
    id: 5,
    nom: 'Riz au Gras',
    description: 'Riz cuit dans une sauce tomate épicée avec viande de mouton',
    prix: '700 FCFA',
    icon: faLeaf,
    badge: 'Économique',
    badgeColor: '#27ae60'
  },
  {
    id: 6,
    nom: 'Akassa & Sauce',
    description: 'Pâte de maïs fermentée servie avec sauce crabe ou crevettes',
    prix: '600 FCFA',
    icon: faFire,
    badge: 'Traditionnel',
    badgeColor: '#c0392b'
  }
]

function Menu() {
  return (
    <section id="menu" className="menu-section">
      <div className="section-header">
        <h2>Notre Menu</h2>
        <p>Des plats préparés avec amour chaque jour</p>
      </div>
      <div className="menu-grid">
        {plats.map((plat) => (
          <div key={plat.id} className="plat-card">
            <div className="plat-icon-wrapper">
              <FontAwesomeIcon icon={plat.icon} className="plat-icon" />
            </div>
            <div className="plat-info">
              <div className="plat-top">
                <h3>{plat.nom}</h3>
                <span
                  className="plat-badge"
                  style={{ background: plat.badgeColor }}
                >
                  {plat.badge}
                </span>
              </div>
              <p>{plat.description}</p>
              <span className="plat-prix">{plat.prix}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Menu