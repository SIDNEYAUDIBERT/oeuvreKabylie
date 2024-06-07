import React, { useState } from "react";
import Oeuvres from "./Oeuvres";
import Header from "./Header";
import Footer from "./Footer";

const Accueil = () => {
  return (
    <div>
      <Header />
      <Oeuvres />
      <Footer />
    </div>
  );
};

export default Accueil;
