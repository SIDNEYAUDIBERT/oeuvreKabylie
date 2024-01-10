import React from 'react';
import Header from './Header';
import Footer from './Footer';


const Contact = () => {
  return (
    <div>
      <Header />

      <div className="contact-container">
        <h2>Contactez-nous</h2>
        <p>
          Nous sommes ravis de pouvoir répondre à vos questions et de vous fournir toutes les informations nécessaires.
        </p>
        <div className="contact-info">
          <p>Email : contact@votre-site.com</p>
          <p>Téléphone : +01 234 567 890</p>
          <p>
            Adresse :<br />
            123, Rue de l'Art,<br />
            Ville d'Art, 12345
          </p>
        </div>
        <hr />

        <h3>Heures d'ouverture</h3>
        <p>
          Notre équipe est disponible pour vous assister du lundi au vendredi, de 9h à 17h.
        </p>

        <h3>Formulaire de Contact</h3>
        <p>
          Si vous préférez, vous pouvez également utiliser notre formulaire de contact en ligne.
        </p>
        {/* Ajoutez ici un formulaire de contact si nécessaire */}
      </div>

      <Footer />
    </div>
  );
};

export default Contact;
