// AjouterOeuvre.jsx
import React, { useState } from "react";

const AjouterOeuvre = ({ onAjouterOeuvre }) => {
  const [nouvelleOeuvre, setNouvelleOeuvre] = useState({
    periode: "",
    categories: "",
    titre: "",
    artiste: "",
    date: "",
    prix: 0,
    image: "",
    nouveau: true,
    slugify: "",
    description: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNouvelleOeuvre({ ...nouvelleOeuvre, [name]: value });
  };

  const handleAjouterOeuvre = () => {
    onAjouterOeuvre(nouvelleOeuvre);
  };

  return (
    <div>
      <button onClick={handleAjouterOeuvre}>Ajouter Oeuvre</button>
    </div>
  );
};

export default AjouterOeuvre;
