import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Wrapper from "./components/Wrapper";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Students from "./pages/Students";
import UserProfile from "./pages/UserProfile";

function App() {
  return (
    <Router>
      <Wrapper>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/Login" component={Login} />
          <Route exact path="/Signup" component={Signup} />
          <Route exact path="/UserProfile" component={UserProfile} />
          <Route exact path="/Students" component={Students} />
        </Switch>
      </Wrapper>
      <Footer />
    </Router>
  );
}

export default App;
