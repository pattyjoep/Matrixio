import React from "react";
import "./style.css";
import Container from "../../components/Container";
import { Row } from "../../components/Grid";
import StudentList from "../../components/StudentList";
import NavBar from "../../components/NavBar";

function Students() {
  console.log("Students page");
  return (
    <div>
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
