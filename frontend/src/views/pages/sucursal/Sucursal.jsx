import React, { Component } from 'react';
import FormSucursal from './FormSucursal.jsx';
import Sidemenu from '../../containers/Sidemenu';
import MenuAdmin from '../../containers/MenuAdmin';
import {Link} from 'react-router-dom';
import axios from 'axios';
import '../../css/account.css';

export default class Sucursal extends Component{
    constructor(props){
        super(props)
        this.state = {
            sucursales : {},
            Ubicacion:[]
        } 
    }
    componentDidMount(){
        axios.get("http://127.0.0.1:8000/api/v1/sucursales", {
            headers: {
              Authorization:
              "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE1NDQzNjM4NjcsIm5iZiI6MTU0NDM2Mzg2NywianRpIjoiOTRmYzE0ZTktMTU5OS00ZDdhLWI4OTUtOTExYThhMTU4OGU0IiwiZXhwIjoxNTQ0NDA4ODY3LCJpZGVudGl0eSI6ImhpdDIiLCJmcmVzaCI6ZmFsc2UsInR5cGUiOiJhY2Nlc3MifQ.P_cVpJ7pCuATRBE55EtdZOSFEzgrz0wu5Cm5oEaHgmQ",
              "Content-Type": "application/json"
            }
          })
          .then(response => {
            this.setState({ sucursales: response.data.sucursales });
          })
          .then(response => console.log(this.state.sucursales))
          .catch(function(error) {
            console.log(error);
          });  ///parroquias/   
    }

    render(){
        var sucur = this.state.sucursales.map(function (sucurl) {
            axios.get("http://127.0.0.1:8000/api/v1/parroquias/" + sucurl.fk_lugar, {
                  headers: {
                    Authorization:
                    "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE1NDQzNjM4NjcsIm5iZiI6MTU0NDM2Mzg2NywianRpIjoiOTRmYzE0ZTktMTU5OS00ZDdhLWI4OTUtOTExYThhMTU4OGU0IiwiZXhwIjoxNTQ0NDA4ODY3LCJpZGVudGl0eSI6ImhpdDIiLCJmcmVzaCI6ZmFsc2UsInR5cGUiOiJhY2Nlc3MifQ.P_cVpJ7pCuATRBE55EtdZOSFEzgrz0wu5Cm5oEaHgmQ",
                    "Content-Type": "application/json"
                  }
                }
              )
              .then(response => {
                this.setState({ Ubicacion: response.data });
              })
              .then(response => console.log(this.state.Ubicacion))
              .catch(function(error) {
                console.log(error);
              });

            return <tr key={sucurl.cod}>
                <th scope="row">
                    <Link to={{ pathname: "/sucursal/" + sucurl.cod, state: { sucursalID: sucurl.cod } }} className="btn btn-info">
                    {sucurl.cod}
                  </Link>
                </th>
                <td className="text-center">{sucurl.nombre}</td>
                <td className="text-center">{sucurl.email}</td>
                <td className="text-center">{sucurl.cap_m2}</td>
                <td className="text-center">{sucurl.cap_alm}</td>
                <td className="text-center">{sucurl.tamano}</td>
                <td className="text-center">{this.state.Ubicacion}</td>
              </tr>;
        });
        return(
            <div className="wrapper">
            <Sidemenu/>
            
            <div className="container-fluid m-0 p-0">
                <MenuAdmin/>
            
            
            <div className="m-3 w-100">
                <h2 className="text-center m-3"> SisLogUCAB Sucursal DataTable</h2>
            
                <table className="table table-hover w-100">
                    <thead className="thead-dark">
                        <tr>
                        <th scope="col">#</th>
                        <th scope="col"> Nombre </th>
                        <th scope="col"> Email </th>
                        <th scope="col"> Metros2  </th>
                        <th scope="col"> Almacenamiento </th>
                        <th scope="col"> Tamaño </th>
                        <th scope="col"> Ubicación </th>
                        </tr>
                    </thead>
                    <tbody>
                        { sucur }
                    </tbody>
                </table>
            </div>
            <br/>

            <div className="m-3">
                <FormSucursal
                    requestType="post"
                    sucursalID={null}
                    btnText="Create"
                />
            </div>
            
        
            </div>
        </div>
        );
    }
}