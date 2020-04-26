import React, { useEffect, useParams, useState } from "react";
import "./style.css";
import { Col, Row } from "../../components/Grid";
import Container from "../../components/Container";
import NavBar from "../../components/NavBar";
import API from "../../utils/API";

function UserProfile(props) {
  const [teacher, setTeacher] = useState({});
  // When this component mounts, grab the teacher with the _id of props.match.params.id

  const { id } = useParams();
  useEffect(() => {
    API.getTeacher(id)
      .then(res => setTeacher(res.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <div>
      <NavBar />
      <Container>
        <Row>
          <Col size="sm-12 lg-6">
            <h1>Hello {teacher.firstName}</h1>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default UserProfile;
