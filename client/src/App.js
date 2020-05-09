import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Jumbotron from "./components/Jumbotron";
import Wrapper from "./components/Wrapper";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Team from "./pages/Team";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import UserProfile from "./pages/UserProfile";
import Settings from "./pages/Settings";
import Matrices from "./pages/Matrices";

function App() {
  return (
    <Router>
      <Jumbotron />
      <Wrapper>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/Team" component={Team} />
          <Route exact path="/Contact" component={Contact} />
          <Route exact path="/Login" component={Login} />
          <Route exact path="/Signup" component={Signup} />
          <Route exact path="/UserProfile" component={UserProfile} />
          <Route exact path="/Settings" component={Settings} />
          <Route exact path="/Matrices" component={Matrices} />
        </Switch>
      </Wrapper>
      <Footer />
    </Router>
  );
}

export default App;
