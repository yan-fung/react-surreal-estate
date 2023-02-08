import React from "react";
import { Link } from "react-router-dom";
import homeImage from "../styles/images/home.png";
import "../styles/navbar.css";

const NavBar = () => {
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
    </div>
  );
};

export default NavBar;
