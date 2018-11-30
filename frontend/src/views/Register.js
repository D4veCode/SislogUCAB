import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './css/login.css';

class Register extends Component {
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
                    <form className="form-validate">
                      <div className="form-group">
                        <input id="register-username" type="text" name="registerUsername" required data-msg="Please enter your username" className="input-material"/>
                        <label for="register-username" className="label-material">User Name</label>
                      </div>
                      <div className="form-group">
                        <input id="register-email" type="email" name="registerEmail" required data-msg="Please enter a valid email address" className="input-material"/>
                        <label for="register-email" className="label-material">Email Address      </label>
                      </div>
                      <div className="form-group">
                        <input id="register-password" type="password" name="registerPassword" required data-msg="Please enter your password" className="input-material"/>
                        <label for="register-password" className="label-material">password        </label>
                      </div>
                      <div className="form-group terms-conditions">
                        <input id="register-agree" name="registerAgree" type="checkbox" required value="1" data-msg="Your agreement is required" className="checkbox-template"/>
                        <label for="register-agree">Agree the terms and policy</label>
                      </div>
                      <div className="form-group">
                        <button id="regidter" type="submit" name="registerSubmit" className="btn btn-primary">Register</button>
                      </div>
                    </form><small>Already have an account? </small><a href="" className="signup"><Link to="/login">Login</Link></a>
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

export default Register;
