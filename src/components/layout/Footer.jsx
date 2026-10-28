import { ArrowUpRight, Mail, MapPin, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import Logo from '../common/Logo.jsx';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-main">
        <div className="footer-about">
          <Logo />
          <p>Solar energy solutions for homes, businesses and agricultural needs across South India.</p>
        </div>
        <div className="footer-links">
          <h2>Explore</h2>
          <Link to="/about">About us</Link>
          <Link to="/products">Products</Link>
          <Link to="/services">Services</Link>
          <Link to="/contact">Contact</Link>
        </div>
        <div className="footer-contact">
          <h2>Find us</h2>
          <p><MapPin size={16} aria-hidden="true" />#48/48/1, Bellandur,<br />Bangalore 560103, India</p>
          <a href="https://wa.me/919964311000" target="_blank" rel="noreferrer" aria-label="WhatsApp technical support at +91 99643 11000">
            <MessageCircle size={16} aria-hidden="true" />+91 99643 11000
          </a>
          <a href="mailto:support@energeticsworld.com"><Mail size={16} aria-hidden="true" />support@energeticsworld.com</a>
          <a href="https://mail.google.com/mail/?view=cm&fs=1&to=support%40energeticsworld.com" target="_blank" rel="noreferrer">
            Compose in Gmail
          </a>
          <a className="footer-map-link" href="https://maps.google.com/?q=%2348%2F48%2F1%2C+Bellandur%2C+Bangalore+560103" target="_blank" rel="noreferrer">
            View location <ArrowUpRight size={15} aria-hidden="true" />
          </a>
        </div>
      </div>
      <div className="container footer-bottom">
        <p>© {new Date().getFullYear()} Energetics Eco Technologies LLP</p>
        <p>Designed around a greener future.</p>
      </div>
    </footer>
  );
}
