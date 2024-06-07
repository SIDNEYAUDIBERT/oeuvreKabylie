import React, { useEffect, useState } from "react";
import { Oval } from "react-loader-spinner";
import Oeuvre from "./Oeuvre";
import Alert from "./Alert";
import data from "../data.json";
import { useParams } from "react-router-dom";
import { UndoIcon } from "lucide-react";

const Oeuvres = () => {
  const [oeuvres, setOeuvres] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [noData, setNoData] = useState(false);
  const { selectedFilter, recherche } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        // Si les filtres sont sélectionnés, afficher les œuvres correspondantes
        if (selectedFilter !== undefined || recherche !== undefined) {
          console.log("je suis là");
          const filteredOeuvres = data.oeuvres.filter((oeuvre) => {
            // Vérifier si l'œuvre correspond au filtre
            let matchesFilter;
            if (recherche !== undefined) {
              matchesFilter =
                oeuvre.titre.toLowerCase().includes(recherche.toLowerCase()) &&
                selectedFilter === undefined;
            } else {
              matchesFilter =
                selectedFilter === oeuvre.periode ||
                oeuvre.categories == selectedFilter;
            }
            setNoData(false);
            return matchesFilter;
          });

          if (filteredOeuvres.length === 0) {
            setNoData(true);
          }
          setOeuvres(filteredOeuvres);
          setIsLoading(false);
        }

        // Sinon afficher toutes les œuvres
        if (selectedFilter === undefined && recherche === undefined) {
          setNoData(false);
          const limitedOeuvers = {};

          data.oeuvres.forEach((oeuvre) => {
            // créer un tableau vide pour chaque période
            if (!limitedOeuvers[oeuvre.periode]) {
              limitedOeuvers[oeuvre.periode] = [];
            }
            // ajoute de pérode à chaque tableau
            if (limitedOeuvers[oeuvre.periode].length < 3) {
              limitedOeuvers[oeuvre.periode].push({ ...oeuvre });
            }
          });

          // aplatir les tableaux, créer un eseul structure de données
          const flattenedOeuvres = Object.values(limitedOeuvers).flat();

          setOeuvres(flattenedOeuvres);
          setIsLoading(false);
        }
      } catch (error) {
        console.error("Erreur lors du chargement des données:", error);
      }
    };

    fetchData();
  }, [selectedFilter, recherche]);

  return (
    <div>
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
          {noData && <Alert />}
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
    </div>
  );
};

export default Oeuvres;
