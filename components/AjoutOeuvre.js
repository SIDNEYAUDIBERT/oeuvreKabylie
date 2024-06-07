import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import data from "../data.json";

function AjoutOeuvre() {
  const [oeuvre, setOeuvre] = useState({
    titre: "",
    nomArtiste: "",
    période: "",
    catégorie: "",
    image: null,
    date: "",
    prix: "",
    description: "",
  });

  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;

    // Si le champ est de type "file", utilisez les fichiers téléchargés
    const inputValue = type === "file" ? files[0] : value;

    setOeuvre((prevOeuvre) => ({
      ...prevOeuvre,
      [name]: inputValue,
    }));

    // Vérifier si tous les champs sont remplis
    const allFieldsFilled = Object.values(oeuvre).every(
      (field) => field !== "" && field !== null,
    );

    // Mettre à jour le message d'erreur si un champ est vidé
    if (inputValue.trim() === "") {
      setErrorMessage(`Le champ "${name}" doit être renseigné.`);
    } else {
      setErrorMessage("");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const allFieldsFilled = Object.values(oeuvre).every(
      (field) => field !== "" && field !== null,
    );
    if (allFieldsFilled) {
      // Créez un nouvel objet pour la nouvelle œuvre
      const nouvelleOeuvre = {
        periode: oeuvre.période,
        id: Math.random().toString(36).substr(2, 10),
        categories: oeuvre.catégorie,
        titre: oeuvre.titre,
        artiste: oeuvre.nomArtiste,
        date: oeuvre.date,
        prix: parseFloat(oeuvre.prix),
        image: "../chemin/vers/votre/image.jpg", // Remplacez par le chemin correct
        nouveau: true,
        slugify: oeuvre.titre.toLowerCase().replace(/\s+/g, "-"),
        description: oeuvre.description,
      };

      data.oeuvres.push(nouvelleOeuvre);

      setSuccessMessage("Oeuvre créée avec succès!");
      setErrorMessage("");
      setOeuvre({
        titre: "",
        nomArtiste: "",
        période: "",
        catégorie: "",
        image: null,
        date: "",
        prix: "",
        description: "",
      });

      // je veux ajouter dans mon fichier json data.json
    } else {
      setErrorMessage("Tous les champs doivent être renseignés.");
      setSuccessMessage("");
    }
  };

  return (
    <div className="content-app">
      <Header />
      <header className="App-header">
        {successMessage && <p className="success-message">{successMessage}</p>}
        <hr style={{ color: "black" }} />
        <form className="formulaire" onSubmit={handleSubmit}>
          <p>Créer votre propre oeuvre</p>
          {errorMessage && <p className="error-message">{errorMessage}</p>}
          <input
            type="text"
            name="titre"
            value={oeuvre.titre}
            onChange={handleChange}
            placeholder="Titre de l'oeuvre"
          />

          <input
            type="text"
            name="nomArtiste"
            value={oeuvre.nomArtiste}
            onChange={handleChange}
            placeholder="Nom de l'artiste"
          />

          <input
            type="text"
            name="période"
            value={oeuvre.période}
            onChange={handleChange}
            placeholder="Période"
          />

          <input
            type="text"
            name="catégorie"
            value={oeuvre.catégorie}
            onChange={handleChange}
            placeholder="Catégorie"
          />

          <input type="file" name="image" onChange={handleChange} />

          <input
            type="text"
            name="date"
            value={oeuvre.date}
            onChange={handleChange}
            placeholder="Date de création"
          />

          <input
            type="text"
            name="prix"
            value={oeuvre.prix}
            onChange={handleChange}
            placeholder="Prix"
          />

          <textarea
            name="description"
            value={oeuvre.description}
            onChange={handleChange}
            placeholder="Description"
          ></textarea>

          <button className="btn" type="submit">
            Ajouter
          </button>
        </form>
      </header>
      <Footer />
    </div>
  );
}

export default AjoutOeuvre;
