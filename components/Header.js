import React, { useState } from "react";
import { TableHead } from "@material-ui/core";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";

const Header = () => {
  const optionsCategorie = ["Peinture", "Sculpture"];
  const optionsEpoque = ["Baroque", "Renaissance"];
  const names = ["CATEGORIE", "EPOQUE"];

  const [selectedCategorie, setSelectedCategorie] = useState("");
  const [selectedEpoque, setSelectedEpoque] = useState("");

  const handleDropdownChange = (name, selectedOption) => {
    if (name === "CATEGORIE") {
      setSelectedCategorie(selectedOption.value);
    } else if (name === "EPOQUE") {
      setSelectedEpoque(selectedOption.value);
    }
  };

  console.log("Selected Categorie:", selectedCategorie);
  console.log("Selected Epoque:", selectedEpoque);

  return (
    <div className="tableHead">
      <div className="searchBarContainer">
        <input type="text" placeholder="Search here" className="searchBar" />
      </div>
      <TableHead style={{ display: "flex", alignItems: "center" }}>
        {names.map((name, index) => (
          <Dropdown
            key={index}
            options={name === "CATEGORIE" ? optionsCategorie : optionsEpoque}
            value={name === "CATEGORIE" ? selectedCategorie : selectedEpoque}
            placeholder={`${name}`}
            onChange={(selectedOption) =>
              handleDropdownChange(name, selectedOption)
            }
            style={{ margin: "0 10px" }}
          />
        ))}
      </TableHead>
    </div>
  );
};

export default Header;
