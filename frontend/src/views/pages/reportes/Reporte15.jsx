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
            reporte15: [],

        }
    }
    componentDidMount() {
        axios.get("http://localhost:3001/api/v1/reporte15",
            {
                headers: {
                    Authorization: "Bearer " + localStorage.getItem('token'),
                    "Content-Type": "application/json"
                }
            }).then(response => {
                this.setState({ reporte15: response.data.reporte15 });
                console.log(this.state.reporte15);
            });

    }
    render() {
        const columns = [
            {
                Header: 'Id Empleado',
                accessor: 'idempleado',
                sortable: false,
                style: {
                    textAlign: "center"
                },
                headerStyle: {
                    background: "black",
                    color: 'white',
                },
                width: 260,
                maxWidth: 260,
                minWidth: 260,
            },
            {
                Header: 'Nombre Empleado',
                accessor: 'nombreempleado',
                sortable: false,
                style: {
                    textAlign: "center"
                },
                headerStyle: {
                    background: "black",
                    color: 'white',
                },
                width: 260,
                maxWidth: 260,
                minWidth: 260,
            },
            {
                Header: 'Fecha',
                accessor: 'fecha',
                sortable: false,
                style: {
                    textAlign: "center"
                },
                headerStyle: {
                    background: "black",
                    color: 'white',
                },
                width: 260,
                maxWidth: 260,
                minWidth: 260,
            },
            {
                Header: 'Hora de Entrada',
                accessor: 'hora de entrada',
                sortable: false,
                style: {
                    textAlign: "center"
                },
                headerStyle: {
                    background: "black",
                    color: 'white',
                },
                width: 260,
                maxWidth: 260,
                minWidth: 260,
            },
            {
                Header: 'Hora de Salida',
                accessor: 'hora de salida',
                sortable: false,
                style: {
                    textAlign: "center"
                },
                headerStyle: {
                    background: "black",
                    color: 'white',
                },
                width: 260,
                maxWidth: 260,
                minWidth: 260,
            }]
        return (
            <div className="wrapper">
                <ReportesMenu />

                <div className="container-fluid m-0 p-0">
                    <div className="m-3 w-100">

                        <h2 className="text-center m-5"> Reporte 15: Asistencia de Empleados</h2>

                        <ReactTable className="mr-4"
                            columns={columns}
                            data={this.state.reporte15}
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