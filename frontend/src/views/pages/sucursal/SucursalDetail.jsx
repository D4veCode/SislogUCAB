import React, { Component } from 'react';
import axios from 'axios';
import FormSucursal from './FormSucursal.jsx';
import Sidemenu from '../../containers/Sidemenu.jsx';
import MenuAdmin from '../../containers/MenuAdmin';
import '../../css/account.css';

export default class SucursalDetail extends Component {
    constructor(props) {
        super(props)
        this.state = { 
            sucursal: {},
            ubicacion: {},  
            sucursalID: this.props.location.state.sucursalID }
    }
    componentDidMount() {
        axios.get("http://localhost:3001/api/v1/sucursal/" + this.state.sucursalID, {
            headers: {
                Authorization:
                    "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE1NDQzNjM4NjcsIm5iZiI6MTU0NDM2Mzg2NywianRpIjoiOTRmYzE0ZTktMTU5OS00ZDdhLWI4OTUtOTExYThhMTU4OGU0IiwiZXhwIjoxNTQ0NDA4ODY3LCJpZGVudGl0eSI6ImhpdDIiLCJmcmVzaCI6ZmFsc2UsInR5cGUiOiJhY2Nlc3MifQ.P_cVpJ7pCuATRBE55EtdZOSFEzgrz0wu5Cm5oEaHgmQ",
                "Content-Type": "application/json"
                }
            })
            .then(response => {
            this.setState({ sucursal: response.data });
            }).then(response => console.log(this.state.ubicacion))
            .catch(function (error) {
                console.log(error);
            })
        axios.get('http://127.0.0.1:8000/api/v1/parroquias/' + this.state.sucursal.cod, {
            headers: {
                Authorization:
                    "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE1NDQzNjM4NjcsIm5iZiI6MTU0NDM2Mzg2NywianRpIjoiOTRmYzE0ZTktMTU5OS00ZDdhLWI4OTUtOTExYThhMTU4OGU0IiwiZXhwIjoxNTQ0NDA4ODY3LCJpZGVudGl0eSI6ImhpdDIiLCJmcmVzaCI6ZmFsc2UsInR5cGUiOiJhY2Nlc3MifQ.P_cVpJ7pCuATRBE55EtdZOSFEzgrz0wu5Cm5oEaHgmQ",
                "Content-Type": "application/json"
                }
            })
            .then(response => {
                this.setState({ ubicacion: response.data })
            }).then(response => console.log(this.state.ubicacion))
            .catch(function (error) {
                console.log(error);
            });
    }

    render() {
        return <div className="wrapper">
            <Sidemenu />

            <div className="container-fluid m-0 p-0">
              <MenuAdmin />

              <div className="m-3 w-100">
                <h2 className="text-center m-3"> SisLogUCAB Sucursal {this.state.sucursal.cod} Detalle
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
                        <td className="text-center"> {this.state.sucursal.tamano} </td>
                        <td className="text-center"> {this.state.sucursal.ubicacion} </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <br />

              <div className="m-3">
                <FormSucursal requestType="put" // sucursalID={this.props.match.params.sucursalID}
                  btnText="Update" />
              </div>
            </div>
          </div>;
    }
}