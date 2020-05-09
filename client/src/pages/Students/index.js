import React, { useState, useEffect } from "react";
import "./style.css";
import Container from "../../components/Container";
import { Row, Col } from "../../components/Grid";
import StudentList from "../../components/StudentList";
import NavBar from "../../components/NavBar";
import API from "../../utils/API";

import NewMatrix from "../../components/NewMatrix"

function Students(props) {
  const [TeacherID, setTeacherID] = useState();
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


  const [MatrixShow, setMatrixShow] = useState(false);
  
  useEffect(() => {
    console.log(MatrixShow)
  }, [MatrixShow]);

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
    //props.handleRenderTable()
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

  
  const handleRenderTable = () => {
    setDisplayTable(true)
  }

 

  return (
    <div>
      <div>{TeacherID ? <NavBar TeacherID={TeacherID} /> : null}</div>
      <Container>
        <Row>
          <Col size="6">
            <StudentList TeacherID={TeacherID} handleRenderTable={handleRenderTable} handleSubmit={handleSubmit} handleInputChangeRow={handleInputChangeRow} handleInputChangeColumn={handleInputChangeColumn} selectRow={selectRow} selectColumn={selectColumn} show={MatrixShow} setMatrixShow={ setMatrixShow } />
          </Col>
          <Col size="6">
            {displayTable ? <NewMatrix rows={selectRow} rowsArray={rows} columnsArray={columns} columns={selectColumn} changeStatus={handleChangeStatus} /> : ""}
          </Col>
        </Row>
      </Container>
    </div>
  );
}
export default Students;
