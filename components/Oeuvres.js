import React, { useEffect, useState } from "react";
import { Oval } from "react-loader-spinner";
import Oeuvre from "./Oeuvre";
import data from "../data.json";
import { useParams } from "react-router-dom";

const Oeuvres = () => {
  const [oeuvres, setOeuvres] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { selectedFilter,recherche } = useParams();

  console.log("recherche", recherche);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const filteredOeuvres = data.oeuvres.filter((oeuvre) => {
          // Si aucun filtre n'est sélectionné, afficher toutes les œuvres
          if (selectedFilter === undefined) {
            return true;
          }

          // Vérifier si l'œuvre correspond au filtre
          const matchesFilter =
            selectedFilter === oeuvre.periode ||
            ((selectedFilter === "Peinture" ||
              selectedFilter === "Sculpture") &&
              oeuvre.categories.includes(selectedFilter));

          return matchesFilter;
        });
        

        setOeuvres(filteredOeuvres);
        setIsLoading(false);
      } catch (error) {
        console.error("Erreur lors du chargement des données:", error);
      }
    };

    fetchData();
  }, [selectedFilter]);

  return (
    <div className="container">
      {isLoading && (
        <Oval
          visible={true}
          height="100"
          width="100"
          ariaLabel="oval-loading"
          wrapperStyle={{ margin: "200px" }}
          wrapperClass="magnifying-glass-wrapper"
          glassColor="#aca5a5"
          color="black"
        />
      )}

      <div className="oeuvres-container">
        {oeuvres.map((oeuvre) => (
          <Oeuvre
            key={oeuvre.id}
            imageSrc={oeuvre.image}
            title={oeuvre.titre}
            dateCreation={oeuvre.date}
            prix={oeuvre.prix}
            periode={oeuvre.periode}
            categories={oeuvre.categories}
            id={oeuvre.id}
            slugify={oeuvre.slugify}
          />
        ))}
      </div>
    </div>
  );
};

export default Oeuvres;
