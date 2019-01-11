import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import { connect } from "react-redux";
import * as actions from "../../store/actions/auth.jsx";

class Sidemenu extends Component{
    onLogout(){
      this.props.logout();

      console.log('regrese aqui');
      console.log(localStorage.getItem("token"));
      if (localStorage.getItem('token')=== null){
        console.log('entre al if');
        this.props.history.push('/');
      }
    }
    render(){
        return <nav id="sidebar">
            <div className="sidebar-header">
              <h3>SisLogUCAB</h3>
            </div>

            <ul className="list-unstyled components">
              <li className="active">
                <a href="#homeSubmenu" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">
                  Sucursal
                </a>
                <ul className="collapse list-unstyled" id="homeSubmenu">
                  <li>
                    <Link to="/admin/sucursales">Info Sucursales</Link>
                  </li>
                </ul>
              </li>
              <li className="active">
                <a href="#paquete" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">
                  Paquete
                </a>
                <ul className="collapse list-unstyled" id="paquete">
                  <li>
                    <Link to="/admin/paquetes">Info paquete</Link>
                  </li>
                </ul>
              </li>
            <li className="active">
                <a href="#pageSubmenu" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">
                  Clientes
                </a>
                <ul className="collapse list-unstyled" id="pageSubmenu">
                  <li>
                    <Link to="/admin/clientes">Info Clientes</Link>
                  </li>
                  <li>
                    <Link to="/admin/clientes/registro/natural">
                      Registro Natural
                    </Link>
                  </li>
                  <li>
                    <Link to="/admin/clientes/registro/juridico">
                      Registro Juridico
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="active">
                <a href="#empleados" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">
                  Empleados
                </a>
                <ul className="collapse list-unstyled" id="empleados">
                  <li>
                    <Link to="/admin/empleados">Info Empleados</Link>
                  </li>
                </ul>
              </li>
            <li className="active">
                <a href="#usuarios" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">
                  Usuarios
                </a>
                <ul className="collapse list-unstyled" id="usuarios">
                  <li>
                    <Link to="/admin/usuarios">Info Usuarios</Link>
                  </li>
                </ul>
              </li>
              <li className="active">
                <a href="#roles" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">
                  Roles
                </a>
                <ul className="collapse list-unstyled" id="roles">
                  <li>
                    <Link to="/admin/roles">Info Roles</Link>
                  </li>
                </ul>
              </li>
              <li className="active">
                <a href="#aviones" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">
                  Aviones
                </a>
                <ul className="collapse list-unstyled" id="aviones">
                  <li>
                    <Link to="/admin/aviones">Info Aviones</Link>
                  </li>
                </ul>
              </li>
              <li className="active">
                <a href="#barcos" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">
                  Barcos
                </a>
                <ul className="collapse list-unstyled" id="barcos">
                  <li>
                    <Link to="/admin/barcos">Info Barcos</Link>
                  </li>
                </ul>
              </li>
              <li className="active">
                <a href="#vehiculos" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">
                  Vehiculos
                </a>
                <ul className="collapse list-unstyled" id="vehiculos">
                  <li>
                    <Link to="/admin/vehiculos">Info Vehiculos</Link>
                  </li>
                </ul>
              </li>
              <li className="active">
                <a href="#rutas" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">
                  Rutas
                </a>
                <ul className="collapse list-unstyled" id="rutas">
                  <li>
                    <Link to="/admin/rutas">Info Rutas</Link>
                  </li>
                </ul>
                
              </li>
              <li className="active">
                <button onClick={e => this.onLogout(e)}>
                    Cerrar Sesion
                </button>
              </li>
              {/*<li className="active">
                <a href="#regresar">
                  <Link to="/account" onClick={e => this.onRefrescar(e)}>Regresar</Link>
                </a>

    </li>  */}
            </ul>
          </nav>;
    }
}

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(actions.logout())
  }
}

export default connect(null, mapDispatchToProps)(Sidemenu);