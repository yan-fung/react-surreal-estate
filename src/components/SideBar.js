import React from "react";
import { Link } from "react-router-dom";
import "../styles/sidebar.css";

const SideBar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <h3>Filter by City</h3>
      </div>
      <div className="sidebar_city">
        <ul>
          <li>
            <Link to={`/?query={"city": "Manchester"}`}>Manchester</Link>
          </li>
        </ul>
        <ul>
          <li>
            <Link to={`/?query={"city": "Leeds"}`}>Leeds</Link>
          </li>
        </ul>
        <ul>
          <li>
            <Link to={`/?query={"city": "Sheffield"}`}>Sheffield</Link>
          </li>
        </ul>
        <ul>
          <li>
            <Link to={`/?query={"city": "Liverpool"}`}>Liverpool</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
