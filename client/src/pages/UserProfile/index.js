import React, { useState, useEffect } from "react";
import "./style.css";
import Container from "../../components/Container";
import { Row, Col } from "../../components/Grid";
import StudentList from "../../components/StudentList";
import NavBar from "../../components/NavBar";
import API from "../../utils/API";

function UserProfile(props) {
  const [TeacherID, setTeacherID] = useState();
  const [getTeacher, setGetTeacher] = useState(false);
  const [TeacherData, setTeacherData] = useState({});
  // const [runEffect, setRunEffect] = useState(true)

  const getID = str => {
    let newstr = str.split("=")[1];
    setTeacherID(newstr);
  };

  useEffect(() => {
    setGetTeacher(true);
    getID(window.location.href);
  });

  useEffect(() => {
    if (getTeacher) {
      API.getTeacher(TeacherID)
        .then(res => {
          setTeacherData(res.data);
        })
        .catch(err => {
          console.log(err);
        });
    } else {
      return;
    }
  }, [getTeacher]);

  return (
    <div>
      <div>{TeacherID ? <NavBar TeacherID={TeacherID} /> : null}</div>
      <Container>
        <Row>
          <Col size="12">
            <h1>Hello {TeacherData.fullName}.</h1>
            <hr />
            <div className="studentDash">
              <h3>
                My Students: <i className="fa fa-graduation-cap"></i>
              </h3>
              <StudentList TeacherID={TeacherID} />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
export default UserProfile;
