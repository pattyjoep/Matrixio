import React from "react";
// import "./style.css";
// import { Link } from "react-router-dom";
import API from "../../utils/API";
// import GenerateMatrix from "../GenerateMatrix";

import { Button } from "react-bootstrap";

function StuListItem(props) {
  // console.log("StuListItem props----");
  // console.log(props);

  //======================
  //Delete Student
  const deleteStudent = stuArr => {
    let data = stuArr;
    console.log(data);

    API.deleteStudent(data._id)
      .then(res => {
        console.log(res, "DELETE STUDENT");
      })
      .catch(err => {
        console.log(err);
      });
  };
  //Update Student
  const updateStudent = e => {
    e.preventDefault();

    let data = {
      TeacherID: props.TeacherID
    };
    console.log(data);

    API.updateStudent(data)
      .then(res => {
        console.log(res, "UPDATE STUDENT");
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <div>
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
              // onClick={() => setMatrixShow(true)}
            >
              <i className="fas fa-folder-plus"></i> &nbsp;New Matrix
            </Button>
            {/* <GenerateMatrix show={MatrixShow} setMatrixShow={setMatrixShow} /> */}
            <Button
              className="update-student-link"
              name="updateStudent"
              onClick={updateStudent}
            >
              <i className="fas fa-user-edit"></i>&nbsp;Edit Student
            </Button>
            <br />
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
    </div>
  );
}

export default StuListItem;
