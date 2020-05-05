import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import "./style.css";
import Container from "../../components/Container";
import HomeNav from "../../components/HomeNav";
import API from "../../utils/API";

function Login() {
  const [TeacherID, setTeacherID] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [redirectUserProfile, setRedirectUserProfile] = useState(false);

  const handleSubmit = e => {
    e.preventDefault();
    console.log(`Email: ${email}`);
    console.log(`Password: ${password}`);
    console.log("Handling login submit!!");
    if (!email || !password) {
      return;
    } else {
      let data = {
        email: email,
        password: password
      };
      API.authenticateTeacher(data)
        .then(res => {
          setTeacherID(res.data._id);
          //When the users login is authorized the redirect will be set to true
          setRedirectUserProfile(true);
        })
        .catch(err => {
          alert("There was an error with your email or password. Try again.");
          console.log(err.response.data);
          return;
        });
    }
  };
  return (
    <div>
      {/* When users login is authorized they will be redirected to the user profile page */}
      {redirectUserProfile ? (
        <Redirect to={`/UserProfile?=${TeacherID}`} />
      ) : null}
      <HomeNav />
      <Container className="card-container">
        <div className="card text-center login-card">
          <div className="card-body">
            <h5 className="card-title">
              Login{" "}
              <a
                href="#"
                data-toggle="tooltip"
                data-html="true"
                data-placement="bottom"
                title="Matrixio is an application for educators seeking to create a Training Matrix for...."
              >
                <i className="far fa-question-circle login-question-mark"></i>
              </a>
            </h5>
            <p className="card-text"></p>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  name="email"
                  className="form-control"
                  id="Username-Email"
                  aria-describedby="emailHelp"
                  placeholder="Email"
                  onChange={e => setEmail(e.target.value)}
                />
                {/* <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small> */}
              </div>
              <div className="form-group">
                <input
                  type="password"
                  name="password"
                  className="form-control"
                  id="Password-Input"
                  placeholder="Password"
                  onChange={e => setPassword(e.target.value)}
                />
              </div>
              <a href="/Signup" className="btn signup-link">
                Sign Up
              </a>
              <button type="submit" className="btn login-Btn ml-auto">
                Login <i className="fa fa-sign-in-alt"></i>
              </button>
            </form>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Login;
