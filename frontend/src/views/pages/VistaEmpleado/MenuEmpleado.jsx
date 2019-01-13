import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from "react-redux";
import * as actions from "../../store/actions/auth.jsx";

class Sidemenu extends Component {
    onLogout() {
        this.props.logout();

        //console.log('regrese aqui');
        //console.log(localStorage.getItem("token"));
        if (localStorage.getItem('token') === null) {
            //console.log('entre al if');
            this.props.history.push('/');
        }
    }
    render() {
        return <nav id="sidebar">
            <div className="sidebar-header">
              <h3>SisLogUCAB</h3>
              <br/>
              <h3>Usuario: <strong>{localStorage.getItem("username")}</strong></h3>
            </div>

            <ul className="list-unstyled components">
                <li className="active"> <Link to="/empleado/perfil"> Perfil </Link></li>
                <li className="active">
                    <a href="#homeSubmenu" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">
                    Clientes
                    </a>
                    <ul className="collapse list-unstyled" id="homeSubmenu">
                        <li>
                            <Link to="/empleado/clienteN">Registro ClientesN</Link>
                        </li>
                        <li>
                            <Link to="/empleado/clienteJ">Registro ClientesJ</Link>
                        </li>
                    </ul>
                </li>
                <li className="active">
                    <a href="#paquete" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">
                    Paquete
                    </a>
                    <ul className="collapse list-unstyled" id="paquete">
                    <li>
                        <Link to="/empleado/paquete">Registrar Envio</Link>
                    </li>
                    </ul>
                </li>
                <li className="active">
                    <button onClick={e => this.onLogout(e)}>
                    Cerrar Sesion
                    </button>
                </li>
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