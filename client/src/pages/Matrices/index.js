import React, { useState, useEffect } from "react";
import Container from "../../components/Container";
import { Col, Row } from "../../components/Grid";
import NavBar from "../../components/NavBar";
import API from "../../utils/API";
// import Moment from "react-moment";
// import "moment-timezone";
import "./style.css";

function Matrices(props) {
  const [TeacherID, setTeacherID] = useState();
  const [StudentID, setStudentID] = useState();
  const [getStudent, setGetStudent] = useState(false);
  const [StudentData, setStudentData] = useState({});

  console.log("MATRICES PAGE PROPS", props);

  const getID = str => {
    let studentString = str.split("=")[1];
    let teacherString = str.split("=")[2];
    setStudentID(studentString);
    setTeacherID(teacherString);
  };

  useEffect(() => {
    setGetStudent(true);
    getID(window.location.href);
  });

  useEffect(() => {
    if (getStudent) {
      API.getStudent(StudentID)
        .then(res => {
          setStudentData(res.data);
          console.log("STUDENT RES.DATA", res.data);
        })
        .catch(err => {
          console.log(err);
        });
    } else {
      return;
    }
  }, [getStudent]);
  console.log("STUDENT DATA matrix page", StudentData);
  return (
    <div>
      <div>{StudentID ? <NavBar TeacherID={TeacherID} /> : null}</div>
      <Container>
        <Row>
          <Col size="12">
            <h1>{StudentData.fullName}</h1>
            <hr />
            Map through Students matrcies, delete matrices.{StudentData}
          </Col>
        </Row>
      </Container>
    </div>
  );
}
export default Matrices;
