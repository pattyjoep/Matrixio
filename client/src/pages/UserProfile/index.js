import React from "react";
import "./style.css";
import Container from "../../components/Container";
import NavBar from "../../components/NavBar";
import Row from "../../components/Row";
import Col from "../../components/Col";

function UserProfile() {
  return (
    <div>
      <NavBar />
      <Container>
        <Row>
          <Col size="sm-12 lg-6"></Col>
        </Row>
      </Container>
    </div>
  );
}

export default UserProfile;
