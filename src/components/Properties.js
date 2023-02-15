import React, { useEffect, useState } from "react";
import axios from "axios";
import PropertyCard from "./PropertyCard";
import Alert from "./Alert";
import "../styles/properties.css";

const Properties = () => {
  const [properties, setProperties] = useState([]);
  const [alert, setAlert] = useState({ message: "" });

  useEffect(() => {
    axios
      .get("http://localhost:4000/api/v1/PropertyListing")
      .then((res) => {
        setProperties(res.data);
        setAlert({ message: "" });
      })
      .catch(() => {
        setAlert({
          message: "Server error, please try again later.",
        });
      });
  }, []);

  return (
    <div className="property_header">
      <h1>View Properties</h1>
      <Alert message={alert.message} success={alert.isSuccess} />
      <div className="properties">
        {properties.map((property) => (
          <div className="item" key={property._id}>
            <PropertyCard
              key={property._id}
              title={property.title}
              bathrooms={property.bathrooms}
              bedrooms={property.bedrooms}
              type={property.type}
              price={property.price}
              email={property.email}
              city={property.city}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Properties;
