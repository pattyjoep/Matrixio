import React, { useState, useEffect } from "react";
import Container from "../../components/Container";
import { Col, Row } from "../../components/Grid";
import NavBar from "../../components/NavBar";
import API from "../../utils/API";
// import Moment from "react-moment";
// import "moment-timezone";
import "./style.css";

function Matrices(props) {
  const [StudentID, setStudentID] = useState();
  const [getStudent, setGetStudent] = useState(false);
  const [StudentData, setStudentData] = useState({});

  const getID = str => {
    let newstr = str.split("=")[1];
    setStudentID(newstr);
  };

  useEffect(() => {
    setGetStudent(true);
    getID(window.location.href);
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
      <div>{StudentID ? <NavBar StudentID={StudentID} /> : null}</div>
      <Container>
        <Row>
          <Col size="12">
            <h1>StudentsName_Matrices</h1>
            <hr />
            <div className="displayAllMatrices"></div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
export default Matrices;
