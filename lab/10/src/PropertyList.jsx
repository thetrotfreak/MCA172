import React from "react";
import Property from "./Property";
import "./PropertyList.css";

const PropertyList = ({ properties }) => {
  return (
    <div className="property-list">
      {properties.map((property) => (
        <Property key={property.id} property={property} />
      ))}
    </div>
  );
};

export default PropertyList;
