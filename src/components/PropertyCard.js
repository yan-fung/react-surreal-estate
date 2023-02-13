import React from "react";
import Proptypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBed,
  faBath,
  faSterlingSign,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import "../styles/property-card.css";
import logo from "../styles/images/homelogo.png";

const PropertyCard = ({
  title,
  type,
  bathrooms,
  bedrooms,
  price,
  city,
  email,
}) => {
  return (
    <div className="property-card">
      <div className="property-card-container">
        <div className="property-card__logo">
          <img src={logo} alt="logo" width="30px" height="25px" />
        </div>
        <div className="property-card__title">{title}Two beds house</div>
        <div className="property-card__type__city">
          {type} - {city}
        </div>
        <div className="property-card_bathrooms">
          <FontAwesomeIcon icon={faBath} />
          {bathrooms} Bathrooms:
        </div>
        <div className="property-card_bedrooms">
          <FontAwesomeIcon icon={faBed} className="bedIcon" />
          {bedrooms} Bedrooms:
        </div>
        <div className="property-card_price">
          <FontAwesomeIcon icon={faSterlingSign} />
          {price}
        </div>
        <div className="property-card__email">
          <FontAwesomeIcon icon={faEnvelope} />
          {email} Email:
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;

PropertyCard.propTypes = {
  title: Proptypes.string.isRequired,
  type: Proptypes.string.isRequired,
  bathrooms: Proptypes.string.isRequired,
  bedrooms: Proptypes.string.isRequired,
  price: Proptypes.string.isRequired,
  city: Proptypes.string.isRequired,
  email: Proptypes.string.isRequired,
};
