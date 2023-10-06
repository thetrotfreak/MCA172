import { useState } from "react";
import "./SearchBar.css";
import "./index.css";

const SearchBar = ({ handleSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
    handleSearch(e.target.value);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search properties"
        value={searchTerm}
        onChange={handleChange}
      />
    </div>
  );
};

export default SearchBar;
