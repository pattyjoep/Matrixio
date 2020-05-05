import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import Container from "../../components/Container";
import { Col, Row } from "../../components/Grid";
import NavBar from "../../components/NavBar";
import API from "../../utils/API";
import "./style.css";

function Settings() {
  const [TeacherID, setTeacherID] = useState();
  const [UpdateFName, setUpdateFName] = useState();
  const [UpdateLName, setUpdateLName] = useState();
  const [getTeacher, setGetTeacher] = useState(false);
  const [TeacherData, setTeacherData] = useState({});
  //   const [runEffect, setRunEffect] = useState(true);

  const [redirectHome, setRedirectHome] = useState(false);

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
          console.log("&&&&&I IM ON THE SETTINGS PAGE");
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

  const deleteAccount = () => {
    let data = {
      TeacherID: TeacherID
    };
    console.log(data);

    API.deleteTeacher(data)
      .then(res => {
        alert("Your account will now be permanently deleted.");
        console.log(res);
        setRedirectHome(true);
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
        window.location.reload(false);
      })
      .catch(err => {
        console.log(err);
      });
  };
  return (
    <div>
      {redirectHome ? <Redirect to="/" /> : null}
      <div>{TeacherID ? <NavBar TeacherID={TeacherID} /> : null}</div>
      <Container>
        <Row>
          <Col size="12">
            <h1>Account Settings</h1>
            <hr />
          </Col>
        </Row>
        <Row>
          <Col size="lg-6 md-12">
            <h3>Update User:</h3>
            <form className="updateForm" onSubmit={handleSubmit}>
              <label htmlFor="fname">First name:</label>
              <br />
              <input
                className="inputName"
                type="text"
                name="fname"
                onChange={e => setUpdateFName(e.target.value)}
              />
              <br />
              <label htmlFor="lname">Last name:</label>
              <br />
              <input
                className="inputName"
                type="text"
                name="lname"
                onChange={e => setUpdateLName(e.target.value)}
              />
              <br />
              <button type="submit" className="updateTeacher-Btn">
                Save Updates <i class="fas fa-pen-alt"></i>
              </button>
            </form>
          </Col>
          <Col size="lg-6 md-12">
            <h3>Remove Account:</h3>
            <button
              type="button"
              className="btn btn-danger deleteTeacher"
              name="deleteTeacher"
              onClick={deleteAccount}
            >
              <i className="fas fa-user-minus"></i> Delete my account for:{" "}
              <br />
              {TeacherData.fullName}
            </button>
            <p className="deleteWarning">
              If you click this button there is no data restoration available
              and your account will be gone forever.{" "}
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Settings;
