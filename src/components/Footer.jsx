import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUtensils, faHeart } from '@fortawesome/free-solid-svg-icons'
import { faFacebookF, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons'

const WHATSAPP_NUMBER = '22900000000' // ← remplace par le vrai numéro

const liens = [
  { label: 'Accueil', href: '#accueil' },
  { label: 'Menu', href: '#menu' },
  { label: 'À propos', href: '#apropos' },
  { label: 'Contact', href: '#contact' },
]

const socials = [
  { icon: faFacebookF, href: '#', label: 'Facebook' },
  { icon: faInstagram, href: '#', label: 'Instagram' },
  { icon: faWhatsapp, href: `https://wa.me/${WHATSAPP_NUMBER}`, label: 'WhatsApp' },
]

function Footer() {
  const annee = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer-container">

        {/* LOGO + DESCRIPTION */}
        <div className="footer-brand">
          <div className="footer-logo">
            <FontAwesomeIcon icon={faUtensils} />
            <span>Chez Tantine</span>
          </div>
          <p className="footer-desc">
            La vraie cuisine béninoise à Porto-Novo.<br />
            Saveurs authentiques, ambiance familiale.
          </p>
          <div className="footer-socials">
            {socials.map((s, i) => (
              <a
                key={i}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="footer-social-btn"
              >
                <FontAwesomeIcon icon={s.icon} />
              </a>
            ))}
          </div>
        </div>

        {/* LIENS RAPIDES */}
        <div className="footer-col">
          <h4 className="footer-col-titre">Liens rapides</h4>
          <ul className="footer-liens">
            {liens.map((l, i) => (
              <li key={i}>
                <a href={l.href} className="footer-lien">{l.label}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* HORAIRES */}
        <div className="footer-col">
          <h4 className="footer-col-titre">Horaires</h4>
          <ul className="footer-liens">
            <li><span className="footer-lien">Lun – Ven : 07h – 22h</span></li>
            <li><span className="footer-lien">Samedi : 08h – 23h</span></li>
            <li><span className="footer-lien">Dimanche : 09h – 21h</span></li>
          </ul>
        </div>

      </div>

      {/* BAS DE PAGE */}
      <div className="footer-bottom">
        <p>
          © {annee} Maquis Chez Tantine · Porto-Novo, Bénin
        </p>
        <p className="footer-credit">
          Fait avec <FontAwesomeIcon icon={faHeart} className="footer-heart" /> à Porto-Novo
        </p>
      </div>
    </footer>
  )
}

export default Footer