import React, {Component} from 'react';
import {Link} from 'react-router-dom';

export default class Menu extends Component{
    render(){
        return(
          <div>
            <header id="home" className="mt-3">
				<div className="container">
					<div className="row align-items-center justify-content-between d-flex">
						<div id="logo">
							<a href="#home">SisLogUCAB</a>
						</div>
						<nav id="nav-menu-container">
							<ul className="nav-menu">
								<li><Link to="/">Home</Link></li>
								<li><a href="#offer">We Offer</a></li>
								<li><a href="#about">About</a></li>
								<li><a href="#project">Project</a></li>
								<li><a href="#price">Price</a></li>
								<li><a href="#blog">Blog</a></li>
								<li><Link to='/login'>Login</Link></li>
							</ul>
						</nav>	    		
					</div>
				</div>
			</header>
          </div>
        );
    }
}