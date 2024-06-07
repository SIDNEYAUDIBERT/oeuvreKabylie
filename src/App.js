import React from "react";
import "./style.scss";
import { Route, Routes } from "react-router-dom";
import Accueil from "../components/Accueil";
import SingleOeuvrePage from "../components/SingleOeuvrePage";
import Contact from "../components/Contact";
import AjoutOeuvre from "../components/AjoutOeuvre";

function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Accueil />} />
        <Route exact path="/:selectedFilter" element={<Accueil />} />
        <Route exact path="/recherche/:recherche" element={<Accueil />} />
        <Route path="/oeuvre/:slugify" element={<SingleOeuvrePage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/ajoutOeuvre" element={<AjoutOeuvre />} />
      </Routes>
    </div>
  );
}

export default App;
