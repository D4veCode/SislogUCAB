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
            reporte16: [],

        }
    }
    componentDidMount() {
        axios.get("http://localhost:3001/api/v1/reporte16",
            {
                headers: {
                    Authorization: "Bearer " + localStorage.getItem('token'),
                    "Content-Type": "application/json"
                }
            }).then(response => {
                this.setState({ reporte16: response.data.reporte16 });
                console.log(this.state.reporte16);
            });

    }
    render() {
        const columns = [
            {
                Header: 'Aeropuerto o Puerto ',
                accessor: 'nombre',
                sortable: false,
                style: {
                    textAlign: "center"
                },
                headerStyle: {
                    background: "black",
                    color: 'white',
                },
                width: 430,
                maxWidth: 430,
                minWidth: 430,
            },
            {
                Header: 'Nombre Sucursal',
                accessor: 'nombre_sucursal',
                sortable: false,
                style: {
                    textAlign: "center"
                },
                headerStyle: {
                    background: "black",
                    color: 'white',
                },
                width: 430,
                maxWidth: 430,
                minWidth: 430,
            },
            {
                Header: 'Ubicacion',
                accessor: 'direccion',
                sortable: false,
                style: {
                    textAlign: "center"
                },
                headerStyle: {
                    background: "black",
                    color: 'white',
                },
                width: 430,
                maxWidth: 430,
                minWidth: 430,
            }]
        return (
            <div className="wrapper">
                <ReportesMenu />

                <div className="container-fluid m-0 p-0">
                    <div className="m-3 w-100">

                        <h2 className="text-center m-5"> Reporte 16: Sucursales que son Puerto o Aereopuerto </h2>

                        <ReactTable className="mr-4"
                            columns={columns}
                            data={this.state.reporte16}
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