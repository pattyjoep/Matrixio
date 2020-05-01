import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function NavBar(props) {
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
              <Link className="nav-link main" to="/UserProfile">
                <i className="fa fa-user"></i> My Profile
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link main"
                to={`/Students?=${props.TeacherID}`}
              >
                <i className="fa fa-graduation-cap"></i> My Students
              </Link>
            </li>
            <li className="nav-item dropdown">
              <button
                className="main dropdown-toggle"
                href="#"
                id="navbarDropdown"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <i className="fa fa-plus"></i> Add
              </button>
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
              <button className="nav-link main" href="#">
                <i className="fa fa-cog icon-settings"> Settings</i>
              </button>
            </li>
            <li className="nav-item">
              <Link className="nav-link main" to="/">
                <i className="fas fa-sign-out-alt"> Logout</i>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
