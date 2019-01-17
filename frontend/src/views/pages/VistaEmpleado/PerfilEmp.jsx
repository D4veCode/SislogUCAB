import React, { Component } from 'react';
import MenuEmpleado from './MenuEmpleado.jsx';
import axios from 'axios';
import '../../css/account.css';

class PerfilEmp extends Component {
    constructor(props) {
        super(props)

        this.state = {
            empleado: {},
            estados: [],
            municipios: [],
            parroquias: []
        }
    }
    componentDidMount() {
        axios.get("http://127.0.0.1:3001/api/v1/empleado/" + localStorage.getItem('id') , {
            headers: {
                Authorization:
                "Bearer " + localStorage.getItem('token'),
                "Content-Type": "application/json"
            }
        })
        .then(response => {
            this.setState({ empleado: response.data.empleado })
        })

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

    handleFormSubmit = async (event) => {
        event.preventDefault();
        const PNombre = event.target.elements.PNombre.value;
        const SNombre = event.target.elements.SNombre.value;
        const PApellido = event.target.elements.PApellido.value;
        const SApellido = event.target.elements.SApellido.value;
        const Email_P = event.target.elements.Email_P.value;
        //const Email_E = event.target.elements.Email_E.value;
        //const Fecha_N = event.target.elements.Fecha_N.value;
        //const Cedula = event.target.elements.Cedula.value;
        const Edo_C = event.target.elements.Edo_C.value;
        const Profesion = event.target.elements.Profesion.value;
        const Num_h = parseInt(event.target.elements.Num_h.value);
        //const Username = event.target.elements.Username.value;
        const Password = event.target.elements.Password.value;
        const Fk_Lugar = parseInt(event.target.elements.Parroquias.value);
        //const Fk_Emp = parseInt(event.target.elements.jefes.value);
        const Nivel_ACD = event.target.elements.Nivel_ACD.value;

        let datas = JSON.stringify({
            p_nombre: PNombre,
            s_nombre: SNombre,
            p_apellido: PApellido,
            s_apellido: SApellido,
            cedula: this.state.empleado.cedula,
            email_e: this.state.empleado.email_e,
            email_p: Email_P,
            fecha_n: this.state.empleado.fecha_n,
            edo_c: Edo_C,
            profesion: Profesion,
            num_h: Num_h,
            nivel_acd: Nivel_ACD,
            fk_lugar: Fk_Lugar,
            fk_emp: this.state.empleado.fk_emp,
            username: this.state.empleado.username,
            password: Password
        })


        //console.log(datas);

        await axios.put("http://localhost:3001/api/v1/empleado/"+localStorage.getItem('id'), datas, {
            headers: {
                Authorization:
                "Bearer " + localStorage.getItem('token'),
                "Content-Type": "application/json"
            }
        }).then(response => console.log(response))
        .catch(function (error) {
            console.log(error.response);
        });


        axios.get("http://localhost:3001/api/v1/empleado/" + localStorage.getItem('id'), {
            headers: {
                Authorization:
                "Bearer " + localStorage.getItem('token'),
                "Content-Type": "application/json"
            }
        }).then(response => {
            this.setState({ empleado: response.data.empleado });
            // console.log(this.state.cliente);
        });
    }

    render() {
        var Edo_Civil = "";
        if (this.state.empleado.edo_c === "v") {
            Edo_Civil = "Viudo";
        } else if (this.state.empleado.edo_c === "s") {
            Edo_Civil = "Soltero";
        } else if (this.state.empleado.edo_c === "c") {
            Edo_Civil = "Casado";
        } else if (this.state.empleado.edo_c === "d") {
            Edo_Civil = "Divorciado";
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
                <MenuEmpleado />

                <div className="container-fluid m-0 p-0">

                    <div className="m-2 w-100">
                        <h2 className="text-center"> Su Perfil</h2>

                        <div className="row">
                            <div className="col-4">
                                <div className="list-group" id="list-tab" role="tablist">
                                    <a className="list-group-item list-group-item-action active" id="list-home-list" data-toggle="list" href="#list-home" role="tab" aria-controls="home"> Nombres </a>
                                    <a className="list-group-item list-group-item-action" id="list-profile-list" data-toggle="list" href="#list-profile" role="tab" aria-controls="profile"> Apellidos </a>
                                    <a className="list-group-item list-group-item-action" id="list-messages-list" data-toggle="list" href="#list-messages" role="tab" aria-controls="messages"> Cedula || Fecha Nacimiento </a>
                                    <a className="list-group-item list-group-item-action" id="list-messages-list" data-toggle="list" href="#list-messages" role="tab" aria-controls="messages"> Email Personal | Empresarial </a>
                                    <a className="list-group-item list-group-item-action" id="list-settings-list" data-toggle="list" href="#list-settings" role="tab" aria-controls="settings"> Edo. Civil || Nivel Acad</a>
                                    <a className="list-group-item list-group-item-action" id="list-settings-list" data-toggle="list" href="#list-settings" role="tab" aria-controls="settings"> Profesion || N* Hijos</a>
                                    <a className="list-group-item list-group-item-action" id="list-settings-list" data-toggle="list" href="#list-settings" role="tab" aria-controls="settings"> Direccion || Username </a>
                                </div>
                            </div>
                            <div className="col-8">
                                <div className="tab-content" id="nav-tabContent">
                                    <div className="tab-pane fade show active" id="list-home" role="tabpanel" aria-labelledby="list-home-list">{this.state.empleado.p_nombre} || {this.state.empleado.s_nombre}</div>
                                    <div className="tab-pane fade" id="list-profile" role="tabpanel" aria-labelledby="list-profile-list"> {this.state.empleado.p_apelldio} || {this.state.empleado.s_apellido}</div>
                                    <div className="tab-pane fade" id="list-messages" role="tabpanel" aria-labelledby="list-messages-list">{this.state.empleado.cedula} || {this.state.empleado.fecha_n}</div>
                                    <div className="tab-pane fade" id="list-messages" role="tabpanel" aria-labelledby="list-messages-list">{this.state.empleado.email_p} || {this.state.empleado.email_e}</div>
                                    <div className="tab-pane fade" id="list-messages" role="tabpanel" aria-labelledby="list-messages-list">{Edo_Civil} || {this.state.empleado.nivel_acd}</div>
                                    <div className="tab-pane fade" id="list-messages" role="tabpanel" aria-labelledby="list-messages-list">{this.state.empleado.profesion} || {this.state.empleado.num_h}</div>
                                    <div className="tab-pane fade" id="list-settings" role="tabpanel" aria-labelledby="list-settings-list">{this.state.empleado.direccion} || {this.state.empleado.username}</div>
                                </div>
                            </div>
                        </div>

                        <br />

                        <div className="m-3">
                            <form onSubmit={event => this.handleFormSubmit(event)}>
                                <div className="form-row">
                                    <div className="form-group col-md-6">
                                        <label htmlFor="Email_P">Email Personal</label>
                                        <input type="email" name="Email_P" className="form-control" />
                                    </div>
                                    <div className="form-group col-md-6">
                                        <label htmlFor="Password">Password</label>
                                        <input type="password" name="Password" className="form-control" id="inputPassword4" placeholder="Password" />
                                    </div>
                                </div>
                                <div className="form-row">
                                    <div className="form-group col-md-4">
                                        <label htmlFor="PNombre">Primer Nombre</label>
                                        <input type="text" name="PNombre" className="form-control" />
                                    </div>
                                    <div className="form-group col-md-4">
                                        <label htmlFor="SNombre">Segundo Nombre</label>
                                        <input type="text" name="SNombre" className="form-control" />
                                    </div>
                                    <div className="form-group col-md-4">
                                        <label htmlFor="PApellido">
                                            Primer Apellido
                                        </label>
                                        <input type="text" name="PApellido" className="form-control" />
                                    </div>
                                </div>
                                <div className="form-row">
                                    <div className="form-group col-md-3">
                                        <label htmlFor="SApellido">
                                            Segundo Apellido
                                        </label>
                                        <input type="text" name="SApellido" className="form-control" />
                                    </div>
                                    <div className="form-group col-md-3">
                                        <label htmlFor="Cedula">Cedula</label>
                                        <input type="text" name="Cedula" className="form-control" />
                                    </div>
                                    <div className="form-group col-md-3">
                                        <label htmlFor="Fecha_N">
                                            Fecha Nacimiento
                                        </label>
                                        <input type="date" name="Fecha_N" className="form-control" />
                                    </div>
                                    <div className="form-group col-md-3">
                                        <label htmlFor="Num_h">Numero de Hijos</label>
                                        <input type="text" name="Num_h" className="form-control" />
                                    </div>
                                </div>
                                <div className="form-row">
                                    <div className="form-group col-md-4">
                                        <label htmlFor="Edo_C">Estado Civil</label>
                                        <select className="form-control" name="Edo_C">
                                            <option >Choose...</option>
                                            <option value="c">Casado</option>
                                            <option value="d">Divorciado</option>
                                            <option value="s">Soltero</option>
                                            <option value="v">Viudo</option>
                                        </select>
                                    </div>
                                    <div className="form-group col-md-4">
                                        <label htmlFor="Profesion">Profesion</label>
                                        <input type="text" name="Profesion" className="form-control" />
                                    </div>
                                    <div className="form-group col-md-4">
                                        <label htmlFor="Nivel_ACD">Nivel Academico</label>
                                        <input type="text" name="Nivel_ACD" className="form-control" />
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

export default PerfilEmp;

