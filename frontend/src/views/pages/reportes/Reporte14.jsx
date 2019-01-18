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
            reporte14:[],

        }
    }
    componentDidMount() {
        axios.get("http://localhost:3001/api/v1/reporte14",
            {
                headers: {
                    Authorization: "Bearer " + localStorage.getItem('token'),
                    "Content-Type": "application/json"
                }
            }).then(response => {
                this.setState({ reporte14: response.data.reporte14 });
                console.log(this.state.reporte14);
            });

    }
    render() {
        const columns = [
            {
                Header: 'Nombre Sucursal',
                accessor: 'nombre',
                sortable: false,
                style: {
                    textAlign: "center"
                },
                headerStyle: {
                    background: "black",
                    color: 'white',
                },
                width: 325,
                maxWidth: 325,
                minWidth: 325,
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
                width: 325,
                maxWidth: 325,
                minWidth: 325,
            },
            {
                Header: 'Oficina',
                accessor: 'oficina',
                sortable: false,
                style: {
                    textAlign: "center"
                },
                headerStyle: {
                    background: "black",
                    color: 'white',
                },
                width: 325,
                maxWidth: 325,
                minWidth: 325,
            },
            {
                Header: 'Zona',
                accessor: 'zona',
                sortable: false,
                style: {
                    textAlign: "center"
                },
                headerStyle: {
                    background: "black",
                    color: 'white',
                },
                width: 325,
                maxWidth: 325,
                minWidth: 325,
            }]
        return (
            <div className="wrapper">
                <ReportesMenu />

                <div className="container-fluid m-0 p-0">
                    <div className="m-3 w-100">

                        <h2 className="text-center m-5"> Reporte 14: Sucursales por Estado</h2>

                        <ReactTable className="mr-4"
                            columns={columns}
                            data={this.state.reporte14}
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