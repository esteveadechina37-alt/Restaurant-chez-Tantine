import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faHeart,
  faLeaf,
  faUsers,
  faStar,
} from '@fortawesome/free-solid-svg-icons'

const valeurs = [
  {
    icon: faHeart,
    titre: 'Cuisine du cœur',
    texte: 'Chaque plat est préparé avec amour, comme Tantine le faisait pour sa famille.',
  },
  {
    icon: faLeaf,
    titre: 'Ingrédients frais',
    texte: 'Nous nous approvisionnons chaque matin au marché Ouando pour garantir la fraîcheur.',
  },
  {
    icon: faUsers,
    titre: 'Ambiance familiale',
    texte: 'Ici tout le monde se connaît. Venez seul, repartez en famille.',
  },
  {
    icon: faStar,
    titre: 'Recettes authentiques',
    texte: 'Nos recettes sont transmises de génération en génération, jamais modifiées.',
  },
]

function Apropos() {
  return (
    <section id="apropos" className="apropos">
      <div className="apropos-container">

        {/* Bloc image */}
        <div className="apropos-image-wrapper">
          <img
            src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=600&q=80"
            alt="Ambiance du maquis Chez Tantine"
            className="apropos-image"
          />
          <div className="apropos-badge-image">
            <span className="apropos-badge-annee">Depuis 2010</span>
            <span className="apropos-badge-ville">Porto-Novo</span>
          </div>
        </div>

        {/* Bloc texte */}
        <div className="apropos-content">
          <span className="apropos-label">Notre histoire</span>
          <h2 className="apropos-titre">
            Un maquis né d'une<br />
            <span className="hero-accent">passion familiale</span>
          </h2>
          <p className="apropos-texte">
            Chez Tantine, c'est l'histoire de Mariam, mère de famille de Porto-Novo,
            qui a transformé sa passion pour la cuisine béninoise en un lieu de vie
            où chacun se sent le bienvenu.
          </p>
          <p className="apropos-texte">
            Depuis 2010, notre maquis accueille étudiants, familles et travailleurs
            autour des meilleures saveurs du Bénin — Amiwo, Sauce Graine, Poisson Braisé —
            dans une ambiance détendue et authentique.
          </p>

          {/* Valeurs */}
          <div className="apropos-valeurs">
            {valeurs.map((v, i) => (
              <div key={i} className="apropos-valeur">
                <div className="apropos-valeur-icon">
                  <FontAwesomeIcon icon={v.icon} />
                </div>
                <div>
                  <h4 className="apropos-valeur-titre">{v.titre}</h4>
                  <p className="apropos-valeur-texte">{v.texte}</p>
                </div>
              </div>
            ))}
          </div>

          <a href="#contact" className="btn-primary apropos-cta">
            Venir nous voir
          </a>
        </div>

      </div>
    </section>
  )
}

export default Apropos