import React from "react";
import { Link } from "react-router-dom";

const Oeuvre = ({
  imageSrc,
  title,
  dateCreation,
  prix,
  periode,
  slugify,
  categories,
}) => {
  return (
    <div className="oeuvre-card">
      <Link to={`/oeuvre/${slugify}`} className="custom-link">
        <img src={imageSrc} alt="Oeuvre d'art" className="oeuvre-image" />
        <div className="oeuvre-details">
          <h2>{title}</h2>
          <p>Date de création : {dateCreation}</p>
          <p>Prix : {prix}</p>
          <p>Période : {periode}</p>
        </div>
      </Link>
    </div>
  );
};

export default Oeuvre;
