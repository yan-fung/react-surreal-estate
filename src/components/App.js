import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./NavBar";
import Properties from "./Properties";
import AddProperty from "./AddProperty";
import "../styles/app.css";

const App = () => {
  const [userId, setUserId] = useState("");

  const handleLogin = (response) => {
    console.log(response);
    setUserId(response.userID);
  };

  const handleLogout = () => {
    setUserId("");
    window.FB.logout();
    console.log("Log out successfully");
  };

  return (
    <div className="App">
      <NavBar onLogin={handleLogin} onLogout={handleLogout} userId={userId} />
      <Routes>
        <Route path="/" element={<Properties />} />
        <Route path="/add_property" element={<AddProperty />} />
      </Routes>
    </div>
  );
};

export default App;
