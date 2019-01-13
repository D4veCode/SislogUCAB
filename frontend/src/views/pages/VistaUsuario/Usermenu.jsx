import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from "react-redux";
import * as actions from "../store/actions/auth.jsx";

class Usermenu extends Component {
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
                <br />
                <h3>Usuario: <strong>{localStorage.getItem("username")}</strong></h3>
            </div>

            <ul className="list-unstyled components">
                <li className="active"> <Link to="/cliente/perfil"> Perfil </Link></li>
                <li className="active"> <Link to="/tracking"> Tracking </Link></li>
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

export default connect(null, mapDispatchToProps)(Usermenu);