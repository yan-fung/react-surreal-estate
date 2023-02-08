import React from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./NavBar";
import Properties from "./Properties";
import AddProperty from "./AddProperty";
import "../styles/app.css";

const App = () => {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Properties />} />
        <Route path="/add_property" element={<AddProperty />} />
      </Routes>
    </div>
  );
};

export default App;
