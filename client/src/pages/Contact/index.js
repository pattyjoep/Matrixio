import React from "react";
import { Col, Row } from "../../components/Grid";
import HomeNav from "../../components/HomeNav";
import Container from "../../components/Container";
import UI from "./images/UI.jpg";
import "./style.css";

function Contact() {
  return (
    <div>
      <HomeNav />
      <Container>
        <h1>Contact Us</h1>
        <hr />
        <Row>
          <Col size="lg-6 md-12">
            <img src={UI} className="uiImg" alt="UI" />
          </Col>
          <Col size="lg-6 md-12">
            <ul>
              <li className="contactList">
                <i className="fas fa-phone-alt"></i> (860)-867-5309
              </li>
              <li className="contactList">
                <i class="fas fa-envelope-square"></i> matrixio@gmail.com
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Contact;
