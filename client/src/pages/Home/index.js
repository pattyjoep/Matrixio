import React, { Component } from "react";
import "./style.css";
import HomeNav from "../../components/HomeNav";
import { Col, Row } from "../../components/Grid";
import Container from "../../components/Container";
import { Link } from "react-router-dom";
import UI from "./UI.jpg";
import Developers from "../../developer.js";
import DeveloperCard from "../../components/DeveloperCard";

class Home extends Component {
  state = {
    Developers
  };
  render() {
    return (
      <div>
        <HomeNav />
        <Container>
          <h1>Welcome to Matrixio</h1>
          <hr />
          <Row>
            <Col size="12">
              <img src={UI} className="uiImg" alt="UI" />
              <h3>Our Story</h3>
              <p>
                Online templates used for tracking speech and learning
                exercises, are really hard to find. The Matrixio team developed
                an application that allows users, of any field, to build
                alterable learning matrices for each of their students unique
                needs. Matrixio will save each students learning matrices,and
                progress, in a database for future reference and analysis.
              </p>
              <Row>
                <Col size="12">
                  <h5>
                    "Matrixio is a blessing, it solved all my matrix tracking
                    and generating needs." - Some speech pathologist somewhere.
                    **Ideally, we should use a quote from Trick's gf.
                  </h5>
                </Col>
              </Row>
              <Row>
                <Col size="12">
                  <h3>Meet The Development Team</h3>
                  <br></br>
                  <Row>
                    {this.state.Developers.map(teamMember => (
                      <Col size="lg-3 md-6 sm-12">
                        <DeveloperCard
                          key={teamMember.id}
                          image={teamMember.image}
                          name={teamMember.name}
                        />
                      </Col>
                    ))}
                  </Row>
                </Col>
              </Row>
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
}
export default Home;
