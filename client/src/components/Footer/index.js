import React from "react";
import "./style.css";
import logo from "./MatrixioLogoSolo.png";

function Footer() {
  return (
    <footer>
      <div className="footer">
        <img className="footer-logo" src={logo} />
        &nbsp;&nbsp;
        <span>
          &#169; Matrixio 2020 &nbsp; <i className="fab fa-facebook"></i> &nbsp;{" "}
          <i className="fab fa-instagram"></i>&nbsp; &nbsp; (860)-867-5309
        </span>{" "}
        &nbsp;&nbsp;
        <img className="footer-logo" src={logo} />
      </div>
    </footer>
  );
}

export default Footer;
