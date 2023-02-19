import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Proptypes from "prop-types";
import axios from "axios";
import PropertyCard from "./PropertyCard";
import Alert from "./Alert";
import SideBar from "./SideBar";
import "../styles/properties.css";

const Properties = ({ userID }) => {
  const [properties, setProperties] = useState([]);
  const [alert, setAlert] = useState({ message: "" });
  const { search } = useLocation();

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

  useEffect(() => {
    axios
      .get(`http://localhost:4000/api/v1/PropertyListing${search}`)
      .then(({ data }) => setProperties(data))
      .catch((err) => console.error(err));
  }, [search]);

  const handleSaveProperty = (propertyId) => {
    axios.post("http://localhost:4000/api/v1/Favourite", {
      propertyListing: propertyId,
      fbUserId: userID,
    });
    console.log("Hi");
  };

  return (
    <div className="property_header">
      <Alert message={alert.message} success={alert.isSuccess} />
      <div className="property_container">
        <div className="sidebar">
          <SideBar />
        </div>
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
                userID={userID}
                onSaveProperty={handleSaveProperty}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Properties;

Properties.propTypes = {
  userID: Proptypes.string.isRequired,
};
