import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faWhatsapp,
} from '@fortawesome/free-brands-svg-icons'
import {
  faMapMarkerAlt,
  faClock,
  faPhone,
} from '@fortawesome/free-solid-svg-icons'

const WHATSAPP_NUMBER = '22900000000' // ← remplace par le vrai numéro
const WHATSAPP_MESSAGE = encodeURIComponent('Bonjour Tantine ! Je voudrais avoir des informations.')

const horaires = [
  { jour: 'Lundi – Vendredi', heure: '07h00 – 22h00' },
  { jour: 'Samedi', heure: '08h00 – 23h00' },
  { jour: 'Dimanche', heure: '09h00 – 21h00' },
]

function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="contact-container">

        {/* HEADER */}
        <div className="contact-header">
          <span className="apropos-label">Nous trouver</span>
          <h2 className="apropos-titre">
            Venez nous rendre <span className="hero-accent">visite</span>
          </h2>
          <p className="contact-intro">
            Passez nous voir ou contactez-nous directement sur WhatsApp.
            On vous répond rapidement !
          </p>
        </div>

        <div className="contact-grid">

          {/* INFOS */}
          <div className="contact-infos">

            {/* Adresse */}
            <div className="contact-card">
              <div className="contact-card-icon">
                <FontAwesomeIcon icon={faMapMarkerAlt} />
              </div>
              <div>
                <h4 className="contact-card-titre">Adresse</h4>
                <p className="contact-card-texte">
                  Quartier Gbégamey, Rue des Manguiers<br />
                  Porto-Novo, Bénin
                </p>
              </div>
            </div>

            {/* Téléphone */}
            <div className="contact-card">
              <div className="contact-card-icon">
                <FontAwesomeIcon icon={faPhone} />
              </div>
              <div>
                <h4 className="contact-card-titre">Téléphone</h4>
                <p className="contact-card-texte">+229 00 00 00 00</p>
              </div>
            </div>

            {/* Horaires */}
            <div className="contact-card">
              <div className="contact-card-icon">
                <FontAwesomeIcon icon={faClock} />
              </div>
              <div>
                <h4 className="contact-card-titre">Horaires d'ouverture</h4>
                <div className="contact-horaires">
                  {horaires.map((h, i) => (
                    <div key={i} className="contact-horaire-ligne">
                      <span className="contact-horaire-jour">{h.jour}</span>
                      <span className="contact-horaire-heure">{h.heure}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Bouton WhatsApp */}
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-whatsapp-btn"
            >
              <FontAwesomeIcon icon={faWhatsapp} />
              Écrire sur WhatsApp
            </a>

          </div>

          {/* CARTE GOOGLE MAPS */}
          <div className="contact-map-wrapper">
            <iframe
              title="Localisation Maquis Chez Tantine"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63432.31!2d2.6155!3d6.4969!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1024a9a5b2b2b2b3%3A0x1!2sPorto-Novo%2C%20B%C3%A9nin!5e0!3m2!1sfr!2sbj!4v1"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

        </div>
      </div>
    </section>
  )
}

export default Contact