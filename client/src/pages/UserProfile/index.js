import React, { useEffect, useParams, useState } from "react";
import "./style.css";
import { Col, Row } from "../../components/Grid";
import Container from "../../components/Container";
import NavBar from "../../components/NavBar";
// import API from "../../utils/API";

// http://localhost:3000/UserProfile?=23049835897tsdkafj

function UserProfile() {
  const [TeacherID, setTeacherID] = useState();

  const getID = str => {
    let newstr = str.split("=")[1];
    setTeacherID(newstr);
  };

  useEffect(() => {
    getID(window.location.href);
  }, []);

  const handleSubmit = e => {
    e.preventDefault();
  };
  return (
    <div>
      <NavBar TeacherID={TeacherID} />
      <Container>
        <Row>
          <Col size="sm-12 lg-6">
            <h1>Hello _TeacherNameHere_</h1>
          </Col>
          <Row>
            {" "}
            <form onSubmit={handleSubmit}>
              <label for="fname">First name:</label>
              <br />
              <input type="text" name="fname" />
              <br />
              <label for="lname">Last name:</label>
              <br />
              <input type="text" name="lname" />
              <br />
              <button type="submit" className="btn login-Btn ml-auto">
                submit
              </button>
            </form>
          </Row>
        </Row>
      </Container>
    </div>
  );
}

export default UserProfile;
