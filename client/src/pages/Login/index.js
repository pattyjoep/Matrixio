import React from "react";
import "./style.css";
import Container from "../../components/Container";

function Login() {
  return (
    <Container>
      <div>
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
                <i class="far fa-question-circle login-question-mark "></i>
              </a>
            </h5>
            <p className="card-text"></p>
            <form>
              <div className="form-group">
                <input
                  type="email"
                  className="form-control"
                  id="Username-Email"
                  aria-describedby="emailHelp"
                  placeholder="Email"
                />
                {/* <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small> */}
              </div>
              <div className="form-group">
                <input
                  type="password"
                  className="form-control"
                  id="Password-Input"
                  placeholder="Password"
                />
              </div>
              <a href="/Signup" class="btn signup-link">
                Sign Up
              </a>
              <button type="submit" className="btn login-Btn ml-auto">
                Login <i class="fa fa-sign-in-alt"></i>
              </button>
            </form>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default Login;
