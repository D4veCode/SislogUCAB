import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import { connect } from "react-redux";
import * as actions from "../store/actions/auth.jsx";

class Menu extends Component{
	render(){
		console.log(this.props)
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
								{
									this.props.isAuthenticated ? 
											<li className="nav-item dropdown">
												<a className="nav-link" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
													Acciones
        										</a>
												<div className="dropdown-menu" aria-labelledby="navbarDropdown">
													<Link className="dropdown-item" to="/perfil" {...this.props}>Perfil</Link>
													<br/>
													<Link className="dropdown-item" to="/tracking" {...this.props}>Tracking</Link>
													<div className="dropdown-divider"></div>
													<button className="dropdown-item"> Cerrar Sesion </button>
												</div>
											</li>
									:
									<li><Link to='/cliente/login'>Login</Link></li>
								}
							</ul>
						</nav>	    		
					</div>
				</div>
			</header>
          </div>
        );
    }
}
const mapDispatchToProps = dispatch => {
	return {
		logout: () => dispatch(actions.logout())
	}
}

export default connect(null, mapDispatchToProps)(Menu);