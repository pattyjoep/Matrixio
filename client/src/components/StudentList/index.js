import React, {useState} from "react";
import "./style.css";
import { Link } from "react-router-dom";
import API from "../../utils/API";

import { Modal, Button, Form } from "react-bootstrap";

function StudentList() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();

  const saveModal = e => {
    e.preventDefault();
    console.log(`firstName: ${firstName}`);
    console.log(`lastName: ${lastName}`);

    if (!firstName || !lastName) {
      return;
    } else {
      let newStudent = {
        firstName: firstName,
        lastName: lastName,
      };
      API.createStudent(newStudent)
        .then(res => {
          //When the new user is created successfully, the redirect will be set to true and the page will redirected to the login page
          // setRedirectToLogin(true);
        })
        .catch(err => {
          console.log(err);
        })
        .then(() => {
          setShow(false)
        })
    
    }
  };


  

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
                placeholder="Student's First Name" 
                onChange={e => setFirstName(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="StudentLastName">
              <Form.Control 
                type="text" 
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
              <button className="btn" type="button">
                <a className="student-list-header-link">
                  <i className="fa fa-graduation-cap"></i> My Students
                </a>
              </button>
              <Button variant="add-student-link" data-toggle="modal" onClick={handleShow}>
                <i className="fa fa-plus"></i>
              </Button>
            </h2>
          </div>
        </div>
        <div className="card">
          <div className="card-header" id="headingOne">
            <h2 className="mb-0">
              <button
                className="btn btn-link studentBtnLink"
                type="button"
                data-toggle="collapse"
                data-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                Name Here
              </button>
              <span className="badge badge-pill matrix-amt-badge">14</span>
            </h2>
          </div>
          <div
            id="collapseOne"
            className="collapse"
            aria-labelledby="headingOne"
            data-parent="#accordionExample"
          >
            <div className="card-body">
              {/* <ul className="list-group">
                            <li className="list-group-item d-flex justify-content-between align-items-center">
                                Joe Exotic
                                <span className="badge badge-primary badge-pill">14</span>
                            </li>
                            <li className="list-group-item d-flex justify-content-between align-items-center">
                                Dapibus ac facilisis in
                                <span className="badge badge-primary badge-pill">2</span>
                            </li>
                            <li className="list-group-item d-flex justify-content-between align-items-center">
                                Morbi leo risus
                                <span className="badge badge-primary badge-pill">1</span>
                            </li>
                        </ul> */}
              info here
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-header" id="headingTwo">
            <h2 className="mb-0">
              <button
                className="btn btn-link collapsed studentBtnLink"
                type="button"
                data-toggle="collapse"
                data-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                Name Here
              </button>
              <span className="badge badge-pill matrix-amt-badge">3</span>
            </h2>
          </div>
          <div
            id="collapseTwo"
            className="collapse"
            aria-labelledby="headingTwo"
            data-parent="#accordionExample"
          >
            <div className="card-body">2</div>
          </div>
        </div>
        <div className="card">
          <div className="card-header" id="headingThree">
            <h2 className="mb-0">
              <button
                className="btn btn-link collapsed studentBtnLink"
                type="button"
                data-toggle="collapse"
                data-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                Name Here
              </button>
              <span className="badge badge-pill matrix-amt-badge">8</span>
            </h2>
          </div>
          <div
            id="collapseThree"
            className="collapse"
            aria-labelledby="headingThree"
            data-parent="#accordionExample"
          >
            <div className="card-body">3</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StudentList;
