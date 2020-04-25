import React from "react";
import "./style.css";
import HomeNav from "../../components/HomeNav";
import { Col, Row } from "../../components/Grid";
import Container from "../../components/Container";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <HomeNav />
      <Container>
        <h1>Welcome to Matrixio</h1>
        <hr />
        <Row>
          <Col size="4">Image here**</Col>
          <Col size="8">
            <Row>
              <h3></h3>
              <p>
                Online templates used for tracking speech and learning
                exercises, are really hard to find. The Matrixio team developed
                an application that allows users, of any field, to build
                alterable learning matrices for each of their students unique
                needs. Matrixio will save each students learning matrices,and
                progress, in a database for future reference and analysis.
              </p>
            </Row>
            <Row>
              <Col size="12">
                <h3>Meet The Development Team</h3>
                <br></br>
                <ul>
                  <li>Patrick Petro</li>
                  <li>Patrick Dunn</li>
                  <li>Matt Dambra</li>
                  <li>Shelby Palumbo</li>
                </ul>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row>
          <Col size="12">
            <h5>
              "Matrixio is a blessing, it solved all my matrix tracking and
              generating needs." - Some speech pathologist somewhere. **Ideally,
              we should use a quote from Trick's gf.
            </h5>
          </Col>
        </Row>
        <p>
          Temporay links: &nbsp;&nbsp;
          <Link to="/Students">Students</Link> &nbsp;
          <Link to="/UserProfile">User Profile</Link>
        </p>
      </Container>
    </div>
  );
}
export default Home;
