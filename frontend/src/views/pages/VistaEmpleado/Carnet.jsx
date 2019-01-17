import React, { Component } from 'react';
import '../../css/account.css';
import MenuEmpleado from './MenuEmpleado.jsx';

export default class Carnet extends Component {
    render() {
        return (
            <div className="wrapper">
                <MenuEmpleado {...this.props} />

                <div className="content">

                    <div className="m-3 titulo-admin">
                       

                    </div>

                </div>
            </div>
        );
    }
}