import React, { Component } from 'react';
import Sidemenu from '../../containers/Sidemenu.jsx';
import MenuAdmin from '../../containers/MenuAdmin';
import {Link} from 'react-router-dom';
import axios from 'axios';
import '../../css/account.css';
import ReactTable from 'react-table';
import "react-table/react-table.css";

export default class Sucursal extends Component{
    constructor(props){
        super(props);
        this.state = {
            clientes : []
        } 
    }
    componentDidMount(){
         axios.get("http://127.0.0.1:3001/api/v1/clientes", {
             headers: {
               Authorization:
               "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE1NDQzODE3NTQsIm5iZiI6MTU0NDM4MTc1NCwianRpIjoiMzU5ZGVjMDItOWYzYS00OWZmLTk0ZTEtMDg0YjBlMmNlZjBmIiwiZXhwIjoxNTQ0NDI2NzU0LCJpZGVudGl0eSI6ImhpdDMiLCJmcmVzaCI6ZmFsc2UsInR5cGUiOiJhY2Nlc3MifQ.jaFwfrR1GApJvM5Upot0jLxEmZiohsJonv7vqAgkkbs",
               "Content-Type": "application/json"
             }
           }).then(response => {
             this.setState({ clientes: response.data.clientes });
             console.log(this.state.clientes)
           }).catch(function(error) {
             console.log(error);
           });     
    }

    render(){
        const columns = [{
                Header: '#',
                Cell: props => {
                    return (
                        <Link to={{
                            pathname: "/admin/cliente/" + props.original.id,
                            state: {
                                clienteID: props.original.id,
                            }
                        }} className="btn btn-info">{props.original.id}</Link>
                    )
                },
                headerStyle: {
                    background: "black",
                    color: 'white',
                },
                width: 50,
                maxWidth : 50,
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
                Header: 'Nombre',
                accessor: 'nombre',
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
                Header: 'Apellido',
                accessor: 'apellido',
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
                Header: 'Email',
                accessor: 'email',
                sortable: false,
                style: {
                    textAlign: "center"
                },
                headerStyle: {
                    background: "black",
                    color: 'white',
                },
                width: 225,
                maxWidth: 225,
                minWidth: 225,
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
                Header: 'Nombre E',
                accessor: 'nombre_e',
                sortable: false,
                style: {
                    textAlign: "center"
                },
                headerStyle: {
                    background: "black",
                    color: 'white',
                },
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
                    )},
                width: 100,
                maxWidth: 100,
                minWidth: 100,
            },
            {
                Header: 'L-VIP',
                Cell: props => {
                    var VIP = "";

                    if (props.original.l_vip === false) {
                      VIP = "No Posee";
                    } else {
                      VIP = "Posee";
                    }
                    return (
                        VIP
                    )
                },
                headerStyle: {
                    background: "black",
                    color: 'white',
                },
                sortable: false,
                style: {
                    textAlign: "center"
                },
                width: 100,
                maxWidth: 100,
                minWidth: 100,
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
                Header: 'Action',
                Cell: props => {
                    return(
                        <button className="btn btn-danger"
                            onClick={() =>{
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
            }
        ]
        return(
            <div className="wrapper" keywords="clientes">
            <Sidemenu/>
            
            <div className="container-fluid m-0 p-0">
                <MenuAdmin/>
            
            <div className="m-2 w-100">
                <h2 className="text-center"> SisLogUCAB Clientes DataTable</h2>
            
                <ReactTable className="mr-4"
                    columns={columns}
                    data={this.state.clientes}
                    defaultPageSize={10}
                    filterable={false}
                    noDataText="No Posee Registro Alguno!" 
                    showPageSizeOptions={false}
                ></ReactTable>
            </div>    
        
            </div>
        </div>
        );
    }
}