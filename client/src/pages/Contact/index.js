import React from "react";
import { Col, Row } from "../../components/Grid";
import HomeNav from "../../components/HomeNav";
import Container from "../../components/Container";
import "./style.css";

function Contact() {
  return (
    <div>
      <HomeNav />
      <Container>
        <h1>Contact Us</h1>
        <hr />
        <Row>
          <Col size="lg-5 md-12">
            <ul>
              <li className="contactList">
                <i className="fas fa-phone-alt"></i> (860)-867-5309
              </li>
              <li className="contactList">
                <i className="fas fa-envelope-square"></i> matrixio@gmail.com
              </li>
            </ul>

            <form
              className="contact-form"
              action="mailto:shelbypalumbo94@gmail.com"
              method="post"
              type="text/plain"
            >
              Name:<br></br>
              <input type="text" className="name" name="name" />
              <br></br>
              E-mail:<br></br>
              <input type="text" className="mail" name="mail" />
              <br></br>
              Message:<br></br>
              <input className="messagebox" type="text" name="comment" />
              <br></br>
              <input className="contact-btn" type="submit" value="Submit" />
              <input className="contact-btn" type="reset" value="Reset" />
            </form>
          </Col>
          <Col size="lg-6 md-12">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2976.0424397572547!2d-72.67467088487466!3d41.76274277923146!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e65368e4f640bf%3A0xc2e91af17922394f!2sUConn%20Hartford!5e0!3m2!1sen!2sus!4v1588390097880!5m2!1sen!2sus"
              className="location-map"
              title="map"
              aria-hidden="false"
            ></iframe>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Contact;
