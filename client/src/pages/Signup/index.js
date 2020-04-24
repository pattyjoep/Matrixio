import React, { useState, useEffect } from "react";
import "./style.css";
import Container from "../../components/Container";
import HomeNav from "../../components/HomeNav";

function Signup() {
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = e => {
    e.preventDefault();
  };



  return (
    <div>
      <HomeNav />
      <Container>
        <div className="card login-card">
          <div className="card-body text-center">
            <h5 className="card-title">Sign Up Form</h5>
            <form 
              className="signup text-left" 
              onSubmit={ handleSubmit }>
              <div className="form-group">
                <div className="form-group">
                  <label for="first-name-input">First Name:</label>
                  <input
                    type="username"
                    className="form-control"
                    id="first-name-input"
                    placeholder="First Name"
                    onChange = { e => setFirstName(e.target.value) }
                  />
                </div>
                <div className="form-group">
                  <label for="last-name-input">Last Name:</label>
                  <input
                    type="username"
                    className="form-control"
                    id="last-name-input"
                    placeholder="Last Name"
                    onChange = { e => setLastName(e.target.value) }
                  />
                </div>
                <label for="email-input">Email address:</label>
                <input
                  type="email"
                  className="form-control"
                  id="email-input"
                  placeholder="Email"
                  onChange = { e => setEmail(e.target.value) }
                />
              </div>
              <div className="form-group">
                <label for="password-input">Password:</label>
                <input
                  type="password"
                  className="form-control"
                  id="password-input"
                  placeholder="Password"
                  onChange = { e => setPassword(e.target.value) }
                />
              </div>
              <span
                className="glyphicon glyphicon-exclamation-sign"
                aria-hidden="true"
              ></span>
              <span className="sr-only">Error:</span>{" "}
              <span className="msg"></span>
              <button type="submit" className="btn signup-btn">
                Sign Up
              </button>
            </form>
            <br />
            <p>
              Or log in <a href="/Login">here</a>
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
}
export default Signup;
