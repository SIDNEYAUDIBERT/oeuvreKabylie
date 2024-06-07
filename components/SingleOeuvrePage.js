import React, { useEffect, useState } from "react";
import data from "../data.json";
import { useParams } from "react-router-dom";
import Carousel from "./Carousel";
import Header from "./Header";
import Footer from "./Footer";

const SingleOeuvrePage = () => {
  const [oeuvre, setOeuvre] = useState(null);
  const [similarOeuvres, setSimilarOeuvres] = useState([]);
  const { slugify } = useParams();

  console.log("param:", slugify);

  useEffect(() => {
    const fetchOeuvreAndSimilar = (slugify) => {
      let found = null;
      let similarOeuvres = [];

      // Utilize the find function to find the corresponding artwork by slugify
      found = data.oeuvres.find((oeuvre) => oeuvre.slugify === slugify);

      if (found) {
        // Utilize filter to get similar artworks
        similarOeuvres = data.oeuvres.filter(
          (otherOeuvre) =>
            otherOeuvre.categories === found.categories &&
            otherOeuvre.periode === found.periode &&
            otherOeuvre.slugify !== found.slugify,
        );
      }
      return { found, similarOeuvres };
    };

    const { found, similarOeuvres } = fetchOeuvreAndSimilar(slugify);

    setOeuvre(found);
    setSimilarOeuvres(similarOeuvres);
  }, [slugify]);

  console.log("oeuvres:", oeuvre);
  console.log("similaireOeuvres:", similarOeuvres);

  return (
    <div>
      <Header />
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
        <p className="subTitle">{oeuvre && oeuvre.description}</p>
      </div>
      <div>
        <div className="container">
          <h2 className="titre-section">Oeuvres similaires</h2>
          <Carousel oeuvres={similarOeuvres} />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SingleOeuvrePage;
