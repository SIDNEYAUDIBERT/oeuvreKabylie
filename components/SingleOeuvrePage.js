import React, { useEffect, useState } from "react";
import data from "../data.json";
import { useParams } from "react-router-dom";
import Carousel from "./Carousel";

const SingleOeuvrePage = () => {
    const [oeuvre, setOeuvre] = useState(null);
    const [similarOeuvres, setSimilarOeuvres] = useState([]);
    const { slugify } = useParams();



    useEffect(() => {
        
        const fetchOeuvreAndSimilar = (slugify) => {
            let foundOeuvre = null;
            let similarOeuvres = [];
    
            // Utilize the find function to find the corresponding artwork by slugify
            const found = data.oeuvres.find((oeuvre) => oeuvre.slugify === slugify);
    
            if (found) {
                foundOeuvre = { ...found, periode: found.periode };
    
                // Utilize filter to get similar artworks
                similarOeuvres = data.oeuvres
                    .filter(
                        (otherOeuvre) =>
                            otherOeuvre.categories === found.categories &&
                            otherOeuvre.periode === found.periode &&
                            otherOeuvre.slugify !== found.slugify
                    )
                    .map(({ id, titre, artiste, image, prix, date,slugify }) => ({
                        id,
                        titre,
                        artiste,
                        image,
                        slugify,
                        date,
                        prix
                    }));
            }
            return { foundOeuvre, similarOeuvres };
        };
    
        const { foundOeuvre, similarOeuvres } = fetchOeuvreAndSimilar(slugify);
    
        setOeuvre(foundOeuvre);
        setSimilarOeuvres(similarOeuvres);
    }, [slugify]);

  
    return (
        <div>
            <div className="containerOeuvre">
                <div className="imageContent">
                    {oeuvre && <img src={oeuvre.image} alt={oeuvre.titre} />}
                </div>
                <div className="detailContent">
                    {oeuvre && (
                        <div>
                            <h1>{oeuvre.titre}</h1>
                            <hr className="separator" />
                            <div className="detailRow">
                                <div className="leftRow">
                                    <p className="title">Artiste: </p>
                                    <p className="subTitle">{oeuvre.artiste}</p>
                                </div>
                                <div className="rightRow">
                                    <p className="title">Date: </p>
                                    <p className="subTitle">{oeuvre.date}</p>
                                </div>
                            </div>
                            <div className="detailRow">
                                <div className="leftRow">
                                    <p className="title">Période: </p>
                                    <p className="subTitle">{oeuvre.periode}</p>
                                </div>
                                <div className="rightRow">
                                    <p className="title">prix: </p>
                                    <p className="subTitle">{oeuvre.prix} €</p>
                                </div>
                            </div>
                            <div className="detailRow"></div>
                        </div>
                    )}
                </div>
            </div>
            <div className="descriptionContent">
                <p className="title">Description: </p>
                <p className="subTitle">{ oeuvre && oeuvre.description}</p>
            </div>
            <div>
                <div className="container">
                    <h2 className="titre-section">Oeuvres similaires</h2>
                    <Carousel oeuvres={similarOeuvres} />
                </div>
            </div>
        </div>
    );
};

export default SingleOeuvrePage;
