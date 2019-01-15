import React, { Component } from 'react';
import axios from 'axios';
import Sidemenu from "../../containers/Sidemenu.jsx";
// import MenuAdmin from '../../containers/MenuAdmin';
import '../../css/account.css';

export default class ClienteDetail extends Component {
    constructor(props) {
        super(props)

        this.state = {
            cliente: {},
            clienteID: this.props.location.state.clienteID,
            estados: [],
            municipios: [],
            parroquias: []
        }
    }
    componentDidMount() {
        console.log(this.state.clienteID)
        axios.get("http://localhost:3001/api/v1/cliente/" + this.state.clienteID,
            {
              headers: {
                Authorization: "Bearer " + localStorage.getItem('token'),
                "Content-Type": "application/json"
              }
            }
          )
          .then(response => {
            this.setState({ cliente: response.data.cliente });
            //console.log(this.state.cliente);
          });

        axios.get("http://127.0.0.1:3001/api/v1/estados", {
            headers: {
                Authorization:
                "Bearer " + localStorage.getItem('token'),
                "Content-Type": "application/json"
            }
        }).then(response => {
            this.setState({ estados: response.data.lugar });
            //console.log(this.state.estados)
        }).catch(function (error) {
            console.log(error.response);
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
        const Fk_Lugar = parseInt(event.target.elements.Parroquias.value)

        if (requestType === "put") {
                let datas = JSON.stringify({
                    nombre: Nombre,
                    apellido: Apellido,
                    fecha_n: Fecha_N,
                    cedula: Cedula,
                    edo_c: Edo_C,
                    nombre_e: Nombre_E || null,
                    email: Email,
                    l_vip: L_VIP,
                    fk_lugar: Fk_Lugar,
                    username : Username,
                    password: Password
                })

            //console.log(datas);

            axios.put(`http://localhost:3001/api/v1/cliente/${clienteID}`,datas,
                {
                  headers: {
                    Authorization:
                    "Bearer " + localStorage.getItem('token'),
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
                "Bearer " + localStorage.getItem('token'),
                "Content-Type": "application/json"
              }
            }
          )
          .then(response => {
            this.setState({ cliente: response.data.cliente });
           // console.log(this.state.cliente);
          });
    } 

    onGetMunicipios() {
        console.log(this.refs.Estados.value);
        axios.get('http://localhost:3001/api/v1/municipios/' + this.refs.Estados.value, {
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('token'),
                'Content-Type': 'application/json'
            }
        }).then(response => {
            this.setState({ municipios: response.data.lugar });
            //console.log(this.state.municipios)
        }).catch(function (error) {
            console.log(error.response);
        });
    }

    onGetParroquias() {
        console.log(this.refs.Municipios.value);
        axios.get('http://localhost:3001/api/v1/parroquias/' + this.refs.Municipios.value, {
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('token'),
                'Content-Type': 'application/json'
            }
        }).then(response => {
            this.setState({ parroquias: response.data.lugar });
            //console.log(this.state.parroquias)
        }).catch(function (error) {
            console.log(error.response);
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
        } else if (this.state.cliente.edo_c === "d"){
            Edo_Civil = "Divorciado";
        }
        if (this.state.cliente.l_vip === false) {
            VIP = "El Cliente No Posee L-VIP";
        } else {
            VIP = "El Cliente Posee L-VIP";
        }

        var Est = this.state.estados.map(function (estado) {
            return <option value={estado.id} key={`option_${estado.id}`} > {estado.nombre} </option>
        });
        var Municipios = this.state.municipios.map(function (muni) {
            return <option value={muni.id} key={`option_${muni.id}`}> {muni.nombre}</option>
        });
        var Parroquias = this.state.parroquias.map(function (parro) {
            return <option value={parro.id} key={`option_${parro.id}`}> {parro.nombre}</option>
        });
        return ( 
        <div className="wrapper">
            <Sidemenu />

            <div className="container-fluid m-0 p-0">
                    {/* <MenuAdmin/> */}

            <div className="m-3 w-100">
              <h2 className="text-center m-3"> SisLogUCAB Cliente {this.state.cliente.id} Detalle </h2>

              <table className="table table-hover w-100">
                <thead className="thead-dark">
                  <tr>
                    <th scope="col" className="text-center" > Username </th>
                    <th scope="col" className="text-center" > Nombre Y Apellido </th>
                    <th scope="col" className="text-center" > Cedula </th>
                    <th scope="col" className="text-center" > Email </th>
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
                    <td className="text-center" >{this.state.cliente.email}</td>
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