import React, { useState, useEffect } from "react";
import Container from "../../components/Container";
import { Col, Row } from "../../components/Grid";
import NavBar from "../../components/NavBar";
import API from "../../utils/API";
// import Moment from "react-moment";
// import "moment-timezone";
import "./style.css";

function Matrices(props) {
  // console.log("studentID", StudentID);
  const [TeacherID, setTeacherID] = useState();
  const [StudentID, setStudentID] = useState();
  const [getStudent, setGetStudent] = useState(false);
  const [StudentData, setStudentData] = useState({});

  

  const getID = str => {
    let studentString = str.split("=")[1];
    let teacherString = str.split("=")[2];
    setStudentID(studentString);
    setTeacherID(teacherString);
  };

  useEffect(() => {
    getID(window.location.href);
    setGetStudent(true);
    console.log("use Effect studentID", StudentID);
  });

  useEffect(() => {
    if (getStudent) {
      API.getStudent(StudentID)
        .then(res => {
          console.log("Matrices Page----");
          console.log(res.data);
          setStudentData(res.data);
        })
        .catch(err => {
          console.log(err);
        });
    } else {
      return;
    }
  }, [getStudent]);
  console.log(StudentData._id, "STUDENT ID ON MATRIX PAGE");
  return (
    <div>
      <div>{StudentID ? <NavBar TeacherID={TeacherID} /> : null}</div>
      <Container>
        <Row>
          <Col size="12">
            <h1>{StudentData.fullName}</h1>
            <hr />
            <div className="displayAllMatrices">

            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
export default Matrices;
