import React, { Component } from 'react';
import axios from 'axios';

export default class FormSucursal extends Component{

    handleFormSubmit = (event, requestType, sucursalID) => {
        event.preventDefault();
        const Nombre = event.target.elements.Nombre.value;
        const Email = event.target.elements.Email.value;
        const Cap_M2 = event.target.elements.Cap_M2.value;
        const Cap_Alm = event.target.elements.Cap_Alm.value;
        const Tamaño_D = event.target.elements.Tamaño_D.value;

        //console.log(nombre, email, Cap_M2, Cap_Alm, Tamaño_D);

        switch(requestType){
            case 'post':
                return axios.post('',{
                    Nombre: Nombre,
                    Email: Email,
                    Cap_M2 : Cap_M2,
                    Cap_Alm : Cap_Alm,
                    Tamaño_D: Tamaño_D
                })
                .then(response => console.log(response))
                .catch(error => console.log(error))
            case 'put':
                return axios.put(`http:/${sucursalID}/`,{
                    Nombre: Nombre,
                    Email: Email,
                    Cap_M2 : Cap_M2,
                    Cap_Alm : Cap_Alm,
                    Tamaño_D: Tamaño_D
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
                    this.props.sucursalID)}>
                <div className="form-row">
                    <div className="form-group col-md-6">
                    <label htmlFor="nombre">Nombre</label>
                    <input type="text" name="Nombre" className="form-control" id="inputEmail4" placeholder="Nombre Sucursal"/>
                    </div>
                    <div className="form-group col-md-6">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="Email" className="form-control" id="inputPassword4" placeholder="Email"/>
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-4">
                    <label htmlFor="Cap_M2">Capacidad Metros Cuadrados</label>
                    <input type="text" name="Cap_M2" className="form-control" id="inputCity"/>
                    </div>
                    <div className="form-group col-md-4">
                    <label htmlFor="Cap_Alm">Capacidad de Almacenamiento</label>
                    <input type="text" name="Cap_Alm" className="form-control" id="inputCity"/>
                    </div>
                    <div className="form-group col-md-4">
                    <label htmlFor="Tamaño_D">Tamaño de Almacenamiento</label>
                    <input type="text" name="Tamaño_D" className="form-control" id="inputCity"/>
                    </div>
                </div>
                <button type="submit" className="btn btn-primary" htmlType="submit">{this.props.btnText}</button>
                </form>
            </div>
        );
    }
}