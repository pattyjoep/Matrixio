import React from "react";
import "./style.css";
import Container from "../../components/Container";
import StudentList from "../../components/StudentList";
import Jumbotron from "../../components/Jumbotron";
import NavBar from "../../components/NavBar";
import Row from "../../components/Row";

function Students() {
  console.log("Students page");
  return (
    <div>
      <Jumbotron />
      <NavBar />
      <Container>
        <Row>
          <StudentList></StudentList>
        </Row>
      </Container>
    </div>
  );
}
export default Students;
