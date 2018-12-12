import React, { Component } from 'react';
import Sidemenu from '../../containers/Sidemenu.jsx';
//import MenuAdmin from '../../containers/MenuAdmin';
import {Link} from 'react-router-dom';
import ReactTable from "react-table";
import "react-table/react-table.css";
import axios from 'axios';
import '../../css/account.css';

export default class Empleado extends Component{
    constructor(props){
        super(props)
        this.state = {
            empleados : [],
        } 
    }
    componentDidMount(){
        axios.get("http://127.0.0.1:8000/api/v1/empleados",{
            headers: {
                Authorization:
                "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE1NDQzODE3NTQsIm5iZiI6MTU0NDM4MTc1NCwianRpIjoiMzU5ZGVjMDItOWYzYS00OWZmLTk0ZTEtMDg0YjBlMmNlZjBmIiwiZXhwIjoxNTQ0NDI2NzU0LCJpZGVudGl0eSI6ImhpdDMiLCJmcmVzaCI6ZmFsc2UsInR5cGUiOiJhY2Nlc3MifQ.jaFwfrR1GApJvM5Upot0jLxEmZiohsJonv7vqAgkkbs",
                "Content-Type": "application/json"
            }
        })
        .then(response =>{
            this.setState({empleados: response.data.empleados})
            console.log(this.state.empleados);
        }).catch(function(error) {
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
                } else {
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
            Header: 'Salario',
            accessor: 'salario',
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
            Cell: props => {
                this.state = {
                    ubicacion: {}
                }
                axios.get("http://127.0.0.1:8000/api/v1/parroquias/" + props.original.Direccion, {
                    headers: {
                        Authorization:
                        "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE1NDQzNjM4NjcsIm5iZiI6MTU0NDM2Mzg2NywianRpIjoiOTRmYzE0ZTktMTU5OS00ZDdhLWI4OTUtOTExYThhMTU4OGU0IiwiZXhwIjoxNTQ0NDA4ODY3LCJpZGVudGl0eSI6ImhpdDIiLCJmcmVzaCI6ZmFsc2UsInR5cGUiOiJhY2Nlc3MifQ.P_cVpJ7pCuATRBE55EtdZOSFEzgrz0wu5Cm5oEaHgmQ",
                        "Content-Type": "application/json"
                    }
                })
                .then(response => {
                    this.setState({ ubicacion: response.data.lugar });
                })
                .then(response => console.log(this.state.ubicacion))
                .catch(function (error) {
                    console.log(error);
                });

                return (
                    this.state.ubicacion.nombre
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
                            console.log(props)
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
        return (
            
                <div className="m-3 w-100">
                    <h2 className="text-center m-3"> SisLogUCAB Empleados DataTable </h2>

                        <ReactTable className="mr-4"
                            columns={columns}
                            data={this.state.empleados}
                            defaultPageSize={10}
                            filterable={false}
                            noDataText="No Posee Registro Alguno!"
                            showPageSizeOptions={false}
                        ></ReactTable>
                    
                </div>
        );
    }
}