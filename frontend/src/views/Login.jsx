import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './css/login.css';
import { connect } from "react-redux";
import * as actions from "../store/actions/auth.jsx";

class Login extends Component {
  handleFormSubmit = (event) => {
    event.preventDefault();
    const Username = event.target.elements.username.value;
    const Password = event.target.elements.password.value;
  
    let data = JSON.stringify({
      username: Username,
      password: Password,
    })
    //console.log(data);
    console.log(this.props);

      if (!event.error) {
        this.props.onAuth(data, this.props.history);
      }
     

  }

  render() {
    return <div className="page login-page">
        <div className="container d-flex align-items-center">
          <div className="form-holder has-shadow">
            <div className="row">
              <div className="col-lg-6">
                <div className="info d-flex align-items-center">
                  <div className="content">
                    <div className="logo">
                      <h1>Dashboard</h1>
                    </div>
                    <p>
                      Bienvenidos a SisLogUCAB
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-lg-6 bg-white">
                <div className="form d-flex align-items-center">
                  <div className="content">
                    <form onSubmit={event => this.handleFormSubmit(event)} className="form-validate">
                      <div className="form-group">
                        <input id="login-username" type="text" name="username" required data-msg="Please enter your username" className="input-material" placeholder="Username" />
                      </div>
                      <div className="form-group">
                        <input id="login-password" type="password" name="password" required data-msg="Please enter your password" className="input-material" placeholder="Password" />
                      </div>
                      <button id="login" type="submit" className="btn btn-primary">
                        Login
                      </button>
                    </form>
                    <Link to="/" className="forgot-pass">
                      Forgot Password?
                    </Link>
                    <br />
                    <small>Do not have an account? </small>
                    <Link to="/" className="signup">Signup </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>;
  }
}

const mapStateToProps = state => {
  return {
    loading: state.loading,
    error:state.error
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onAuth: (data, history) => dispatch(actions.authLogin(data, history))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
