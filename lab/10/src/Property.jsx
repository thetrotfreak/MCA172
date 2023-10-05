import React, { useState } from "react";
import numeral from "numeral";
import "./Property.css"; // Add this line to import the CSS file

const Property = ({ property }) => {
  const [showDetails, setShowDetails] = useState(false);

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  const formatPrice = (price) => {
    if (price >= 10000000) {
      return numeral(price / 10000000).format("0.00a") + " CR";
    } else if (price >= 100000) {
      return numeral(price / 100000).format("0.00a") + " L";
    } else {
      return price;
    }
  };

  return (
    <div className="property-card">
      <h3>{property.name}</h3>
      <p>Location: {property.location}</p>
      <p>Price: {formatPrice(property.price)}</p>
      {showDetails && <p>{property.description}</p>}
      <button className="more-details" onClick={toggleDetails}>
        More Details
      </button>
    </div>
  );
};

export default Property;
