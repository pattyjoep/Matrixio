import React, { useState, useEffect } from "react";
import "./style.css";
import Container from "../../components/Container";
import { Row, Col } from "../../components/Grid";
import StudentList from "../../components/StudentList";
import NavBar from "../../components/NavBar";

function Students(props) {
  const [TeacherID, setTeacherID] = useState();
  // const [students, setStudent] = useState();

  const getID = str => {
    let newstr = str.split("=")[1];
    setTeacherID(newstr);
  };

  useEffect(() => {
    getID(window.location.href);
  }, []);

  // console.log("Students page props ------");
  // console.log(props)
  // console.log("Students page TeacherID");
  // console.log(TeacherID)

  return (
    <div>
      <div>{TeacherID ? <NavBar TeacherID={TeacherID} /> : null}</div>
      <Container>
        <h1>Student Dashboard</h1>
        <hr />
        <Row>
          <Col size="6">
            <StudentList TeacherID={TeacherID} />
          </Col>
          <Col size="6"></Col>
        </Row>
      </Container>
    </div>
  );
}
export default Students;
