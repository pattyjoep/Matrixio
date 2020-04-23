import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

function studentList() {
  return (
    <div>
      <div className="accordion" id="accordionExample">
        <div className="card">
          <div className="card-header student-list-header" id="headingOne">
            <h2 className="mb-0">
              <button className="btn" type="button">
                <a className="student-list-header-link">
                  <i className="fa fa-graduation-cap"></i> My Students
                </a>
              </button>
              <Link to="#" className="add-student-link">
                <i className="fa fa-plus"></i>
              </Link>
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

export default studentList;