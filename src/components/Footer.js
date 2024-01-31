import {
  faFacebook,
  faTwitter,
  faInstagram,
  faYoutube
} from '@fortawesome/free-brands-svg-icons';
import {
  faEnvelope,
  faLocationDot,
  faPhone
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import logoWhiteImage from '../assets/logo-white.png';
import {pagesNav} from '../pages';
import "../assets/footer.css"

const contacts = [
  { icon: faLocationDot, info: 'Chicago', },
  { icon: faPhone, info: '555-55555', },
  { icon: faEnvelope, info: 'post@littlelemon.com', },
];

const socials = [
  { icon: faFacebook, name: 'facebook', },
  { icon: faInstagram, name: 'instagram', },
];

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="container grid">
        <img 
          className="site-footer-logo" 
          src={logoWhiteImage} 
          alt="Little Lemon" 
        />
        <nav className="site-footer-nav">
          <h4>Sitemap</h4>
          <ul>
            {pagesNav.map((page) => 
              <li key={page.id}>
                <Link to={page.path}>{page.name}</Link>
              </li>
            )}
          </ul>
        </nav>
        <div className="site-footer-contact">
          <h4>Contact us</h4>
          <address>
          {contacts.map((contact, index) => 
            <p key={index}>
              <FontAwesomeIcon icon={contact.icon} /> {contact.info}
            </p>
          )}
          </address>
        </div>
        <div className="site-footer-social">
          <h4>Connect with us</h4>
          {socials.map((social, index) => 
            <a 
              key={index} 
              href={`https://www.${social.name}.com`} 
              target="_blank" 
              rel="noreferrer" 
            >
              <FontAwesomeIcon icon={social.icon} size="lg" />
            </a>
          )}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
