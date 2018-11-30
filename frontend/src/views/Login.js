import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './css/login.css';

class Login extends Component {
  render() {
    return (
      <div className="page login-page">
        <div className="container d-flex align-items-center">
          <div className="form-holder has-shadow">
            <div className="row">
              
              <div className="col-lg-6">
                <div className="info d-flex align-items-center">
                  <div className="content">
                    <div className="logo">
                      <h1>Dashboard</h1>
                    </div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                  </div>
                </div>
              </div>
              
              <div className="col-lg-6 bg-white">
                <div className="form d-flex align-items-center">
                  <div className="content">
                    <form method="post" className="form-validate">
                      <div className="form-group">
                        <input id="login-username" type="text" name="loginUsername" required data-msg="Please enter your username" className="input-material"/>
                        <label for="login-username" className="label-material">User Name</label>
                      </div>
                      <div className="form-group">
                        <input id="login-password" type="password" name="loginPassword" required data-msg="Please enter your password" className="input-material"/>
                        <label for="login-password" className="label-material">Password</label>
                      </div><a id="login" href="index.html" className="btn btn-primary">Login</a>
                      
                    </form><a href="" className="forgot-pass">Forgot Password?</a><br/><small>Do not have an account? </small><a href="" className="signup"><Link to="/register">Signup</Link></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
