import React, { useEffect, useParams, useState } from "react";
import "./style.css";
import { Col, Row } from "../../components/Grid";
import Container from "../../components/Container";
import NavBar from "../../components/NavBar";
// import API from "../../utils/API";

// http://localhost:3000/UserProfile?=23049835897tsdkafj

function UserProfile() {
  
  const [TeacherID, setTeacherID] = useState();

  const getID = (str) => {
    let newstr = str.split("=")[1];
    setTeacherID(newstr);
  }


  useEffect(() => {getID(window.location.href)}, [])

  return (
    <div>
      <NavBar 
        TeacherID = {TeacherID}
      />
      <Container>
        <Row>
          <Col size="sm-12 lg-6">
            <h1>Hello _TeacherNameHere_</h1>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default UserProfile;
