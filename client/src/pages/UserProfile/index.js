import React, { useEffect, useParams, useState } from "react";
import "./style.css";
import { Col, Row } from "../../components/Grid";
import Container from "../../components/Container";
import NavBar from "../../components/NavBar";
// import API from "../../utils/API";

function UserProfile(props) {
  return (
    <div>
      <NavBar />
      <Container>
        <Row>
          <Col size="sm-12 lg-6">
            <h1>Hello </h1>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default UserProfile;
