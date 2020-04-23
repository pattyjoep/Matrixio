import React from "react";
import "./style.css";
import Container from "../../components/Container";
import StudentList from "../../components/StudentList";
// import Wrapper from "../../components/Wrapper";
// import Footer from "../../components/Footer";
// import Jumbotron from "../../components/Jumbotron";
// import NavBar from "../../components/NavBar";
import Row from "../../components/Row";

function Students() {
  console.log("Students page");
  return (
    <Container>
      <Row>
        <StudentList></StudentList>
      </Row>
    </Container>
  );
}
export default Students;
