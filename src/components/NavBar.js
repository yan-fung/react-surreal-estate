import React from "react";
import "../styles/navbar.css";
import homeImage from "../styles/images/home.png";

const NavBar = () => {
  return (
    <div className="navbar">
      <img src={homeImage} alt="home_image" />
      <h2>Surreal Estate</h2>
      <div className="navbar-links">
        <ul className="narbar-links-item">
          <li>
            <a href="#view_property">View Properties</a>
          </li>
          <li>
            <a href="#add_property">Add a Properties</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
