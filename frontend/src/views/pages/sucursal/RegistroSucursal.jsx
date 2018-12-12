import React, { Component } from 'react';
import axios from 'axios';

export default class CreateSucursal extends Component {
    handleFormSubmit = (event) => {
        event.preventDefault();
        const Nombre = event.target.elements.Nombre.value;
        const Email = event.target.elements.Email.value;
        const Cap_M2 = parseInt(event.target.elements.Cap_M2.value);
        const Cap_Alm = parseInt(event.target.elements.Cap_Alm.value);
        const Tamaño_D = parseInt(event.target.elements.Tamaño_D.value);
        const Fk_Lugar = 100;

        let data = JSON.stringify({
            nombre: Nombre,
            email: Email,
            cap_m2: Cap_M2,
            cap_alm: Cap_Alm,
            tamano_d: Tamaño_D,
            fk_lugar: Fk_Lugar,
        })

        console.log(data)

        axios.post("http://127.0.0.1:3001/api/v1/sucursales", data, {
            headers: {
              Authorization:
              "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE1NDQ1NDg3MDUsIm5iZiI6MTU0NDU0ODcwNSwianRpIjoiNzM3ZTdlZjEtZDAyOS00NzliLWJhNmQtY2YxMGQwYjQwMTY0IiwiZXhwIjoxNTQ0NTkzNzA1LCJpZGVudGl0eSI6ImlzYWFjIiwiZnJlc2giOmZhbHNlLCJ0eXBlIjoiYWNjZXNzIn0.kWtFuLIo0XHBdbrQffgXesHm7XLaheWJLcgHPYN3BlY",
              "Content-Type": "application/json"
            }
          })
          .then(response => console.log(response))
          .catch(function(error) {
            console.log(error.response);
          });
    }
    render() {
        return (
            <div className="wrapper" keywords="registro sucursal">
                <div className="m-2 w-100">
                    <h2 className="text-center"> SisLogUCAB Registrar Sucursal </h2>
                    <br />

                    <div className="m-3 w-100">

                        <form onSubmit={(event) => this.handleFormSubmit(event)}>
                            <div className="form-row">
                                <div className="form-group col-md-6">
                                    <label htmlFor="nombre">Nombre</label>
                                    <input type="text" name="Nombre" className="form-control" id="inputEmail4" placeholder="Nombre Sucursal" />
                                </div>
                                <div className="form-group col-md-6">
                                    <label htmlFor="email">Email</label>
                                    <input type="email" name="Email" className="form-control" id="inputPassword4" placeholder="Email" />
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="form-group col-md-4">
                                    <label htmlFor="Cap_M2">Capacidad Metros Cuadrados</label>
                                    <input type="text" name="Cap_M2" className="form-control" id="inputCity" />
                                </div>
                                <div className="form-group col-md-4">
                                    <label htmlFor="Cap_Alm">Capacidad de Almacenamiento</label>
                                    <input type="text" name="Cap_Alm" className="form-control" id="inputCity" />
                                </div>
                                <div className="form-group col-md-4">
                                    <label htmlFor="Tamaño_D">Tamaño de Almacenamiento</label>
                                    <input type="text" name="Tamaño_D" className="form-control" id="inputCity" />
                                </div>
                            </div>
                            <button type="submit" className="btn btn-primary">Registro</button>
                        </form>

                    </div>
                </div>
            </div>
        );
    }
}