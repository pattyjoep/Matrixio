import React, { useState, useEffect } from "react";
import "./style.css";
import Container from "../../components/Container";
import { Row, Col } from "../../components/Grid";
import StudentList from "../../components/StudentList";
import NavBar from "../../components/NavBar";
import API from "../../utils/API";
import NewMatrix from "../../components/NewMatrix";

function UserProfile(props) {
  const [TeacherID, setTeacherID] = useState();
  const [getTeacher, setGetTeacher] = useState(false);
  const [TeacherData, setTeacherData] = useState({});

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
          setTeacherData(res.data);
        })
        .catch(err => {
          console.log(err);
        });
    } else {
      return;
    }
  }, [getTeacher]);

  //===============
  const [MatrixShow, setMatrixShow] = useState(false);

  useEffect(() => {
    console.log(MatrixShow);
  }, [MatrixShow]);

  const [rows, setRows] = useState([]);
  const [columns, setColumns] = useState([]);

  const [selectRow, setSelectRow] = useState("");
  const [selectColumn, setSelectColumn] = useState("");
  const [displayTable, setDisplayTable] = useState(false);

  const handleChangeStatus = event => {
    var cell = event.target;
    cell.setAttribute("class", "status-card-success");
    cell.textContent = "✓";
  };

  const handleInputChangeRow = event => {
    const { value } = event.target;
    setSelectRow(value);
    console.log(value);
  };

  const handleSubmit = (props) => {
    setDisplayTable(true);

    const tempRows = [];
    const tempColumns = [];

    for (let i = 0; i < selectRow; i++) {
      tempRows.push(i);
    }
    setRows(tempRows);

    for (let i = 0; i < selectColumn; i++) {
      tempColumns.push(i);
    }
    setColumns(tempColumns);
    setMatrixShow(false);

    //begin data storage

    let rowsArr = [];
    let matrix = [];
    let topRow = ["0", "Secondtitle", "thirdtitle", "etc......"]; //for loop to build
    matrix.push(topRow);

    for (let i = 0; i < parseInt(selectRow) + 1; i++)
      rowsArr.push("X");

    for (let i = 0; i < parseInt(selectColumn); i++) {
      let tmpArr = [];
      for(let j = 0; j < rowsArr.length; j++){
        tmpArr.push(rowsArr[j]);
      }
      matrix.push(tmpArr);
    }
    
    let matrixDB = {
      matrix: matrix,
     // StudentID: props.student._id
    };

    API.createMatrix(matrixDB);
  };

  const handleInputChangeColumn = event => {
    const { value } = event.target;
    setSelectColumn(value);
    console.log(value);
  };

  const handleRenderTable = () => {
    setDisplayTable(true);
  };

  return (
    <div>
      <div>{TeacherID ? <NavBar TeacherID={TeacherID} /> : null}</div>
      <Container>
        <Row>
          <Col size="12">
            <h1>Hello {TeacherData.fullName}.</h1>
            <hr />
            {/* <div className="studentDash">
              <h3>
                My Students: <i className="fa fa-graduation-cap"></i>
              </h3>
              <StudentList TeacherID={TeacherID} />
            </div> */}
          </Col>
         </Row> 
          <Row>
            <Col size="6">
              <StudentList
                TeacherID={TeacherID}
                handleRenderTable={handleRenderTable}
                handleSubmit={handleSubmit}
                handleInputChangeRow={handleInputChangeRow}
                handleInputChangeColumn={handleInputChangeColumn}
                selectRow={selectRow}
                selectColumn={selectColumn}
                show={MatrixShow}
                setMatrixShow={setMatrixShow}
              />
            </Col>
            <Col size="6">
              {displayTable ? (
                <NewMatrix
                  rows={selectRow}
                  rowsArray={rows}
                  columnsArray={columns}
                  columns={selectColumn}
                  changeStatus={handleChangeStatus}
                />
              ) : (
                ""
              )}
            </Col>
          </Row>
      </Container>
    </div>
  );
}
export default UserProfile;
