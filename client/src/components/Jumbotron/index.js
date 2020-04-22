import React from "react";
import "./style.css";

function Jumbotron() {
  return (
    <div className="jumbotron jumbotron-fluid">
      <div className="jumbodisplay">
        <img
          src="img/MatrixioLogoFull.png"
          alt="MatrixioLogo"
          className="logo-nav-bar"
        />
        {/* <img src="img/MatrixioLogoSolo.png" className="solo-logo-nav-bar" /> */}
        {/* <img src="img/MatrixioLogoText.png" className="logo-nav-bar" /> */}
      </div>
    </div>
  );
}

export default Jumbotron;
