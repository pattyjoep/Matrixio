import React from "react";
import "./style.css";
import Container from "../../components/Container";
import NavBar from "../../components/NavBar";
import Jumbotron from "../../components/Jumbotron";

function UserProfile() {
  return (
    <div>
      <Jumbotron />
      <NavBar />
      <Container></Container>
    </div>
  );
}

export default UserProfile;
