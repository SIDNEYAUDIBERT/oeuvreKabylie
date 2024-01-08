import React, { useState } from "react";
import Oeuvres from "./Oeuvres";
import Oeuvre from "./Oeuvre";
import Header from "./Header";
import Footer from "./Footer";

const Accueil = () => {
  const [selectedFilters, setSelectedFilters] = useState([]);

  const handleFilterChange = (newFilters) => {
    setSelectedFilters(newFilters);
  };
  return (
    <div>
      <Header onFilterChange={handleFilterChange} />
      <Oeuvres selectedFilters={selectedFilters} />
      <Footer />
    </div>
  );
};

export default Accueil;
