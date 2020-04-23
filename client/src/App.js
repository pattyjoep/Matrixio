import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
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
// import StudentList from "./components/StudentList";

function App() {
  return (
    <Router>
      <Wrapper>
        <Jumbotron />
        <NavBar />
        <Switch>
          <Route exact path="/Home" component={Home} />
          <Route exact path="/Login" component={Login} />
          <Route exact path="/Signup" component={Signup} />
          <Route exact path="/UserProfile" component={UserProfile} />
          <Route exact path="/Students" component={Students} />
        </Switch>
        <Footer />
      </Wrapper>
    </Router>
  );
}

export default App;
