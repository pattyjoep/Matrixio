import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./style.css";
import API from "../../utils/API";

function NavBar(props) {
  const [TeacherID, setTeacherID] = useState();

  useEffect(() => {
    API.getTeacher(props.TeacherID)
        .then(res => {
          console.log("Navbar get Teacher----");
          console.log(res.data);
          setTeacherID(res.data._id);
        })
        .catch(err => {
          console.log(err);
        })
  }, [TeacherID]);

  // console.log(`Navbar props ${JSON.stringify(props)}`);

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
              <Link className="nav-link main" to={`/UserProfile?=${TeacherID}`}>
                <i className="fa fa-user"></i> My Profile
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link main"
                to={`/Students?=${TeacherID}`}
              >
                <i className="fa fa-graduation-cap"></i> My Students
              </Link>
            </li>
          </ul>
          <ul className="navbar-nav ml-auto">
            {/* <li className="nav-item">
              <button className="nav-link main" href="#">
                <i className="fa fa-cog icon-settings"> Settings</i>
              </button>
            </li> */}
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
