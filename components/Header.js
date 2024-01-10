import React, { useState } from "react";
import { Search } from "lucide-react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const FilterButton = ({ filterName, selectedFilter, onClick }) => (
  <Link to={`/${filterName}`}>
    <button
      onClick={() => onClick(filterName)}
      className={`filterButton ${
        selectedFilter === filterName ? "selectedButton" : ""
      }`}
    >
      {filterName}
    </button>
  </Link>
);

const Header = () => {
  const [selectedFilter, setSelectedFilter] = useState("");
  const [selectedText, setSelectedText] = useState("");

  const navigate = useNavigate();

  const handleButtonClick = (filterName) => {
    setSelectedFilter(filterName);
  };

  const handleSearch = () => {
    navigate(`/recherche/${selectedText}`);
  };

  const handleInputText = (event) => {
    setSelectedText(event.target.value);
  };

  console.log("Header", selectedFilter);

  const filters = [
    "Baroque",
    "Renaissance",
    "Rococo",
    "Classicisme",
    "Peinture",
    "Sculpture",
  ];

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
            selectedFilter={selectedFilter}
            onClick={handleButtonClick}
          />
        ))}
      </div>
    </div>
  );
};

export default Header;
