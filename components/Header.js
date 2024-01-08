import React, { useState } from "react";

const Header = ({ onFilterChange }) => {
  const [selectedFilters, setselectedFilters] = useState([]);
  const [selectedText, setselectedText] = useState("");

  const handleButtonClick = (filterName) => {
    setselectedFilters((prevFilters) => {
      const updatedFilters = prevFilters.includes(filterName)
        ? prevFilters.filter((filter) => filter !== filterName)
        : [...prevFilters, filterName];

      onFilterChange(updatedFilters);

      return updatedFilters;
    });
  };

  const handleInputText = (event) => {
    setselectedText(event.target.value);
  };

  console.log("Header", selectedFilters);

  return (
    <div className="headerContainer">
      <div className="searchBarContainer">
        <input
          onChange={handleInputText}
          type="text"
          placeholder="Search here"
          className="searchBar"
        />
      </div>
      <div className="buttonContainer">
        <button
          onClick={() => handleButtonClick("Baroque")}
          className={
            selectedFilters.includes("Baroque") ? "selectedButton" : ""
          }
        >
          Baroque
        </button>
        <button
          onClick={() => handleButtonClick("Renaissance")}
          className={
            selectedFilters.includes("Renaissance") ? "selectedButton" : ""
          }
        >
          Renaissance
        </button>
        <button
          onClick={() => handleButtonClick("Peinture")}
          className={
            selectedFilters.includes("Peinture") ? "selectedButton" : ""
          }
        >
          Peinture
        </button>
        <button
          onClick={() => handleButtonClick("Sculpture")}
          className={
            selectedFilters.includes("Sculpture") ? "selectedButton" : ""
          }
        >
          Sculpture
        </button>
        <button
          onClick={() => handleButtonClick("Rococo")}
          className={selectedFilters.includes("Rococo") ? "selectedButton" : ""}
        >
          Rococo
        </button>
      </div>
    </div>
  );
};

export default Header;
