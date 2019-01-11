import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from "react-redux";
import * as actions from "../store/actions/auth.jsx";

class Usermenu extends Component {
    render() {
        return <nav id="sidebar">
            <div className="sidebar-header">
                <h3>SisLogUCAB</h3>
            </div>

            <ul className="list-unstyled components">
                <li className="active"> <Link to="/perfil"> Perfil </Link></li>
                <li className="active"> <Link to="/tracking"> Tracking </Link></li>
                <li className="active" onClick={this.props.logout}> Cerrar Sesion </li>
                <li className="active">
                    <a href="#regresar">
                        <Link to="/" >Home</Link>
                    </a>

                </li>
            </ul>
        </nav>;
    }
}

const mapDispatchToProps = dispatch => {
    return {
        logout: (history) => dispatch(actions.logout(history))
    }
}

export default connect(null, mapDispatchToProps)(Usermenu);