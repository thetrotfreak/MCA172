import { useState } from "react";
import PropertyList from "./PropertyList";
import SearchBar from "./SearchBar";
import data from "./data.json";
import "./App.css";

const App = () => {
  const [properties, setProperties] = useState(data);

  const handleSearch = (searchTerm) => {
    const filteredProperties = data.filter((property) =>
      property.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setProperties(filteredProperties);
  };

  return (
    <div>
      <div className="nav">
        <h1>Real Estate </h1>
        <SearchBar handleSearch={handleSearch} />
      </div>
      <div className="property-card-container">
        <div className="property-card-list">
          <PropertyList properties={properties} />
        </div>
      </div>
    </div>
  );
};

export default App;
