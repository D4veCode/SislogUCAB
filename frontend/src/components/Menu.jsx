import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import { connect } from "react-redux";
import * as actions from "../store/actions/auth.jsx";

class Menu extends Component{
	componentDidMount() {
		this.props.onTryAutoSignup();
	}
    render(){
        return(
          <div>
            <header id="home" className="mt-3">
				<div className="container">
					<div className="row align-items-center justify-content-between d-flex">
						<div id="logo">
							<a href="/">SisLogUCAB</a>
						</div>
						<nav id="nav-menu-container">
							<ul className="nav-menu">
								<li><Link to="/">Home</Link></li>
								<li><a href="#offer">Mision</a></li>
								<li><a href="#about">Vision</a></li>
								<li><a href="#price">Historia</a></li>
								<li><Link to='/cliente/login' {...this.props} >Login</Link></li>
							</ul>
						</nav>	    		
					</div>
				</div>
			</header>
          </div>
        );
    }
}

const mapStateProps = state => {
	return {
		isAuthenticated: state.token !== null
	}
}

const mapDispatchToProps = dispatch => {
	return {
		onTryAutoSignup: () => dispatch(actions.authCheckState())
	}
}

export default connect(mapStateProps, mapDispatchToProps)(Menu);