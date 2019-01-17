import React, { Component } from 'react';
import UserMenu from './Usermenu.jsx';
import axios from 'axios';
import '../../css/account.css';

class Perfil extends Component{
    constructor(props) {
        super(props)

        this.state = {
            cliente: {},
            estados: [],
            municipios: [],
            parroquias: []
        }
    }
    componentDidMount() {
        axios.get("http://localhost:3001/api/v1/cliente/" + localStorage.getItem('id'),
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

    handleFormSubmit = async(event) => {
        event.preventDefault();
        const Nombre = event.target.elements.Nombre.value;
        const Apellido = event.target.elements.Apellido.value;
        //const Fecha_N = event.target.elements.Fecha_N.value;
        //const Cedula = event.target.elements.Cedula.value;
        const Edo_C = event.target.elements.Edo_C.value;
        const Nombre_E = event.target.elements.Nombre_E.value;
        //const L_VIP = parseInt(event.target.elements.L_VIP.value);
        //const Username = event.target.elements.Username.value;
        const Password = event.target.elements.Password.value;
        const Email = event.target.elements.Email.value;
        const Fk_Lugar = parseInt(event.target.elements.Parroquias.value)

        let datas;
        if (this.cliente.l_vip==null){
            datas = JSON.stringify({
                nombre: Nombre,
                apellido: Apellido,
                fecha_n: this.cliente.fecha_n,
                cedula: this.state.cliente.cedula,
                edo_c: Edo_C,
                nombre_e: Nombre_E || null,
                email: Email,
                l_vip: 0,
                fk_lugar: Fk_Lugar,
                username: localStorage.getItem('username'),
                password: Password
            })
        }else {
            datas = JSON.stringify({
                nombre: Nombre,
                apellido: Apellido,
                fecha_n: this.cliente.fecha_n,
                cedula: this.state.cliente.cedula,
                edo_c: Edo_C,
                nombre_e: Nombre_E || null,
                email: Email,
                l_vip: this.state.cliente.l_vip,
                fk_lugar: Fk_Lugar,
                username: localStorage.getItem('username'),
                password: Password
            })
        }
        
            //console.log(datas);

        await axios.put("http://localhost:3001/api/v1/cliente/"+ localStorage.getItem('id'), datas,
            {
                headers: {
                    Authorization: "Bearer " + localStorage.getItem('token'),
                    "Content-Type": "application/json"
                }
            }).then(response => console.log(response))
            .catch(function (error) {
                console.log(error.response);
            });
        

        axios.get("http://localhost:3001/api/v1/cliente/" + localStorage.getItem('id'), {
            headers: {
                Authorization:
                "Bearer " + localStorage.getItem('token'),
                "Content-Type": "application/json"
            }
        }).then(response => {
            this.setState({ cliente: response.data.cliente });
        // console.log(this.state.cliente);
        });
    }

    onGetMunicipios() {
        //console.log(this.refs.Estados.value);
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
        //console.log(this.refs.Municipios.value);
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
    render(){
        var Edo_Civil = "";
        var VIP = "";
        if (this.state.cliente.edo_c === "v") {
            Edo_Civil = "Viudo";
        } else if (this.state.cliente.edo_c === "s") {
            Edo_Civil = "Soltero";
        } else if (this.state.cliente.edo_c === "c") {
            Edo_Civil = "Casado";
        } else if (this.state.cliente.edo_c === "d") {
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
        return(
            <div className="wrapper" keywords="clientes">
                <UserMenu/>

                <div className="container-fluid m-0 p-0">
                   
                    <div className="m-2 w-100">
                        <h2 className="text-center"> Su Perfil</h2>

                        <div className="row">
                            <div className="col-4">
                                <div className="list-group" id="list-tab" role="tablist">
                                    <a className="list-group-item list-group-item-action active" id="list-home-list" data-toggle="list" href="#list-home" role="tab" aria-controls="home">Nombre Y Apellido</a>
                                    <a className="list-group-item list-group-item-action" id="list-profile-list" data-toggle="list" href="#list-profile" role="tab" aria-controls="profile"> Cedula || Fecha Nacimiento </a>
                                    <a className="list-group-item list-group-item-action" id="list-messages-list" data-toggle="list" href="#list-messages" role="tab" aria-controls="messages"> Edo. Civil || Empresa </a>
                                    <a className="list-group-item list-group-item-action" id="list-messages-list" data-toggle="list" href="#list-messages" role="tab" aria-controls="messages"> L-VIP </a>
                                    <a className="list-group-item list-group-item-action" id="list-settings-list" data-toggle="list" href="#list-settings" role="tab" aria-controls="settings"> Usuario || Email</a>
                                </div>
                            </div>
                            <div className="col-8">
                                <div className="tab-content" id="nav-tabContent">
                                    <div className="tab-pane fade show active" id="list-home" role="tabpanel" aria-labelledby="list-home-list">{this.state.cliente.nombre} || {this.state.cliente.apellido }</div>
                                    <div className="tab-pane fade" id="list-profile" role="tabpanel" aria-labelledby="list-profile-list"> {this.state.cliente.cedula} || {this.state.cliente.fecha_n}</div>
                                    <div className="tab-pane fade" id="list-messages" role="tabpanel" aria-labelledby="list-messages-list">{Edo_Civil} || {this.state.cliente.empresa}</div>
                                    <div className="tab-pane fade" id="list-messages" role="tabpanel" aria-labelledby="list-messages-list">{VIP} </div>
                                    <div className="tab-pane fade" id="list-settings" role="tabpanel" aria-labelledby="list-settings-list">{this.state.cliente.username} || {this.state.cliente.email}</div>
                                </div>
                            </div>
                        </div>
                        
                        <br />

                        <div className="m-3">
                            <form onSubmit={event => this.handleFormSubmit(event)}>
                                <div className="form-row">
                                    <div className="form-group col-md-4">
                                        <label htmlform="Password">Password</label>
                                        <input type="password" name="Password" className="form-control" id="inputPassword4" />
                                    </div>
                                    <div className="form-group col-md-4">
                                        <label htmlform="Edo_C">Estado Civil</label>
                                        <select className="form-control" name="Edo_C">
                                            <option readOnly> Choose... </option>
                                            <option value="c">Casado</option>
                                            <option value="s">Soltero</option>
                                            <option value="v">Viudo</option>
                                            <option value="d">Divorciado</option>
                                        </select>
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
                                        <label htmlform="Nombre_E">Nombre Empresa</label>
                                        <input type="text" name="Nombre_E" className="form-control" />
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
                            
                                <button type="submit" className="btn btn-primary">
                                    Update
                                </button>
                            </form>
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}

export default Perfil;

