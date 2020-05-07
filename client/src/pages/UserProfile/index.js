import React, { useEffect, useState } from "react";
import "./style.css";
import { Col, Row } from "../../components/Grid";
import Container from "../../components/Container";
import NavBar from "../../components/NavBar";
import API from "../../utils/API";
import Moment from "react-moment";
import "moment-timezone";

// http://localhost:3000/UserProfile?=23049835897tsdkafj

function UserProfile() {
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
          console.log("userProfile get Teacher----");
          console.log(res.data);
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
            <h1>Hello {TeacherData.fullName}!</h1>
            <hr />
            <Row>
              <Col size="6">
                <div>
                  Member since: &nbsp;
                  <Moment format="MMMM DD, YYYY">
                    {TeacherData.dateCreated}
                  </Moment>
                </div>
                <br />
                <h3>Notes</h3>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default UserProfile;
