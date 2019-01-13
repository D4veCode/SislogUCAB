import React, { Component } from 'react';
import '../../css/account.css';
import MenuEmpleado from '';

export default class Account extends Component {
    render() {
        return (
            <div className="wrapper">
                <MenuEmpleado {...this.props} />

                <div className="content">

                    <div className="m-3 titulo-admin">
                        <div> <h2>¡Bienvenidos a SislogUCAB Empleado!</h2> <br /> <h5>Acá podrás gestionar todas las actividades dentro de nuestra empresa. </h5></div>

                    </div>

                </div>
            </div>
        );
    }
}