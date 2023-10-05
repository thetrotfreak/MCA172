// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App
import React, { useState } from "react";
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
    <div className="property-card-container">
      <div className="property-card-list">
        <h1>Real Estate Search</h1>
        <SearchBar handleSearch={handleSearch} />
        <PropertyList properties={properties} />
      </div>
    </div>
  );
};

export default App;
