import React from "react";
import Proptypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBed,
  faBath,
  faSterlingSign,
  faEnvelope,
  faLocationDot,
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
        <div className="property-card__title">{title}</div>
        <div className="property-card__type__city">
          <FontAwesomeIcon icon={faLocationDot} className="icon-location" />
          {type} - {city}
        </div>
        <div
          className="property-card_bathrooms"
          data-testid="property-bathrooms"
        >
          <FontAwesomeIcon icon={faBath} className="icon" />
          Bathrooms: {bathrooms}
        </div>
        <div className="property-card_bedrooms">
          <FontAwesomeIcon icon={faBed} className="icon" />
          Bedrooms: {bedrooms}
        </div>
        <div className="property-card_price">
          <FontAwesomeIcon icon={faSterlingSign} className="icon-price" />
          {price}
        </div>
        <div className="property-card__email">
          <a href={`mailto:${email}`} className="email">
            <FontAwesomeIcon icon={faEnvelope} className="icon-email" />
            Email
          </a>
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
