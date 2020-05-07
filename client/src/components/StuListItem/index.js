import React, { useState, useEffect } from "react";
// import "./style.css";
// import { Link } from "react-router-dom";
import API from "../../utils/API";
// import GenerateMatrix from "../GenerateMatrix";
import { Modal, Button, Form } from "react-bootstrap";
import Moment from "react-moment";
import "moment-timezone";

import GenerateMatrix from "../GenerateMatrix"
import NewMatrix from "../NewMatrix"

function StuListItem(props) {
  // console.log("StuListItem props----");
  // console.log(props);

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();



  const [MatrixShow, setMatrixShow] = useState(false);

  const [rows, setRows] = useState([]);
  const [columns, setColumns] = useState([]);

  const [selectRow, setSelectRow] = useState("")
  const [selectColumn, setSelectColumn] = useState("")
  const [displayTable, setDisplayTable] =  useState(false)

  const handleChangeStatus = (event) => {  
    var cell = event.target
    cell.setAttribute("class", "status-card-success")
    cell.textContent = "✓"
  }

  const handleInputChangeRow = (event) => {
    const { value } = event.target;
    setSelectRow(value) 
    console.log(value)
  }
  
  const handleSubmit = () => {
    setDisplayTable(true)
    console.log("row/col")
    console.log(selectColumn, selectRow)
  
    const tempRows = [];
    const tempColumns = [];
  
    for (let i = 0;i < selectRow; i++) {
      tempRows.push(i)
    }
    setRows(tempRows)
  
    for (let i = 0;i < selectColumn; i++) {
      tempColumns.push(i)
    }
    setColumns(tempColumns)
    setMatrixShow(false) 
  }
  
  const handleInputChangeColumn = (event) => {
    const { value } = event.target;
    setSelectColumn(value) 
    console.log(value)
  }

  //Update Student Modal--------------
  const updateModal = e => {
    e.preventDefault();
    console.log(`updateModal firstName: ${firstName}`);
    console.log(`updateModal lastName: ${lastName}`);

    if (!firstName || !lastName) {
      return;
    } else {
      let data = {
        StudentID: props.student._id,
        firstName: firstName,
        lastName: lastName
      };
      console.log("STUDENT UPDATE", data);
      API.updateStudent(data)
        .then(res => {
          console.log(res);
          window.location.reload(false).then(() => {
            setShow(false);
          });
        })
        .catch(err => {
          console.log(err);
        });
    }
  };

  //======================
  //Delete Student
  const deleteStudent = () => {
    let data = {
      StudentID: props.student._id
    };
    console.log(data);

    API.deleteStudent(data)
      .then(res => {
        console.log(res, "DELETE STUDENT");
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
              // data-id={props.student._id}
            >
              {props.student.fullName}
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
            <Button
              className="new-matrix"
              onClick={() => setMatrixShow(true)}
            >
              <i className="fas fa-folder-plus"></i> &nbsp;New Matrix
            </Button>
              <GenerateMatrix handleSubmit={handleSubmit} handleInputChangeRow={handleInputChangeRow} handleInputChangeColumn={handleInputChangeColumn}
              selectRow={selectRow} selectColumn={selectColumn} show={MatrixShow} setMatrixShow={ setMatrixShow } />
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
              <Moment format="MMMM DD, YYYY @ hh:mm">
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
          </div>
        </div>
      </div>
      {displayTable ? <NewMatrix rows={selectRow} rowsArray={rows} columnsArray={columns} columns={selectColumn} changeStatus={handleChangeStatus} /> : ""}
    </div>
  );
}

export default StuListItem;
