import React, { useEffect, useState } from "react";
import "./style.css";
import { Col, Row } from "../../components/Grid";
import Container from "../../components/Container";
import NavBar from "../../components/NavBar";
import API from "../../utils/API";

// http://localhost:3000/UserProfile?=23049835897tsdkafj

function UserProfile() {
  const [TeacherID, setTeacherID] = useState();
  const [UpdateFName, setUpdateFName] = useState();
  const [UpdateLName, setUpdateLName] = useState();
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
          console.log(res);
          setTeacherData(res.data);
        })
        .catch(err => {
          console.log(err);
        })
    }
    else {
      return;
    }
  }, [getTeacher])

  const deleteAccount = () => {
    let data = {
      TeacherID: TeacherID
    };
    console.log(data);

    API.deleteTeacher(data)
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
  };

  const handleSubmit = e => {
    e.preventDefault();

    let data = {
      TeacherID: TeacherID,
      firstName: UpdateFName,
      lastName: UpdateLName
    };
    console.log(data);

    API.updateTeacher(data)
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <div>
      <div>
        { TeacherID ? <NavBar TeacherID={TeacherID} /> : null }
      </div>
      
      <Container>
        <Row>
          <Col size="sm-12 lg-6">
            <h1>Hello {TeacherData.fullName}!</h1>
          </Col>
          <Row>
            {" "}
            <form onSubmit={handleSubmit}>
              <label htmlFor="fname">First name:</label>
              <br />
              <input
                type="text"
                name="fname"
                onChange={e => setUpdateFName(e.target.value)}
              />
              <br />
              <label htmlFor="lname">Last name:</label>
              <br />
              <input
                type="text"
                name="lname"
                onChange={e => setUpdateLName(e.target.value)}
              />
              <br />
              <button type="submit" className="btn login-Btn ml-auto">
                submit
              </button>
            </form>
            <br />
            <button
              type="button"
              className="btn btn-danger"
              name="deleteTeacher"
              onClick={deleteAccount}
            >
              Delete Account
            </button>
          </Row>
        </Row>
      </Container>
    </div>
  );
}

export default UserProfile;
