import React, { Component } from 'react';
import axios from 'axios';
import Sidemenu from "../../containers/Sidemenu.jsx";
import MenuAdmin from '../../containers/MenuAdmin';
import '../../css/account.css';

export default class ClienteDetail extends Component {
    constructor(props) {
        super(props)

        this.state = {
            cliente: {},
            clienteID: this.props.location.state.clienteID,
        }
    }
    componentDidMount() {
        console.log(this.state.clienteID)
        axios.get("http://localhost:3001/api/v1/cliente/" + this.state.clienteID,
            {
              headers: {
                Authorization: "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE1NDQzODE3NTQsIm5iZiI6MTU0NDM4MTc1NCwianRpIjoiMzU5ZGVjMDItOWYzYS00OWZmLTk0ZTEtMDg0YjBlMmNlZjBmIiwiZXhwIjoxNTQ0NDI2NzU0LCJpZGVudGl0eSI6ImhpdDMiLCJmcmVzaCI6ZmFsc2UsInR5cGUiOiJhY2Nlc3MifQ.jaFwfrR1GApJvM5Upot0jLxEmZiohsJonv7vqAgkkbs",
                "Content-Type": "application/json"
              }
            }
          )
          .then(response => {
            this.setState({ cliente: response.data.cliente });
            //console.log(this.state.cliente);
          });

        
    }

    handleFormSubmit = (event, requestType, clienteID) => {
        event.preventDefault();
        const Nombre = event.target.elements.Nombre.value;
        const Apellido = event.target.elements.Apellido.value;
        const Fecha_N = event.target.elements.Fecha_N.value;
        const Cedula = event.target.elements.Cedula.value;
        const Edo_C = event.target.elements.Edo_C.value;
        const Nombre_E = event.target.elements.Nombre_E.value;
        const L_VIP = parseInt(event.target.elements.L_VIP.value);
        const Username = event.target.elements.Username.value;
        const Password = event.target.elements.Password.value;
        const Email = event.target.elements.Email.value;

        if (requestType === "put") {
                let datas = JSON.stringify({
                    nombre: Nombre,
                    apellido: Apellido,
                    fecha_n: Fecha_N,
                    cedula: Cedula,
                    edo_c: Edo_C,
                    nombre_e: Nombre_E,
                    email: Email,
                    l_vip: L_VIP,
                    fk_lugar: 1,
                    username : Username,
                    password: Password
                })

            console.log(datas);

            axios.put(`http://localhost:3001/api/v1/cliente/${clienteID}`,datas,
                {
                  headers: {
                    Authorization:
                    "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE1NDQzNjM4NjcsIm5iZiI6MTU0NDM2Mzg2NywianRpIjoiOTRmYzE0ZTktMTU5OS00ZDdhLWI4OTUtOTExYThhMTU4OGU0IiwiZXhwIjoxNTQ0NDA4ODY3LCJpZGVudGl0eSI6ImhpdDIiLCJmcmVzaCI6ZmFsc2UsInR5cGUiOiJhY2Nlc3MifQ.P_cVpJ7pCuATRBE55EtdZOSFEzgrz0wu5Cm5oEaHgmQ",
                    "Content-Type": "application/json"
                  }
                }
              )
              .then(response => console.log(response))
                .catch(function (error) {
                    console.log(error.response);
                }); 
        }
        
        axios.get("http://localhost:3001/api/v1/cliente/" +this.state.clienteID, {
              headers: {
                Authorization:
                "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE1NDQzNjM4NjcsIm5iZiI6MTU0NDM2Mzg2NywianRpIjoiOTRmYzE0ZTktMTU5OS00ZDdhLWI4OTUtOTExYThhMTU4OGU0IiwiZXhwIjoxNTQ0NDA4ODY3LCJpZGVudGl0eSI6ImhpdDIiLCJmcmVzaCI6ZmFsc2UsInR5cGUiOiJhY2Nlc3MifQ.P_cVpJ7pCuATRBE55EtdZOSFEzgrz0wu5Cm5oEaHgmQ",
                "Content-Type": "application/json"
              }
            }
          )
          .then(response => {
            this.setState({ cliente: response.data.cliente });
           // console.log(this.state.cliente);
          });
    } 
    render() {
        var Edo_Civil = "";
        var VIP = "";
        if (this.state.cliente.edo_c === "v") {
            Edo_Civil = "Viudo";
        } else if (this.state.cliente.edo_c === "s") {
            Edo_Civil = "Soltero";
        } else if(this.state.cliente.edo_c === "c"){
            Edo_Civil = "Casado";
        }else {
            Edo_Civil = "Divorciado";
        }
        if (this.state.cliente.l_vip === false) {
            VIP = "El Cliente No Posee L-VIP";
        } else {
            VIP = "El Cliente Posee L-VIP";
        }
        return ( 
        <div className="wrapper">
            <Sidemenu />

            <div className="container-fluid m-0 p-0">
                <MenuAdmin />

            <div className="m-3 w-100">
              <h2 className="text-center m-3"> SisLogUCAB Cliente {this.state.cliente.id} Detalle </h2>

              <table className="table table-hover w-100">
                <thead className="thead-dark">
                  <tr>
                    <th scope="col" className="text-center" > Username </th>
                    <th scope="col" className="text-center" > Nombre Y Apellido </th>
                    <th scope="col" className="text-center" > Cedula </th>
                    <th scope="col" className="text-center" > Empresa </th>
                    <th scope="col" className="text-center" > Edo. Civil </th>
                    <th scope="col" className="text-center" > L_VIP </th>
                    <th scope="col" className="text-center" > Nacimiento </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="text-center" >{this.state.cliente.username}</td>
                    <td className="text-center" >{this.state.cliente.nombre} {this.state.cliente.apellido}</td>
                    <td className="text-center" >{this.state.cliente.cedula}</td>
                    <td className="text-center" >{this.state.cliente.nombre_e}</td>
                    <td className="text-center" >{Edo_Civil}</td>
                    <td className="text-center" >{VIP}</td>
                    <td className="text-center" >{this.state.cliente.fecha_n}</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <br />

            <div className="m-3">
                <form onSubmit={event => this.handleFormSubmit(
                        event,
                        'put',
                        this.state.clienteID
                        )}>
                    <div className="form-row">
                        <div className="form-group col-md-4">
                            <label htmlform="Username">Username</label>
                                    <input type="text" name="Username" className="form-control"/>
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
                        <div className="form-group col-md-3">
                            <label htmlform="Nombre_E">Nombre Empresa</label>
                            <input type="text" name="Nombre_E" className="form-control" />
                        </div>
                        <div className="form-group col-md-3">
                            <label htmlform="Fecha_N">Nacimiento</label>
                            <input type="date" name="Fecha_N" className="form-control" />
                        </div>
                        <div className="form-group col-md-3">
                            <label htmlform="L_VIP">L_VIP</label>
                            <select id="inputState" className="form-control" name="L_VIP">
                                <option readOnly> Choose... </option>
                                <option value="1">Si</option>
                                <option value="0">No</option>
                            </select>
                        </div>
                        <div className="form-group col-md-3">
                            <label htmlform="Edo_C">Estado Civil</label>
                            <select className="form-control" name="Edo_C">
                                <option readOnly> Choose... </option>
                                <option value="c">Casado</option>
                                <option value="s">Soltero</option>
                                <option value="v">Viudo</option>
                                <option value="d">Divorciado</option>
                            </select>
                        </div>
                    </div>

                    <button type="submit" className="btn btn-primary">
                        Update
                    </button>
                </form>
            </div>

            </div>
        </div>
        );
    }
}