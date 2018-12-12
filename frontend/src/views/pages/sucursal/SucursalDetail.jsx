import React, { Component } from 'react';
import axios from 'axios';
import Sidemenu from '../../containers/Sidemenu.jsx';
//import MenuAdmin from '../../containers/MenuAdmin';
import '../../css/account.css';

export default class SucursalDetail extends Component {
    constructor(props) {
        super(props)
        this.state = { 
            sucursal: {},
            sucursalID: this.props.location.state.sucursalID,
            estados: [],
            municipios: [],
            parroquias: []
         }
    }
    componentDidMount() {
        axios.get("http://localhost:3001/api/v1/sucursal/" + this.state.sucursalID, {
            headers: {
                Authorization:
                "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE1NDQ1NDg3MDUsIm5iZiI6MTU0NDU0ODcwNSwianRpIjoiNzM3ZTdlZjEtZDAyOS00NzliLWJhNmQtY2YxMGQwYjQwMTY0IiwiZXhwIjoxNTQ0NTkzNzA1LCJpZGVudGl0eSI6ImlzYWFjIiwiZnJlc2giOmZhbHNlLCJ0eXBlIjoiYWNjZXNzIn0.kWtFuLIo0XHBdbrQffgXesHm7XLaheWJLcgHPYN3BlY",
                "Content-Type": "application/json"
            }
            })
            .then(response => {
            this.setState({ sucursal: response.data.sucursal }) })
            .catch(function (error) {
                console.log(error);
            });
        
        axios.get("http://127.0.0.1:3001/api/v1/estados", {
            headers: {
                Authorization:
                    "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE1NDQ1NDg3MDUsIm5iZiI6MTU0NDU0ODcwNSwianRpIjoiNzM3ZTdlZjEtZDAyOS00NzliLWJhNmQtY2YxMGQwYjQwMTY0IiwiZXhwIjoxNTQ0NTkzNzA1LCJpZGVudGl0eSI6ImlzYWFjIiwiZnJlc2giOmZhbHNlLCJ0eXBlIjoiYWNjZXNzIn0.kWtFuLIo0XHBdbrQffgXesHm7XLaheWJLcgHPYN3BlY",
                "Content-Type": "application/json"
            }
        }).then(response => {
            this.setState({ estados: response.data.lugar });
            console.log(this.state.estados)
        }).catch(function (error) {
            console.log(error.response);
        });
       
    }

    handleFormSubmit = (event, requestType, sucursalID) => {
        event.preventDefault();
        const Nombre = event.target.elements.Nombre.value;
        const Email = event.target.elements.Email.value;
        const Cap_M2 = parseInt(event.target.elements.Cap_M2.value);
        const Cap_Alm = parseInt(event.target.elements.Cap_Alm.value);
        const Tamaño_D = parseInt(event.target.elements.Tamaño_D.value);
        const Fk_Lugar = parseInt(event.target.elements.Municipios.value);
        //console.log(nombre, email, Cap_M2, Cap_Alm, Tamaño_D);
        if (requestType === "put") {
            let datas = JSON.stringify({
                nombre: Nombre,
                email: Email,
                cap_m2: Cap_M2,
                cap_alm: Cap_Alm,
                tamano_d: Tamaño_D,
                fk_lugar: Fk_Lugar,
            })
            console.log(datas);
       
        axios.put(`http://localhost:3001/api/v1/sucursal/${sucursalID}`, datas,{
            headers: {
                Authorization:
                "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE1NDQzNjM4NjcsIm5iZiI6MTU0NDM2Mzg2NywianRpIjoiOTRmYzE0ZTktMTU5OS00ZDdhLWI4OTUtOTExYThhMTU4OGU0IiwiZXhwIjoxNTQ0NDA4ODY3LCJpZGVudGl0eSI6ImhpdDIiLCJmcmVzaCI6ZmFsc2UsInR5cGUiOiJhY2Nlc3MifQ.P_cVpJ7pCuATRBE55EtdZOSFEzgrz0wu5Cm5oEaHgmQ",
                "Content-Type": "application/json"
            }
        })
        .then(response => console.log(response))
        .catch(function (error) {
                console.log(error.response);
            });
        }
        
        // para el ajax de react

        axios.get("http://localhost:3001/api/v1/sucursal/" + this.state.sucursalID, {
            headers: {
                Authorization:
                    "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE1NDQ1NDg3MDUsIm5iZiI6MTU0NDU0ODcwNSwianRpIjoiNzM3ZTdlZjEtZDAyOS00NzliLWJhNmQtY2YxMGQwYjQwMTY0IiwiZXhwIjoxNTQ0NTkzNzA1LCJpZGVudGl0eSI6ImlzYWFjIiwiZnJlc2giOmZhbHNlLCJ0eXBlIjoiYWNjZXNzIn0.kWtFuLIo0XHBdbrQffgXesHm7XLaheWJLcgHPYN3BlY",
                "Content-Type": "application/json"
            }
        })
        .then(response => {
            this.setState({ sucursal: response.data.sucursal })
        })
        .catch(function (error) {
            console.log(error.response);
        });
           
    } 

    onGetMunicipios() {
        console.log(this.refs.Estados.value);
        axios.get('http://localhost:3001/api/v1/municipios/' + this.refs.Estados.value, {
            headers: {
                'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE1NDQ1NDg3MDUsIm5iZiI6MTU0NDU0ODcwNSwianRpIjoiNzM3ZTdlZjEtZDAyOS00NzliLWJhNmQtY2YxMGQwYjQwMTY0IiwiZXhwIjoxNTQ0NTkzNzA1LCJpZGVudGl0eSI6ImlzYWFjIiwiZnJlc2giOmZhbHNlLCJ0eXBlIjoiYWNjZXNzIn0.kWtFuLIo0XHBdbrQffgXesHm7XLaheWJLcgHPYN3BlY',
                'Content-Type': 'application/json'
            }
        }).then(response => {
            this.setState({ municipios: response.data.lugar });
            console.log(this.state.municipios)
        }).catch(function (error) {
            console.log(error.response);
        });
    }

    onGetParroquias() {
        console.log(this.refs.Municipios.value);
        axios.get('http://localhost:3001/api/v1/parroquias/' + this.refs.Municipios.value, {
            headers: {
                'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE1NDQ1NDg3MDUsIm5iZiI6MTU0NDU0ODcwNSwianRpIjoiNzM3ZTdlZjEtZDAyOS00NzliLWJhNmQtY2YxMGQwYjQwMTY0IiwiZXhwIjoxNTQ0NTkzNzA1LCJpZGVudGl0eSI6ImlzYWFjIiwiZnJlc2giOmZhbHNlLCJ0eXBlIjoiYWNjZXNzIn0.kWtFuLIo0XHBdbrQffgXesHm7XLaheWJLcgHPYN3BlY',
                'Content-Type': 'application/json'
            }
        }).then(response => {
            this.setState({ parroquias: response.data.lugar });
            console.log(this.state.parroquias)
        }).catch(function (error) {
            console.log(error.response);
        });
    }
    render() {
        var Est = this.state.estados.map(function (estado) {
            return <option value={estado.id} key={`option_${estado.id}`} > {estado.nombre} </option>
        });
        var Municipios = this.state.municipios.map(function (muni) {
            return <option value={muni.id} key={`option_${muni.id}`}> {muni.nombre}</option>
        });
        var Parroquias = this.state.parroquias.map(function (parro) {
            return <option value={parro.id} key={`option_${parro.id}`}> {parro.nombre}</option>
        });
        return <div className="wrapper">
            <Sidemenu />

            <div className="container-fluid m-0 p-0">
                {/* <MenuAdmin/> */}

              <div className="m-3 w-100">
                <h2 className="text-center m-3"> SisLogUCAB Sucursal {this.state.sucursal.cod} Info
                </h2>

                <table className="table table-hover w-100">
                  <thead className="thead-dark">
                    <tr>
                      <th scope="col" className="text-center"> Nombre </th>
                      <th scope="col" className="text-center"> Email </th>
                      <th scope="col" className="text-center"> Capacidad Metros2 </th>
                      <th scope="col" className="text-center"> Capacidad Almacenamiento </th>
                      <th scope="col" className="text-center"> Tamaño </th>
                      <th scope="col" className="text-center"> Ubicación </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                        <td className="text-center"> {this.state.sucursal.nombre} </td>
                        <td className="text-center"> {this.state.sucursal.email} </td>
                        <td className="text-center"> {this.state.sucursal.cap_m2} </td>
                        <td className="text-center"> {this.state.sucursal.cap_alm} </td>
                        <td className="text-center"> {this.state.sucursal.tamaño_d} </td>
                        <td className="text-center"> {this.state.sucursal.fk_lugar} </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <br />

              <div className="m-3">
                    <form onSubmit={(event) => this.handleFormSubmit(
                        event,
                        'put',
                        this.state.sucursalID)}>
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
                                <label htmlform="estados">Estados</label>
                                <select ref="Estados" className="form-control" name="Estados" onChange={(e) => { this.onGetMunicipios(); }}>
                                    <option readOnly>Seleccione...</option>
                                    {Est}
                                </select>
                            </div>
                            <div className="form-group col-md-4">
                                <label htmlform="municipios">Municipios</label>
                                <select ref="Municipios" className="form-control" name="Municipios" onChange={(e) => { this.onGetParroquias(); }}>
                                    <option readOnly>Seleccione...</option>
                                    {Municipios}
                                </select>
                            </div>
                            <div className="form-group col-md-4">
                                <label htmlform="parroquias">Parroquias</label>
                                <select className="form-control" name="Parroquias">
                                    <option readOnly>Seleccione...</option>
                                    {Parroquias}
                                </select>
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
                        <button type="submit" className="btn btn-primary">Update</button>
                    </form>
              </div>
            </div>
          </div>;
    }
}