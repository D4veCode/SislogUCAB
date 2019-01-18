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
            reporte10: [],

        }
    }
    componentDidMount() {
        axios.get("http://localhost:3001/api/v1/reporte10",
            {
                headers: {
                    Authorization: "Bearer " + localStorage.getItem('token'),
                    "Content-Type": "application/json"
                }
            }).then(response => {
                this.setState({ reporte5: response.data.reporte10 });
                console.log(this.state.reporte10);
            });

    }
    render() {
        const columns = [
            {
                Header: 'Peso',
                accessor: 'peso',
                sortable: false,
                style: {
                    textAlign: "center"
                },
                headerStyle: {
                    background: "black",
                    color: 'white',
                },
                width: 750,
                maxWidth: 750,
                minWidth: 750,
            },
            {
                Header: 'Nombre Sucursal',
                accessor: 'sucursal',
                sortable: false,
                style: {
                    textAlign: "center"
                },
                headerStyle: {
                    background: "black",
                    color: 'white',
                },
                width: 750,
                maxWidth: 750,
                minWidth: 750,
            }]
        return (
            <div className="wrapper">
                <ReportesMenu />

                <div className="container-fluid m-0 p-0">
                    <div className="m-3 w-100">

                        <h2 className="text-center m-5"> Reporte 10: Peso Promedio de los Paquetes por Sucursal</h2>

                        <ReactTable className="mr-4"
                            columns={columns}
                            data={this.state.reporte10}
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