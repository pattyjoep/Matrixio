import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function HomeNav() {
  return (
    <div>
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
              <Link className="nav-link home-nav" to="/">
                <i className="fas fa-home"></i> &nbsp;Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link home-nav" to="/Team">
                <i className="fas fa-users"></i> &nbsp;Matrixio Team
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link home-nav" to="/Contact">
                <i className="far fa-hand-paper"></i> &nbsp;Contact
              </Link>
            </li>
          </ul>

          <Link className="nav-link home-nav" to="/Login">
            <i className="fas fa-door-open"></i> Log in
          </Link>

          <Link className="nav-link home-nav" to="/Signup">
            <i className="fas fa-user-plus"></i> SignUp
          </Link>
        </div>
      </nav>
    </div>
  );
}

export default HomeNav;
