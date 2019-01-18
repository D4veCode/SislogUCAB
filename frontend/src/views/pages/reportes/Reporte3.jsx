import React, { Component } from 'react';
import "../../css/account.css";
import ReportesMenu from '../../containers/ReportesMenu.jsx';
import axios from 'axios';
import ReactTable from "react-table";
import "react-table/react-table.css";

export default class Account extends Component {
    constructor(props) {
        super(props)
        this.state = {
            reporte3: [],

        }
    }
    componentDidMount() {
        axios.get("http://localhost:3001/api/v1/reporte3",
            {
                headers: {
                    Authorization: "Bearer " + localStorage.getItem('token'),
                    "Content-Type": "application/json"
                }
            }).then(response => {
                this.setState({ reporte3: response.data.reporte3 });
                console.log(this.state.reporte3);
            });

    }
    render() {
        const columns = [
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
                width: 150,
                maxWidth: 150,
                minWidth: 150,
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
                width: 150,
                maxWidth: 150,
                minWidth: 150,
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
                width: 150,
                maxWidth: 150,
                minWidth: 150,
            },
            {
                Header: 'Correo Electronico',
                accessor: 'email',
                sortable: false,
                style: {
                    textAlign: "center"
                },
                headerStyle: {
                    background: "black",
                    color: 'white',
                },
                width: 150,
                maxWidth: 150,
                minWidth: 150,
            },
            {
                Header: 'Nacimiento',
                accessor: 'nacimiento',
                sortable: false,
                style: {
                    textAlign: "center"
                },
                headerStyle: {
                    background: "black",
                    color: 'white',
                },
                width: 150,
                maxWidth: 150,
                minWidth: 150,
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
                width: 150,
                maxWidth: 150,
                minWidth: 150,
            },
            {
                Header: 'Zona de Trabajo',
                accessor: 'zona de trabajo',
                sortable: false,
                style: {
                    textAlign: "center"
                },
                headerStyle: {
                    background: "black",
                    color: 'white',
                },
                width: 150,
                maxWidth: 150,
                minWidth: 150,
            },
        ]
        return (
            <div className="wrapper">
                <ReportesMenu />

                <div className="container-fluid m-0 p-0">
                    <div className="m-3 w-100">

                        <h2 className="text-center m-5"> Reporte 3: Listado Empleados</h2>

                        <ReactTable className="mr-4"
                            columns={columns}
                            data={this.state.reporte3}
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