import React, { useState } from "react";
import Oeuvres from "./Oeuvres";
import Header from "./Header";
import Footer from "./Footer";

const Accueil = () => {
  const [selectedFilter, setSelectedFilter] = useState();

  const handleFilterChange = (newFilter) => {
    setSelectedFilter(newFilter);
  };
  console.log("Accueil", selectedFilter);
  return (
    <div>
      <Header onFilterChange={handleFilterChange} />
      <Oeuvres selectedFilter={selectedFilter} />
    </div>
  );
};

export default Accueil;
