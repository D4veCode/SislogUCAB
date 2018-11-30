import React, { Component } from 'react';
import axios from 'axios';

export default class FormEmpleado extends Component{

    handleFormSubmit = (event, requestType, empleadoID) => {
        event.preventDefault();
        const Nombre = event.target.elements.Nombre.value;
        const Apellido = event.target.elements.Apellido.value;
        const Fecha_N = event.target.elements.Fecha_N.value;
        const Cedula = event.target.elements.Cedula.value;
        const Edo_C = event.target.elements.Edo_C.value;
        const Nombre_E = event.target.elements.Nombre_E.value;
        const L_VIP = event.target.elements.L_VIP.value;
        const Username = event.target.elements.Username.value;
        const Password = event.target.elements.Password.value;

        console.log( Nombre,
                     Apellido,
                     Fecha_N,
                     Cedula,
                     Edo_C,
                     Nombre_E,
                     L_VIP,
                     Username,
                     Password,);

        switch(requestType){
            case 'post':
                return axios.post('',{
                    Nombre: Nombre,
                    Apellido: Apellido,
                    Fecha_N: Fecha_N,
                    Cedula: Cedula,
                    Edo_C: Edo_C,
                    Nombre_E: Nombre_E,
                    L_VIP: L_VIP,
                    Username: Username,
                    Password: Password,
                })
                .then(response => console.log(response))
                .catch(error => console.log(error))
            case 'put':
                return axios.put(`http:/${empleadoID}/`,{
                    Nombre: Nombre,
                    Apellido: Apellido,
                    Fecha_N: Fecha_N,
                    Cedula: Cedula,
                    Edo_C: Edo_C,
                    Nombre_E: Nombre_E,
                    L_VIP: L_VIP,
                    Username: Username,
                    Password: Password,
                })
                .then(response => console.log(response))
                .catch(error => console.log(error))
        }
    } 

    render(){
        return(
            <div>
                <form onSubmit={(event) => this.handleFormSubmit(
                    event,
                    this.props.requestType,
                    this.props.clienteID)}>
                <div className="form-row">
                    <div className="form-group col-md-6">
                    <label htmlFor="Username">Username</label>
                    <input type="text" name="Username" className="form-control" id="inputEmail4" placeholder="Username"/>
                    </div>
                    <div className="form-group col-md-6">
                    <label htmlFor="Password">Password</label>
                    <input type="email" name="Password" className="form-control" id="inputPassword4" placeholder="Password"/>
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-4">
                    <label htmlFor="Nombre">Nombre</label>
                    <input type="text" name="Nombre" className="form-control" id="inputCity"/>
                    </div>
                    <div className="form-group col-md-4">
                    <label htmlFor="Apellido">Apellido</label>
                    <input type="text" name="Apellido" className="form-control" id="inputCity"/>
                    </div>
                    <div className="form-group col-md-4">
                    <label htmlFor="Cedula">Cedula</label>
                    <input type="text" name="Cedula" className="form-control" id="inputCity"/>
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-3">
                    <label htmlFor="Nombre_E">Nombre Empresa</label>
                    <input type="text" name="Nombre_E" className="form-control" id="inputCity"/>
                    </div>
                    <div className="form-group col-md-3">
                    <label htmlFor="Fecha_N">Nacimiento</label>
                    <input type="date" name="Fecha_N" className="form-control" id="inputCity"/>
                    </div>
                    <div class="form-group col-md-3">
                    <label htmlFor="L_VIP">L_VIP</label>
                    <select id="inputState" class="form-control" name="L_VIP">
                        <option selected>Choose...</option>
                        <option>Si</option>
                        <option>No</option>
                    </select>
                    </div>
                    <div class="form-group col-md-3">
                    <label htmlFor="Edo_C">Estado Civil</label>
                    <select id="inputState" class="form-control" name="Edo_C">
                        <option selected>Choose...</option>
                        <option>Casado</option>
                        <option>Soltero</option>
                        <option>Viudo</option>
                    </select>
                    </div>
                </div>

                <button type="submit" className="btn btn-primary" htmlType="submit">{this.props.btnText}</button>
                </form>
            </div>
        );
    }
}