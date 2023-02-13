import React from "react";
import Proptypes from "prop-types";
import "../styles/alert.css";
import checkIcon from "../styles/images/check-icon.png";
import errorIcon from "../styles/images/error-icon.png";

const Alert = ({ message, success }) => {
  if (!message) {
    return null;
  }

  return (
    <div className={`alert-${success ? "success" : "error"}`}>
      {message === "Property added." ? (
        <img
          style={{ height: "30px", width: "30px", background: "transparent" }}
          alt="check"
          src={checkIcon}
        />
      ) : (
        <img
          style={{ height: "30px", width: "30px", background: "transparent" }}
          alt="error"
          src={errorIcon}
        />
      )}
      {message}
    </div>
  );
};

export default Alert;

Alert.defaultProps = {
  success: false,
};

Alert.propTypes = {
  message: Proptypes.string.isRequired,
  success: Proptypes.bool,
};
