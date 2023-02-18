import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import qs from "qs";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import "../styles/sidebar.css";

const SideBar = () => {
  const { search } = useLocation();
  const [query, setquery] = useState();

  const buildQueryString = (operation, valueObj) => {
    const currentQueryParams = qs.parse(search, { ignoreQueryPrefix: true });
    // console.log("currentQueryParams: ", currentQueryParams);
    const newQueryParams = {
      ...currentQueryParams,
      [operation]: JSON.stringify({
        ...JSON.parse(currentQueryParams[operation] || "{}"),
        ...valueObj,
      }),
    };
    // console.log("newQueryParams: ", newQueryParams);

    return qs.stringify(newQueryParams, {
      addQueryPrefix: true,
      encode: false,
    });
  };

  const navigate = useNavigate();

  const handleSearch = (event) => {
    event.preventDefault();
    const newQueryString = buildQueryString("query", {
      title: { $regex: query },
    });
    navigate(newQueryString);
  };

  return (
    <div className="sidebar">
      <form className="search-box" onSubmit={handleSearch}>
        <input
          className="search-input"
          type="text"
          value={query}
          onChange={(e) => setquery(e.target.value)}
          placeholder="Search"
        />
        <button type="submit" className="button">
          <FontAwesomeIcon icon={faMagnifyingGlass} className="icon-search" />
        </button>
      </form>
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
