import React, { useState } from "react";
import { Button, TableHead } from "@material-ui/core";
import "react-dropdown/style.css";

const Header = () => {
  const [selectedFilters, setselectedFilters] = useState([]);
  const [selectedText, setselectedText] = useState("");

  const handleButtonClick = (filterName) => {
    if (selectedFilters.includes(filterName)) {
      setselectedFilters(
        selectedFilters.filter((filter) => filter !== filterName)
      );
    } else {
      setselectedFilters([...selectedFilters, filterName]);
    }
  };

  const handleInputText = (event) => {
    setselectedText(event.target.value);
  };

  console.log("Selected filter :", selectedFilters);
  console.log("Selected text :", selectedText);

  return (
    <div className="tableHead">
      <div className="searchBarContainer">
        <input
          onChange={handleInputText}
          type="text"
          placeholder="Search here"
          className="searchBar"
        />
      </div>
      <TableHead style={{ display: "flex", alignItems: "center" }}>
        <Button
          onClick={() => handleButtonClick("Baroque")}
          className={
            selectedFilters.includes("Baroque") ? "selectedButton" : ""
          }
        >
          Baroque
        </Button>
        <Button
          onClick={() => handleButtonClick("Renaissance")}
          className={
            selectedFilters.includes("Renaissance") ? "selectedButton" : ""
          }
        >
          Renaissance
        </Button>
        <Button
          onClick={() => handleButtonClick("Peinture")}
          className={
            selectedFilters.includes("Peinture") ? "selectedButton" : ""
          }
        >
          Peinture
        </Button>
        <Button
          onClick={() => handleButtonClick("Sculpture")}
          className={
            selectedFilters.includes("Sculpture") ? "selectedButton" : ""
          }
        >
          Sculpture
        </Button>
      </TableHead>
    </div>
  );
};

export default Header;
