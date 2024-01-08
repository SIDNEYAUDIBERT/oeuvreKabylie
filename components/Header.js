import React, { useState } from "react";
import { Search } from 'lucide-react';
import { Link } from "react-router-dom";

const FilterButton = ({ filterName, selectedFilters, onClick }) => (
  <Link to={`/${filterName}`}>
    <button
      onClick={() => onClick(filterName)}
      className={selectedFilters.includes(filterName) ? "selectedButton" : ""}
    >
      {filterName}
    </button>
  </Link>
);
const Header = ({ onFilterChange }) => {
  const [selectedFilters, setSelectedFilters] = useState([]);
  const [selectedText, setSelectedText] = useState("");

  const handleButtonClick = (filterName) => {
    const updatedFilters = selectedFilters.includes(filterName)
      ? selectedFilters.filter((filter) => filter !== filterName)
      : [...selectedFilters, filterName];

    setSelectedFilters(updatedFilters);
    onFilterChange(updatedFilters);
  };

  const handleSearch = () => {
    // Logique de recherche à implémenter
  };

  const handleInputText = (event) => {
    setSelectedText(event.target.value);
  };

  console.log("Header", selectedFilters);

  const filters = ["Baroque", "Renaissance","Rococo","Classicisme","Peinture", "Sculpture"];

  return (
    <div className="headerContainer">
      <div className="searchBarContainer">
        <input
          onChange={handleInputText}
          type="text"
          placeholder="Search here"
          className="searchBar"
        />
        <div className="iconeContainer">
          <Search className="icone" onClick={handleSearch} />
        </div>
      </div>
      <div className="buttonContainer">
        {filters.map((filter) => (
          <FilterButton
            key={filter}
            filterName={filter}
            selectedFilters={selectedFilters}
            onClick={handleButtonClick}
          />
        ))}
      </div>
    </div>
  );
};

export default Header;
