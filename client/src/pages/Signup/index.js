import React from "react";
import "./style.css";
import Container from "../../components/Container";
import HomeNav from "../../components/HomeNav";

function Signup() {
  return (
    <div>
      <HomeNav />
      <Container>
        <div className="card login-card">
          <div className="card-body text-center">
            <h5 className="card-title">Sign Up Form</h5>
            <form className="signup text-left">
              <div className="form-group">
                <div className="form-group">
                  <label for="password-input">Name:</label>
                  <input
                    type="username"
                    className="form-control"
                    id="name-input"
                    placeholder="Name"
                  />
                </div>
                <label for="email-input">Email address:</label>
                <input
                  type="email"
                  className="form-control"
                  id="email-input"
                  placeholder="Email"
                />
              </div>
              <div className="form-group">
                <label for="exampleInputPassword1">Password:</label>
                <input
                  type="password"
                  className="form-control"
                  id="password-input"
                  placeholder="Password"
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
