import React from "react";
import FacebookLogin from "react-facebook-login";
import { FaFacebookF } from "react-icons/fa";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import homeImage from "../styles/images/home.png";
import "../styles/navbar.css";

const NavBar = ({ onLogin, onLogout, userId }) => {
  return (
    <div className="navbar">
      <img src={homeImage} alt="home_image" />
      <ul className="navbar-links">
        <li className="narbar-links-item">
          <Link className="narbar-links__text" to="/">
            View Properties
          </Link>
        </li>
        <li className="narbar-links-item">
          <Link className="narbar-links__text" to="/add_property">
            Add Properties
          </Link>
        </li>
      </ul>
      {userId ? (
        <button className="sign-out-btn" type="button" onClick={onLogout}>
          Sign out
        </button>
      ) : (
        <div className="fb-login">
          <FacebookLogin
            appId="813549316783868"
            callback={onLogin}
            userId={userId}
            cssClass="my-facebook-button-class"
            icon={<FaFacebookF className="fb-icon" />}
          />
        </div>
      )}
    </div>
  );
};

export default NavBar;

NavBar.propTypes = {
  onLogin: PropTypes.func.isRequired,
  onLogout: PropTypes.func.isRequired,
  userId: PropTypes.string.isRequired,
};
