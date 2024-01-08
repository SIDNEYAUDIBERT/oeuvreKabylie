import React from "react";
import "./style.scss";
import { Route, Routes } from "react-router-dom";
import Accueil from "../components/Accueil";
import SingleOeuvrePage from "../components/SingleOeuvrePage";
import Carousel from "../components/Carousel";

function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Accueil />} />
        <Route path="/oeuvre/:slugify" element={<SingleOeuvrePage />} />
      </Routes>
    </div>
  );
}

export default App;
