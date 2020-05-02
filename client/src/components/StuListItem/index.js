import React from "react";
// import "./style.css";
// import { Link } from "react-router-dom";
// import API from "../../utils/API";
// import GenerateMatrix from "../GenerateMatrix";

import { Button } from "react-bootstrap";

function StuListItem(props) {
  // console.log("StuListItem props----");
  // console.log(props);

  return <div>
    
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
          
          <Button className="delete-student-link">
            <i className="fas fa-trash-alt"></i>
          </Button>
          <Button
            className="new-matrix"
            // onClick={() => setMatrixShow(true)}
          >
            New Matrix
          </Button>
          {/* <GenerateMatrix show={MatrixShow} setMatrixShow={setMatrixShow} /> */}
        </div>
      </div>
    </div>


  </div>
};

export default StuListItem;