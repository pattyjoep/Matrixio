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
        <h1>Welcome to Matrixio!</h1>
        <hr />
        <Row>
          <Col size="8">
            <p>
              Online templates used for tracking speech and learning exercises,
              are really hard to find. Matrixio allows users in any field to
              build alterable learning matrices suited for any students unique
              needs. Matrixio will save each students learning template, and
              their progress, in a database allowing the user/client to refer to
              the students for future analysis.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
export default Home;
