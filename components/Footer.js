import React from "react";
import { Mail, Phone, Facebook, Twitter, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Contactez-nous</h3>
          <div className="contact-info">
            <p>
              <Mail /> <span>Email:contact@oeuvresdart.com </span> 
            </p>
            </div>
            <div className="contact-info">
            <p>
              <Phone /> <span>Téléphone: +123 456 789 </span>
            </p>
          </div>
        </div>
        <div className="footer-section">
          <h3>Suivez-nous</h3>
          <div className="social-icons">
            <a href="#" target="_blank" rel="noopener noreferrer">
              <Facebook />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <Twitter />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <Instagram />
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2024 Oeuvres d'art. Tous droits réservés.</p>
      </div>
    </footer>
  );
};

export default Footer;

