import React, { Component } from 'react';
import FormEmpleado from './FormEmpleado';
import Sidemenu from '../../containers/Sidemenu.jsx';
import MenuAdmin from '../../containers/MenuAdmin';
import {Link} from 'react-router-dom';
import axios from 'axios';
import '../../css/account.css';

export default class Empleado extends Component{
    constructor(props){
        super(props)
        this.state = {
            empleados : {},
            Direccion: []
        } 
    }
    componentDidMount(){
        axios.get(`http://127.0.0.1:8000/api/v1/empleados`)
        .then(response =>{
            this.setState({empleados: response.data})
        }) 
    }

    render(){
        var emp = this.state.empleados.map(function (empleado) {
            var Edo_Civil = "";
            if (this.state.cliente.edo_c === "v") {
                Edo_Civil = "Viudo";
            } else if (this.state.cliente.edo_c === "s") {
                Edo_Civil = "Soltero";
            } else if (this.state.cliente.edo_c === "c") {
                Edo_Civil = "Casado";
            } else {
                Edo_Civil = "Divorciado";
            }

            axios.get('http://127.0.0.1:8000/api/v1/parroquias/' + empleado.Direccion)
                .then(response => {
                    this.setState({ Direccion: response.data })
                }).then(response => console.log(this.state.Direccion))
                .catch(function (error) {
                    console.log(error);
                    console.log(error.response.data);
                    console.log(error.response.status);
                    console.log(error.response.headers);
                })

            return <tr key={empleado.id}>
                <th scope="row">
                  <Link to={{ pathname: "/empleado/" + empleado.id, state: { empleadoID: empleado.id } }} className="btn btn-info">
                    {empleado.id}
                  </Link>
                </th>
                <td className="text-center"> {empleado.p_nombre} {empleado.p_nombre} </td>
                <td className="text-center"> {empleado.p_apellido} {empleado.p_apellido} </td>
                <td className="text-center"> {empleado.cedula} </td>
                <td className="text-center"> {empleado.email_p} </td>
                <td className="text-center"> {empleado.email_e} </td>
                <td className="text-center"> {empleado.fecha_n} </td>
                <td className="text-center"> {Edo_Civil} </td>
                <td className="text-center"> {empleado.profesion} </td>
                <td className="text-center"> {empleado.num_h}</td>
                <td className="text-center"> {empleado.salario}</td>
                <td className="text-center"> {this.state.Direccion}</td>
                <td className="text-center"> {empleado.username}</td>
              </tr>;
        });
        return <div className="wrapper">
            <Sidemenu />

            <div className="container-fluid m-0 p-0">
              <MenuAdmin />

              <div className="m-3 w-100">
                <h2 className="text-center m-3">
                  {" "}
                  SisLogUCAB Empleados DataTable
                </h2>

                <table className="table table-hover w-100">
                  <thead className="thead-dark">
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">Nombres</th>
                      <th scope="col">Apellidos</th>
                      <th scope="col">Cedula</th>
                      <th scope="col">Email Personal</th>
                      <th scope="col">Email Trabajo</th>
                      <th scope="col">Fecha Nacimiento</th>
                      <th scope="col">Edo. Civil</th>
                      <th scope="col">Profesion</th>
                      <th scope="col">N* Hijos</th>
                      <th scope="col">Salario</th>
                      <th scope="col">Direccion</th>
                      <th scope="col">Usuario</th>
                    </tr>
                  </thead>
                  <tbody>
                    { emp }
                  </tbody>
                </table>
              </div>
              <br />

              <div className="m-3">
                <FormEmpleado requestType="post"
                  btnText="Create" />
              </div>
            </div>
          </div>;
    }
}