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
            reporte5: [],

        }
    }
    componentDidMount() {
        axios.get("http://localhost:3001/api/v1/reporte5",
            {
                headers: {
                    Authorization: "Bearer " + localStorage.getItem('token'),
                    "Content-Type": "application/json"
                }
            }).then(response => {
                this.setState({ reporte5: response.data.reporte5 });
                console.log(this.state.reporte5);
            });

    }
    render() {
        const columns = [
            {
                Header: 'Tipo',
                accessor: 'tipo',
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
                Header: 'Origen',
                accessor: 'origen',
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
                Header: 'Destino',
                accessor: 'destino',
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
                Header: 'Tiempo en Minutos',
                accessor: 'tiempo(min)',
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
                Header: 'Precio',
                accessor: 'precio(bs.S)',
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
            }]
        return (
            <div className="wrapper">
                <ReportesMenu />

                <div className="container-fluid m-0 p-0">
                    <div className="m-3 w-100">

                        <h2 className="text-center m-5"> Reporte 5: Listado de Rutas</h2>

                        <ReactTable className="mr-4"
                            columns={columns}
                            data={this.state.reporte5}
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