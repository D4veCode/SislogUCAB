import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Sidemenu from '../../containers/Sidemenu.jsx';
import ReactTable from "react-table";
import "react-table/react-table.css";
import axios from 'axios';
import '../../css/account.css';

export default class Empleado extends Component{
    constructor(props){
        super(props)
        this.state = {
            empleados : [],
            estados: [],
            municipios: [],
            parroquias: [],
            jefe:[],
            roles:[]
        } 
    }
    componentDidMount(){
        axios
          .get("http://127.0.0.1:3001/api/v1/empleados", {
            headers: {
              Authorization:
                "Bearer " + localStorage.getItem('token'),
                "Content-Type": "application/json"
            }
          })
          .then(response => {
            this.setState({ empleados: response.data.empleados });
            //console.log(this.state.empleados);
          })
          .catch(function(error) {
            console.log(error.response);
          }); 
          
        axios.get("http://127.0.0.1:3001/api/v1/roles", {
            headers: {
                Authorization:
                    "Bearer " + localStorage.getItem('token'),
                "Content-Type": "application/json"
            }
        }).then(response => {
            this.setState({ roles: response.data.roles });
            //console.log(this.state.roles);
        }).catch(function (error) {
            console.log(error.response);
        });
          
        axios.get("http://127.0.0.1:3001/api/v1/estados", {
            headers: {
                Authorization:
                "Bearer "+ localStorage.getItem('token'),
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
        console.log(this.refs.Estados.value);
        axios.get('http://localhost:3001/api/v1/municipios/' + this.refs.Estados.value, {
            headers: {
                'Authorization': 'Bearer '+ localStorage.getItem('token'),
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
                'Authorization': 'Bearer '+ localStorage.getItem('token'),
                'Content-Type': 'application/json'
            }
        }).then(response => {
            this.setState({ parroquias: response.data.lugar });
            //console.log(this.state.parroquias)
        }).catch(function (error) {
            console.log(error.response);
        });
    }

    handleFormSubmit = (event) => {
        event.preventDefault();
        const PNombre = event.target.elements.PNombre.value;
        const SNombre = event.target.elements.SNombre.value;
        const PApellido = event.target.elements.PApellido.value;
        const SApellido = event.target.elements.SApellido.value;
        const Email_P = event.target.elements.Email_P.value;
        const Email_E = event.target.elements.Email_E.value;
        const Fecha_N = event.target.elements.Fecha_N.value;
        const Cedula = event.target.elements.Cedula.value;
        const Edo_C = event.target.elements.Edo_C.value;
        const Profesion = event.target.elements.Profesion.value;
        const Num_h = parseInt(event.target.elements.Num_h.value);
        const Username = event.target.elements.Username.value;
        const Password = event.target.elements.Password.value;
        const Fk_Lugar = parseInt(event.target.elements.Parroquias.value);
        const Fk_Emp = parseInt(event.target.elements.jefes.value);
        const Nivel_ACD = event.target.elements.Nivel_ACD.value;
        const rol = event.target.elements.rol.value;

            let datas = JSON.stringify({
                p_nombre: PNombre,
                s_nombre: SNombre,
                p_apellido: PApellido,
                s_apellido: SApellido,
                cedula: Cedula,
                email_e: Email_E,
                email_p: Email_P,
                fecha_n: Fecha_N,
                edo_c: Edo_C,
                profesion: Profesion,
                num_h: Num_h,
                nivel_acd: Nivel_ACD,
                fk_lugar: Fk_Lugar,
                fk_emp: Fk_Emp,
                username: Username,
                password: Password,
                rol: rol
            });

            console.log(datas);

            axios.post('http://localhost:3001/api/v1/empleado/registro', datas, {
                headers: {
                    Authorization:
                    "Bearer "+ localStorage.getItem('token'),
                    "Content-Type": "application/json"
                }
            }).then(response => console.log(response))
            .catch(function (error) {
                console.log(error.response);
            });
        }
    render(){
        const columns = [{
            Header: '#',
            Cell: props => {
                return (
                    <Link to={{
                        pathname: "/admin/empleado/" + props.original.id,
                        state: {
                            empleadoID: props.original.id,
                        }
                    }} className="btn btn-info">{props.original.id}</Link>
                )
            },
            headerStyle: {
                background: "black",
                color: 'white',
            },
            width: 50,
            maxWidth: 50,
            minWidth: 50,
        },
        {
            Header: 'Username',
            accessor: 'username',
            sortable: false,
            style: {
                textAlign: "center"
            },
            headerStyle: {
                background: "black",
                color: 'white',
            },
            width: 100,
            maxWidth: 100,
            minWidth: 100,
        },
        {
            Header: 'Nombres',
            Cell: props => {
                var segundoN;
                if( props.original.s_nombre === null){
                    segundoN = "";
                }else{
                    segundoN = props.original.s_nombre;
                }
                return (
                    props.original.p_nombre +" "+ segundoN
                )
            },
            sortable: false,
            style: {
                textAlign: "center"
            },
            headerStyle: {
                background: "black",
                color: 'white',
            },
            width: 100,
            maxWidth: 100,
            minWidth: 100,
        },
        {
            Header: 'Apellidos',
            Cell: props => {
                var segundoA;
                if (props.original.s_apellido === null) {
                    segundoA = "";
                } else {
                    segundoA = props.original.s_apellido;
                }
                return (
                    props.original.p_apellido + " " + segundoA

                )
            },
            sortable: false,
            style: {
                textAlign: "center"
            },
            headerStyle: {
                background: "black",
                color: 'white',
            },
            width: 100,
            maxWidth: 100,
            minWidth: 100,
        },
        {
            Header: 'Cedula',
            accessor: 'cedula',
            sortable: false,
             style: {
                textAlign: "center"
            },
            headerStyle: {
                background: "black",
                color: 'white',
            },
            width: 110,
            maxWidth: 110,
            minWidth: 110,
        },
        {
            Header: 'Email',
            accessor: 'email_p',
            sortable: false,
            style: {
                textAlign: "center"
            },
            headerStyle: {
                background: "black",
                color: 'white',
            },
            width: 120,
            maxWidth: 120,
            minWidth: 120,
        },
        {
            Header: 'Email E',
            accessor: 'email_e',
            sortable: false,
            style: {
                textAlign: "center"
            },
            headerStyle: {
                background: "black",
                color: 'white',
            },
            width: 120,
            maxWidth: 120,
            minWidth: 120,
        },
        {
            Header: 'Edo C',
            sortable: false,
            style: {
                textAlign: "center"
            },
            headerStyle: {
                background: "black",
                color: 'white',
            },
            Cell: props => {
                var Edo_Civil = "";

                if (props.original.edo_c === "v") {
                  Edo_Civil = "Viudo";
                } else if (props.original.edo_c === "s") {
                  Edo_Civil = "Soltero";
                } else if (props.original.edo_c === "c") {
                  Edo_Civil = "Casado";
                } else if (props.original.edo_c === "d") {
                  Edo_Civil = "Divorciado";
                }
                return (
                    Edo_Civil
                )
            },
            width: 100,
            maxWidth: 100,
            minWidth: 100,
        },
        {
            Header: 'Nivel Acad',
            accessor: 'nivel_acd',
            sortable: false,
            style: {
                textAlign: "center"
            },
            headerStyle: {
                background: "black",
                color: 'white',
            },
            width: 110,
            maxWidth: 110,
            minWidth: 110,
        },
        {
            Header: 'Profesion',
            accessor: 'profesion',
            sortable: false,
            style: {
                textAlign: "center"
            },
            headerStyle: {
                background: "black",
                color: 'white',
            },
            width: 110,
            maxWidth: 110,
            minWidth: 110,
        },
        {
            Header: 'Fecha Nac',
            accessor: 'fecha_n',
            sortable: false,
            style: {
                textAlign: "center"
            },
            headerStyle: {
                background: "black",
                color: 'white',
            },
            width: 110,
            maxWidth: 110,
            minWidth: 110,
        },
        {
            Header: 'N Hijos',
            accessor: 'num_h',
            sortable: false,
            style: {
                textAlign: "center"
            },
            headerStyle: {
                background: "black",
                color: 'white',
            },
            width: 80,
            maxWidth: 80,
            minWidth: 80,
        },
        {
            Header: 'Direccion',
            accessor: 'direccion',
            sortable: false,
            style: {
                textAlign: "center"
            },
            headerStyle: {
                 background: "black",
                color: 'white',
            },
            width: 80,
            maxWidth: 80,
            minWidth: 80,
        },
        {
            Header: 'Jefe',
            accessor: 'fk_emp',
            sortable: false,
            style: {
                textAlign: "center"
            },
            headerStyle: {
                background: "black",
                color: 'white',
            },
            width: 80,
            maxWidth: 80,
            minWidth: 80,
        },
        {
            Header: 'Action',
            Cell: props => {
                return (
                    <button className="btn btn-danger"
                        onClick={() => {
                            axios.delete('http://localhost:3001/api/v1/empleado/' + props.original.id,
                                {
                                    headers: {
                                        Authorization: "Bearer " + localStorage.getItem('token'),
                                        "Content-Type": "application/json"
                                    }
                                }
                            ).then(response => {
                                console.log(response.data)
                            })
                            .catch(function (error) {
                                console.log(error.response);
                            });
                        }}
                    >Delete</button>
                )
            },
            headerStyle: {
                background: "black",
                color: 'white',
            },
            width: 90,
            maxWidth: 90,
            minWidth: 90,
        }]

        var Est = this.state.estados.map(function (estado) {
            return <option value={estado.id} key={`option_${estado.id}`} > {estado.nombre} </option>
        });
        var Municipios = this.state.municipios.map(function (muni) {
            return <option value={muni.id} key={`option_${muni.id}`}> {muni.nombre}</option>
        });
        var Parroquias = this.state.parroquias.map(function (parro) {
            return <option value={parro.id} key={`option_${parro.id}`}> {parro.nombre}</option>
        });
        var roles = this.state.roles.map(function (rol) {
            return <option value={rol.nombre} key={`option_${rol.id}`}> {rol.nombre}</option>
        });
        var jefes = this.state.empleados.map(function(jefe){
            if (jefe.fk_emp !== null){
                return <option value={jefe.fk_emp} key={jefe.id}> {jefe.fk_emp} </option>
            }
        })
        return (
            <div className="wrapper" keywords="clientes">
                <Sidemenu/>
            
                <div className="container-fluid m-0 p-0 hola">
                    {/* <MenuAdmin/> */}
                
                    <div className="m-3 w-100">
                        <h2 className="text-center m-3"> SisLogUCAB Empleados DataTable </h2>

                            <ReactTable className="mr-4"
                                columns={columns}
                                data={this.state.empleados}
                                defaultPageSize={5}
                                filterable={false}
                                noDataText="No Posee Registro Alguno!"
                                showPageSizeOptions={false}
                            ></ReactTable>
                            <br/>
                        <div>
                            <form onSubmit={event => this.handleFormSubmit(event)}>
                                <div className="form-row">
                                    <div className="form-group col-md-6">
                                        <label htmlFor="Username">Username</label>
                                        <input type="text" name="Username" className="form-control" id="inputEmail4" placeholder="Username" />
                                    </div>
                                    <div className="form-group col-md-6">
                                        <label htmlFor="Password">Password</label>
                                        <input type="password" name="Password" className="form-control" id="inputPassword4" placeholder="Password" />
                                    </div>
                                </div>
                                <div className="form-row">
                                    <div className="form-group col-md-4">
                                        <label htmlFor="PNombre">Primer Nombre</label>
                                        <input type="text" name="PNombre" className="form-control"/>
                                    </div>
                                    <div className="form-group col-md-4">
                                        <label htmlFor="SNombre">Segundo Nombre</label>
                                        <input type="text" name="SNombre" className="form-control"/>
                                    </div>
                                    <div className="form-group col-md-4">
                                        <label htmlFor="PApellido">
                                        Primer Apellido
                                        </label>
                                        <input type="text" name="PApellido" className="form-control" />
                                    </div>
                                </div>
                                <div className="form-row">
                                    <div className="form-group col-md-4">
                                        <label htmlFor="SApellido">
                                        Segundo Apellido
                                        </label>
                                        <input type="text" name="SApellido" className="form-control"  />
                                    </div>
                                    <div className="form-group col-md-4">
                                        <label htmlFor="Cedula">Cedula</label>
                                        <input type="text" name="Cedula" className="form-control"/>
                                    </div>
                                    <div className="form-group col-md-4">
                                        <label htmlFor="Email_P">Email Personal</label>
                                        <input type="email" name="Email_P" className="form-control" />
                                    </div>
                                </div>
                                <div className="form-row">
                                    <div className="form-group col-md-4">
                                        <label htmlFor="Email_E">
                                        Email Empresarial
                                        </label>
                                        <input type="email" name="Email_E" className="form-control" />
                                    </div>
                                    <div className="form-group col-md-4">
                                        <label htmlFor="Fecha_N">
                                        Fecha Nacimiento
                                        </label>
                                        <input type="date" name="Fecha_N" className="form-control" />
                                    </div>
                                    <div className="form-group col-md-4">
                                        <label htmlFor="Edo_C">Estado Civil</label>
                                        <select  className="form-control" name="Edo_C">
                                        <option >Choose...</option>
                                        <option value="c">Casado</option>
                                        <option value="d">Divorciado</option>
                                        <option value="s">Soltero</option>
                                        <option value="v">Viudo</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="form-row">
                                    <div className="form-group col-md-3">
                                        <label htmlform="estados">Estados</label>
                                        <select ref="Estados" className="form-control" name="Estados" onChange={(e) => { this.onGetMunicipios(); }}>
                                            <option readOnly>Seleccione...</option>
                                            {Est}
                                        </select>
                                    </div>
                                    <div className="form-group col-md-3">
                                        <label htmlform="municipios">Municipios</label>
                                        <select ref="Municipios" className="form-control" name="Municipios" onChange={(e) => { this.onGetParroquias(); }}>
                                            <option readOnly>Seleccione...</option>
                                            {Municipios}
                                        </select>
                                    </div>
                                    <div className="form-group col-md-3">
                                        <label htmlform="parroquias">Parroquias</label>
                                        <select className="form-control" name="Parroquias">
                                            <option readOnly>Seleccione...</option>
                                            {Parroquias}
                                        </select>
                                    </div>
                                    <div className="form-group col-md-3">
                                        <label htmlform="parroquias">Roles</label>
                                        <select className="form-control" name="rol">
                                            <option readOnly>Seleccione...</option>
                                            {roles}
                                        </select>
                                    </div>
                                </div>
                                <div className="form-row">
                                    <div className="form-group col-md-3">
                                        <label htmlFor="Num_h">Numero de Hijos</label>
                                        <input type="text" name="Num_h" className="form-control"  />
                                    </div>
                                    <div className="form-group col-md-3">
                                        <label htmlFor="jefes">Jefes</label>
                                        <select  className="form-control" name="jefes">
                                            <option >Choose...</option>
                                            {jefes}
                                        </select>
                                    </div>
                                    <div className="form-group col-md-3">
                                        <label htmlFor="Profesion">Profesion</label>
                                        <input type="text" name="Profesion" className="form-control"/>
                                    </div>
                                    <div className="form-group col-md-3">
                                        <label htmlFor="Nivel_ACD">Nivel Academico</label>
                                        <input type="text" name="Nivel_ACD" className="form-control"/>
                                    </div>
                                </div>

                                <button type="submit" className="btn btn-primary">
                                    Registro
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}