import React from "react";
import "./style.css";
import logo from "./logo.png";

function Jumbotron() {
  return (
    <div className="jumbotron jumbotron-fluid">
      <div className="jumbodisplay">
        <img src={logo} className="logo" alt="MatrixioLogo" />
        <img
          src="img/MatrixioLogoFull.png"
          alt="MatrixioLogo"
          className="logo-jumbo-bar"
        />
      </div>
    </div>
  );
}

export default Jumbotron;
