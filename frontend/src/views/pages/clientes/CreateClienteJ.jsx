import React, { Component } from 'react';
import axios from 'axios';

export default class CreateClienteJ extends Component{
    handleFormSubmit = (event) => {
        event.preventDefault();
        const Nombre = event.target.elements.Nombre.value;
        const Apellido = event.target.elements.Apellido.value;
        const Fecha_N = event.target.elements.Fecha_N.value;
        const Cedula = event.target.elements.Cedula.value;
        let Nombre_E = event.target.elements.Nombre_E.value;
        let L_VIP = parseInt(event.target.elements.L_VIP.value);
        const Username = event.target.elements.Username.value;
        const Password = event.target.elements.Password.value;
        const Email = event.target.elements.Email.value;

        let data = JSON.stringify({
            nombre: Nombre,
            apellido: Apellido,
            fecha_n: Fecha_N,
            cedula: Cedula,
            email: Email,
            nombre_e: Nombre_E,
            l_vip: L_VIP,
            fk_lugar: 2,
            username: Username,
            password: Password,
        })

        console.log(data)

        axios.post('http://127.0.0.1:3001/api/v1/cliente/registro', data, {
            headers: {
                'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE1NDQ1NDg3MDUsIm5iZiI6MTU0NDU0ODcwNSwianRpIjoiNzM3ZTdlZjEtZDAyOS00NzliLWJhNmQtY2YxMGQwYjQwMTY0IiwiZXhwIjoxNTQ0NTkzNzA1LCJpZGVudGl0eSI6ImlzYWFjIiwiZnJlc2giOmZhbHNlLCJ0eXBlIjoiYWNjZXNzIn0.kWtFuLIo0XHBdbrQffgXesHm7XLaheWJLcgHPYN3BlY',
                'Content-Type': 'application/json'
            }
        })
        .then(response => console.log(response))
        .catch(function (error) {
             console.log(error.response);
        });

    }
    render(){
        return(
            <div className="wrapper" keywords="registro clientes">
                <div className="m-2 w-100">
                    <h2 className="text-center"> SisLogUCAB Registrar Cliente Juridico</h2>
                    <br />

                    <div className="m-3 w-100">

                        <form onSubmit={event => this.handleFormSubmit(event)}>
                            <div className="form-row">
                                <div className="form-group col-md-4">
                                    <label htmlform="Username">Username</label>
                                    <input type="text" name="Username" className="form-control" />
                                </div>
                                <div className="form-group col-md-4">
                                    <label htmlform="Password">Password</label>
                                    <input type="password" name="Password" className="form-control" id="inputPassword4" />
                                </div>
                                <div className="form-group col-md-4">
                                    <label htmlform="Email">Email</label>
                                    <input type="email" name="Email" className="form-control" id="inputEmail4" />
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="form-group col-md-4">
                                    <label htmlform="Nombre">Nombre</label>
                                    <input type="text" name="Nombre" className="form-control" />
                                </div>
                                <div className="form-group col-md-4">
                                    <label htmlform="Apellido">Apellido</label>
                                    <input type="text" name="Apellido" className="form-control" />
                                </div>
                                <div className="form-group col-md-4">
                                    <label htmlform="Cedula">Cedula</label>
                                    <input type="text" name="Cedula" className="form-control" />
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="form-group col-md-4">
                                    <label htmlform="Fecha_N">Nacimiento</label>
                                    <input type="date" name="Fecha_N" className="form-control" />
                                </div>
                                <div className="form-group col-md-4">
                                    <label htmlform="L_VIP">L_VIP</label>
                                    <select id="inputState" className="form-control" name="L_VIP" required>
                                        <option readOnly defaultValue="0">Choose...</option>
                                        <option value="1">Si</option>
                                        <option value="0">No</option>
                                    </select>
                                </div>
                                <div className="form-group col-md-3">
                                    <label htmlform="Nombre_E">Nombre Empresa</label>
                                    <input type="text" name="Nombre_E" className="form-control" />
                                </div>
                            </div>

                            <button type="submit" className="btn btn-primary"> Register </button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}