import React, { Component } from "react";
import HomeNav from "../../components/HomeNav";
import Container from "../../components/Container";
import { Col, Row } from "../../components/Grid";
import Developers from "../../developer.js";
import DeveloperCard from "../../components/DeveloperCard";

class Team extends Component {
  state = {
    Developers
  };

  render() {
    return (
      <div>
        <HomeNav />
        <Container>
          <h1>Meet the Developers</h1>
          <hr />
          <Row>
            <Col size="12">
              <br></br>
              <Row>
                {this.state.Developers.map(teamMember => (
                  <Col size="lg-3 md-6 sm-12">
                    <DeveloperCard
                      key={teamMember.id}
                      image={teamMember.image}
                      name={teamMember.name}
                      role={teamMember.role}
                      portfolio={teamMember.portfolio}
                      github={teamMember.github}
                      linkedIn={teamMember.linkedIn}
                    />
                  </Col>
                ))}
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Team;
