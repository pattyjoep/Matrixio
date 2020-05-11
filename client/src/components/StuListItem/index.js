import React, { useState } from "react";
import { Link } from "react-router-dom";
import API from "../../utils/API";
import { Modal, Card, Accordion, Button, Form } from "react-bootstrap";
import Moment from "react-moment";
import "moment-timezone";
import GenerateMatrix from "../GenerateMatrix";

function StuListItem(props) {
  console.log("StuListItem props", props);

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();

  // Two events in one onClick----------------
  const newMatrixOnClick = () => {
    props.setMatrixShow(true);
    props.setActiveStudentID(props.student._id);
  };

  //Update Student Modal--------------
  const updateModal = e => {
    e.preventDefault();
    let data;
    if (firstName && !lastName) {
      data = {
        StudentID: props.student._id,
        firstName: firstName,
        lastName: props.student.lastName
      };
    } else if (!firstName && lastName) {
      data = {
        StudentID: props.student._id,
        firstName: props.student.firstName,
        lastName: lastName
      };
    } else {
      data = {
        StudentID: props.student._id,
        firstName: firstName,
        lastName: lastName
      };
    }

    API.updateStudent(data)
      .then(res => {
        window.location.reload(false).then(() => {
          setShow(false);
        });
      })
      .catch(err => {
        console.log(err);
      });
  };

  //======================
  //Delete Student
  const deleteStudent = () => {
    let data = {
      StudentID: props.student._id
    };

    API.deleteStudent(data)
      .then(res => {
        window.location.reload(false);
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <div>
      {/* Update Student Modal */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Update Student</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="StudentFirstName">
              <Form.Control
                type="text"
                placeholder={props.student.firstName}
                onChange={e => setFirstName(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="StudentLastName">
              <Form.Control
                type="text"
                placeholder={props.student.lastName}
                onChange={e => setLastName(e.target.value)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="success" onClick={updateModal}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
      <Accordion>
        <Card>
          <Card.Header>
            <Accordion.Toggle
              as={Button}
              variant="link"
              eventKey="1"
              className="btn btn-link studentBtnLink"
            >
              <i className="far fa-user-circle"></i> {props.student.fullName}
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="1">
            <Card.Body>
              {" "}
              <Button className="new-matrix" onClick={() => newMatrixOnClick()}>
                <i className="fas fa-ruler-combined"></i> &nbsp;New Matrix
              </Button>
              <br />
              <Link
                className="matricesBtn"
                to={`/Matrices?=${props.student._id}=${props.TeacherID}`}
              >
                <i className="fas fa-th-list"></i>&nbsp; View All Matrices
              </Link>
              <GenerateMatrix
                setNewMatrixTitle={props.setNewMatrixTitle}
                handleSubmit={props.handleSubmit}
                handleInputChangeRow={props.handleInputChangeRow}
                handleInputChangeColumn={props.handleInputChangeColumn}
                selectRow={props.selectRow}
                selectColumn={props.selectColumn}
                show={props.show}
                setMatrixShow={props.setMatrixShow}
              />
              <Button
                className="update-student-link"
                name="updateStudent"
                onClick={handleShow}
              >
                <i className="fas fa-user-edit"></i>&nbsp;Edit Student
              </Button>
              <br />
              <br />
              <div className="date">
                <h6>Last Update: </h6>
                <Moment format="MMMM DD, YYYY @ hh:mm A">
                  {props.student.lastUpdated}
                </Moment>
              </div>
              <Button
                className="delete-student-link"
                name="deleteStudent"
                onClick={deleteStudent}
              >
                <i className="fas fa-trash-alt"></i>
              </Button>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    </div>
  );
}

export default StuListItem;
