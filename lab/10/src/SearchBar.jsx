import React, { useState } from "react";
import "./SearchBar.css"; // Add this line to import the CSS file

const SearchBar = ({ handleSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
    handleSearch(e.target.value);
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search properties"
        value={searchTerm}
        onChange={handleChange}
      />
      <button className="search-button">Search</button>
    </div>
  );
};

export default SearchBar;
