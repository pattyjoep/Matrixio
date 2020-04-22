import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Wrapper from "./components/Wrapper";
import NavBar from "./components/NavBar";
import Jumbotron from "./components/Jumbotron";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Students from "./pages/Students";
import UserProfile from "./pages/UserProfile";
import StudentList from "./components/StudentList";

function App() {
  return (
    <Wrapper>
      <Jumbotron />
      <NavBar />
      <StudentList></StudentList>
      <Router>
        <Route exact path="/Matrixio" Component={Home} />
        <Route exact path="/Login" Component={Login} />
        <Route exact path="/Signup" Component={Signup} />
        <Route exact path="/UserProfile" Component={UserProfile} />
        <Route exact path="/Students" Component={Students} />
      </Router>
      <Footer />
    </Wrapper>
  );
}

export default App;
