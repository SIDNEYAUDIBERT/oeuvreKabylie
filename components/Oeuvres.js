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

    console.log("recherche", recherche);
    console.log("selectedFilter", selectedFilter);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setIsLoading(true);
                const filteredOeuvres = data.oeuvres.filter((oeuvre) => {
                    // Si aucun filtre n'est sélectionné, afficher toutes les œuvres

                    if (
                        selectedFilter === undefined &&
                        recherche === undefined
                    ) {
                        return true;
                    }

                    // Vérifier si l'œuvre correspond au filtre
                    const matchesFilter =
                        (oeuvre.titre.toLocaleLowerCase().includes(recherche.toLocaleLowerCase()) &&
                            selectedFilter === undefined) ||
                        selectedFilter === oeuvre.periode ||
                        oeuvre.categories == selectedFilter;
                        setNoData(false);
                    return matchesFilter;
                });

                setOeuvres(filteredOeuvres);
                setIsLoading(false);

                if (filteredOeuvres.length === 0) {
                    setNoData(true);
                }
            } catch (error) {
                console.error("Erreur lors du chargement des données:", error);
            }
        };

        fetchData();
    }, [selectedFilter, recherche]);

    console.log("noData", noData);

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
