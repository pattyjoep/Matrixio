import React from "react";
import "./style.css";
import Container from "../../components/Container";
import Jumbotron from "../../components/Jumbotron";
import HomeNav from "../../components/HomeNav";
import Col from "../../components/Col";
import Row from "../../components/Row";

function Home() {
  return (
    <div>
      <Jumbotron />
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
                an application that allows users of any field to build alterable
                learning matrices for each of their students unique needs.
                Matrixio will save every students learning template, and their
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
          <h5>**Fake User Quote?</h5>
        </Row>
      </Container>
    </div>
  );
}
export default Home;
