import React from "react";
import { Link, useLocation } from "react-router-dom";
import qs from "qs";
import "../styles/sidebar.css";

const SideBar = () => {
  const buildQueryString = (operation, valueObj) => {
    const { search } = useLocation();

    const currentQueryParams = qs.parse(search, { ignoreQueryPrefix: true });
    console.log("currentQueryParams", currentQueryParams);
    const newQueryParams = {
      ...currentQueryParams,
      [operation]: JSON.stringify(valueObj),
    };
    console.log("newQueryParams", newQueryParams);

    return qs.stringify(newQueryParams, {
      addQueryPrefix: true,
      encode: false,
    });
  };

  return (
    <div className="sidebar">
      <div className="sidebar_city">
        <h3>Filter by City</h3>
        <ul>
          <li>
            <Link to={buildQueryString("query", { city: "Manchester" })}>
              Manchester
            </Link>
          </li>
        </ul>
        <ul>
          <li>
            <Link to={buildQueryString("query", { city: "Leeds" })}>Leeds</Link>
          </li>
        </ul>
        <ul>
          <li>
            <Link to={buildQueryString("query", { city: "Sheffield" })}>
              Sheffield
            </Link>
          </li>
        </ul>
        <ul>
          <li>
            <Link to={buildQueryString("query", { city: "Liverpool" })}>
              Liverpool
            </Link>
          </li>
        </ul>
      </div>
      <div className="sidebar_sort">
        <h3>Sort by</h3>
        <ul>
          <li>
            <Link to={buildQueryString("sort", { price: 1 })}>
              Price ascending
            </Link>
          </li>
        </ul>
        <ul>
          <li>
            <Link to={buildQueryString("sort", { price: -1 })}>
              Price descending
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
