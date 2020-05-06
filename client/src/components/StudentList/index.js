// let's see if this comment and whitespace fixes our version control issues....



import React, { useState, useEffect } from "react";
import "./style.css";
// import { Link } from "react-router-dom";
import API from "../../utils/API";
// import GenerateMatrix from "../GenerateMatrix";
import StuListItem from "../StuListItem";

import { Modal, Button, Form } from "react-bootstrap";

function StudentList(props) {
  const [studentsArr, setStudentsArr] = useState([]);

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // const [MatrixShow, setMatrixShow] = useState(false);

  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();

  const getStudentNames = arr => {
    let stuArr = arr.map(stu => {
      return {
        _id: stu._id,
        TeacherID: stu.TeacherID,
        firstName: stu.firstName,
        lastName: stu.lastName,
        dateCreated: stu.dateCreated,
        fullName: stu.fullName,
        lastUpdated: stu.lastUpdated
      };
    });
    return stuArr;
  };

  const retrieveTeacher = (props) => {
    API.getTeacher(props.TeacherID)
      .then(teacherResult => {
        console.log("teacherResult----");
        console.log(teacherResult);
        setStudentsArr(getStudentNames(teacherResult.data.students));
      })
      .catch(err => {
        console.log(err);
      });
  };

  useEffect(() => {
    console.log("inside useEffect --------");
    console.log(props);
    retrieveTeacher(props);
    
  }, [props]);


  const saveModal = e => {
    e.preventDefault();
    console.log(`firstName: ${firstName}`);
    console.log(`lastName: ${lastName}`);

    if (!firstName || !lastName) {
      return;
    } else {
      let data = {
        TeacherID: props.TeacherID,
        firstName: firstName,
        lastName: lastName
      };
      console.log("Save Modal");
      console.log(data);
      API.createStudent(data)
        .then(res => {
          console.log("frontend dbstudent create result", res);
          
          retrieveTeacher(props);
          console.log("CREATE STUDENT RES STUDENTSARR")
          console.log(studentsArr);
        })
        .catch(err => {
          console.log(err);
        })
        .then(() => {
          setShow(false);
        });
    }
  };

  // const createAccordion = (user) => {
  //   console.log(user)
  //   API.getStudent()
  //   .then(res => {
  // console.log(res);
  //   })
  //   .catch(err => {
  //     console.log(err);
  //   })
  //   .then(() => {
  //     setShow(false);
  //   });
  // }

  return (
    <div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Student</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="StudentFirstName">
              <Form.Control
                type="text"
                value={props.firstName}
                placeholder="Student's First Name"
                onChange={e => setFirstName(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="StudentLastName">
              <Form.Control
                type="text"
                value={props.lastName}
                placeholder="Student's Last Name"
                onChange={e => setLastName(e.target.value)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="success" onClick={saveModal}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
      <div className="accordion" id="accordionExample">
        <div className="card">
          <div className="card-header student-list-header" id="headingOne">
            <h2 className="mb-0">
              {/* <button className="btn" type="button" onClick={createAccordion}>
                <a className="student-list-header-link">
                  <i className="fa fa-graduation-cap"></i> My Students
                </a>
              </button> */}
              <Button
                className="add-student-link"
                data-toggle="modal"
                onClick={handleShow}
              >
                <i className="fa fa-plus"></i>
              </Button>
            </h2>
          </div>
        </div>
        {studentsArr.map(stu => {
          return <StuListItem student={stu} key={stu._id} />;
        })}
      </div>
    </div>
  );
}

export default StudentList;
