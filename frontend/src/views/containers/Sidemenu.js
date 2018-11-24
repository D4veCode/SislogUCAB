import React, { Component } from 'react';
import {Link} from 'react-router-dom';

export default class Sidemenu extends Component{
    render(){
        return(
            <nav id="sidebar">
                <div className="sidebar-header">
                    <h3>SisLogUCAB</h3>
                </div>
        
                <ul className="list-unstyled components">
                    <li className="active">
                        <a href="#homeSubmenu" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">Sucursal</a>
                        <ul className="collapse list-unstyled" id="homeSubmenu">
                            <li>
                                <a href="#"><Link to="/sucursal">Info Sucursal</Link></a>
                            </li>
                        </ul> 
                    </li>
                    <li>
                        <a href="#pageSubmenu" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">Clientes</a>
                        <ul className="collapse list-unstyled" id="pageSubmenu">
                            <li>
                            <a href="#"><Link to="/clientes">Info Clientes</Link></a>
                            </li>
                        </ul> 
                    </li>
                </ul>
            </nav>
        );
    }
}