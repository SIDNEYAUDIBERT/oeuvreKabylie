import React, { useEffect, useState } from "react";
import data from "../data.json";
import { useParams } from "react-router-dom";
import Carousel from "./Carousel";

const SingleOeuvrePage = () => {
    const [oeuvre, setOeuvre] = useState(null);
    const [similarOeuvres, setSimilarOeuvres] = useState([]);
    const { id } = useParams();

    console.log("id", id);

    useEffect(() => {
        const fetchOeuvreAndSimilar = (id) => {
            let foundOeuvre = null;
            let similarOeuvres = [];

            for (const periode of data.oeuvres) {
                const { periode: nom, oeuvres } = periode;

                // Utilize the find function to find the corresponding artwork by id
                const found = data.oeuvres.find((oeuvre) => oeuvre.id === id);

                if (found) {
                    foundOeuvre = { ...found, periode: nom };

                    // Utilize filter to get similar artworks
                    similarOeuvres = data.oeuvres
                        .filter(
                            (oeuvre) =>
                                oeuvre.categories === found.categories &&
                                oeuvre.id !== id
                        )
                        .map(({ id, titre, artiste, image, prix, date }) => ({
                            id,
                            titre,
                            artiste,
                            image,
                            date,
                            prix
                        }));
                }
            }

            return { foundOeuvre, similarOeuvres };
        };

        const { foundOeuvre, similarOeuvres } = fetchOeuvreAndSimilar(id);

        setOeuvre(foundOeuvre);
        setSimilarOeuvres(similarOeuvres);
    }, [id]);

    console.log(oeuvre);
    console.log(similarOeuvres);

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
