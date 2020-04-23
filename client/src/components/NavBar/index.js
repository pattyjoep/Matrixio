import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function NavBar() {
  return (
    <div>
      {/* <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <img src="img/MatrixioLogoFull.png" className="logo-nav-bar" />
        <img src="img/MatrixioLogoSolo.png" className="solo-logo-nav-bar" />
        <img src="img/MatrixioLogoText.png" className="logo-nav-bar" />
      </nav>  */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark tab-bar">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link className="nav-link link-nav" to="/UserProfile">
                <i className="fa fa-user"></i> My Profile
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link link-nav" to="/Students">
                <i className="fa fa-graduation-cap"></i> My Students
              </Link>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle link-nav"
                href="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <i className="fa fa-plus"></i> Add
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <Link className="dropdown-item" to="/TrainingMatrices">
                  Training Matrix
                </Link>
                <div className="dropdown-divider"></div>
                <Link className="dropdown-item" to="/Students">
                  Students
                </Link>
              </div>
            </li>
          </ul>
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a className="nav-link" href="#">
                <i className="fa fa-cog fa-2x icon-settings"></i>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
