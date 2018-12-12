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
                                <Link to="admin/sucursales">Info Sucursales</Link>
                            </li>
                            <li>
                                <Link to="admin/sucursal/create">Registro Sucursal</Link>
                            </li>
                        </ul> 
                    </li>
                    <li>
                        <a href="#pageSubmenu" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">Clientes</a>
                        <ul className="collapse list-unstyled" id="pageSubmenu">
                            <li>
                                <Link to="admin/clientes">Info Clientes</Link>
                            </li>
                            <li>
                                <Link to="admin/clientes/registro/natural">Registro Natural</Link>
                            </li>
                            <li>
                                <Link to="admin/clientes/registro/juridico">Registro Juridico</Link>
                            </li>
                        </ul> 
                    </li>
                    <li className="active">
                        <a href="#empleados" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">Empleados</a>
                        <ul className="collapse list-unstyled" id="empleados">
                            <li>
                               <Link to="admin/empleados">Info Empleados</Link>
                            </li>
                            <li>
                                <Link to="admin/empleado/create">Registro Empleado</Link>
                            </li>
                        </ul> 
                    </li>
                    <li>
                        <a href="#usuarios" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">Usuarios</a>
                        <ul className="collapse list-unstyled" id="usuarios">
                            <li>
                                <Link to="admin/usuarios">Info Usuarios</Link>
                            </li>
                        </ul>
                    </li>
                    <li className="active">
                        <a href="#roles" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">Roles</a>
                        <ul className="collapse list-unstyled" id="roles">
                            <li>
                                <Link to="admin/roles">Info Roles</Link>
                            </li>
                            <li>
                                <Link to="admin/rol/create">Registro Rol</Link>
                            </li>
                        </ul>
                    </li>
                </ul>
            </nav>
        );
    }
}