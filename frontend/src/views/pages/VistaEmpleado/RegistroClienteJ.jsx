import React, { Component } from 'react';
import axios from 'axios';
import MenuEmpleado from "./MenuEmpleado.jsx";

export default class CreateClienteJ extends Component {
    constructor(props) {
        super(props);
        this.state = {
            estados: [],
            municipios: [],
            parroquias: []
        }
    }
    componentDidMount() {
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
        const Fk_Lugar = parseInt(event.target.elements.Parroquias.value)

        let data = JSON.stringify({
            nombre: Nombre,
            apellido: Apellido,
            fecha_n: Fecha_N,
            cedula: Cedula,
            email: Email,
            nombre_e: Nombre_E,
            l_vip: L_VIP,
            fk_lugar: Fk_Lugar,
            username: Username,
            password: Password,
        })

        console.log(data)

        axios.post('http://127.0.0.1:3001/api/v1/cliente/registro', data, {
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('token'),
                'Content-Type': 'application/json'
            }
        })
            .then(response => console.log(response))
            .catch(function (error) {
                console.log(error.response);
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
            <div className="wrapper" keywords="registro clientes">
                <MenuEmpleado/>

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