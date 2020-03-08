import React from "react";
import "./App.css";

import Nasa from "./components/Nasa.js";
import logo from "./images/logo.png";

function App() {
  return (
    <div className="App">
     <div className="logo-container">
       <div className="logo" src={logo} alt="Nasa Logo"/>
       <Nasa />
     </div>
    </div>
  );
}

export default App;
