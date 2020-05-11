import React from "react";
import "./style.css";
// import { Link } from "react-router-dom";
// import API from "../../utils/API";
import { Modal, Button, Form } from "react-bootstrap";

function GenerateMatrix(props) {
  console.log("GenerateMatrix props", props);

  const handleClose = () => {
    props.setMatrixShow(false);
  };

  return (
    <div>
      <Modal show={props.show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Generate New Matrix</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="Title">
              <Form.Control
                type="text"
                placeholder="Title"
                onChange={e => props.setNewMatrixTitle(e.target.value)}
              />
              <br />
              <select
                id="RowSize"
                onChange={props.handleInputChangeRow}
                value={props.selectRow}
              >
                <option>-- Select Rows --</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
                <option>6</option>
                {/* <option>7</option>
                      <option>8</option>
                      <option>9</option>
                      <option>10</option> */}
              </select>
              <br />
              <br />
              <select
                id="ColumnSize"
                onChange={props.handleInputChangeColumn}
                value={props.selectColumn}
              >
                <option>-- Select Columns --</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
                <option>6</option>
                {/* <option>7</option>
                      <option>8</option>
                      <option>9</option>
                      <option>10</option> */}
              </select>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button className="generate-matrix-cancelBtn" onClick={handleClose}>
            Cancel
          </Button>
          <Button className="generate-matrix-Btn" onClick={props.handleSubmit}>
            Generate Matrix
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default GenerateMatrix;
