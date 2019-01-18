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
            reporte1: [],
            
        }
    }
    componentDidMount() {
        axios.get("http://localhost:3001/api/v1/reporte1",
            {
                headers: {
                    Authorization: "Bearer " + localStorage.getItem('token'),
                    "Content-Type": "application/json"
                }
            }).then(response => {
                this.setState({ reporte1: response.data.reporte1 });
                //console.log(this.state.reporte1);
            });

    }
    render() {
        const columns = [
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
            width: 350,
            maxWidth: 350,
            minWidth: 350,
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
            width: 300,
            maxWidth: 300,
            minWidth: 300,
        },
        {
            Header: 'Direccion',
            accessor: 'lugar',
            sortable: false,
            style: {
                textAlign: "center"
            },
            headerStyle: {
                background: "black",
                color: 'white',
            },
            width: 300,
            maxWidth: 300,
            minWidth: 300,
        },
        {
            Header: 'Tamaño',
            accessor: 'tamaño',
            sortable: false,
            style: {
                textAlign: "center"
            },
            headerStyle: {
                background: "black",
                color: 'white',
            },
            width: 300,
            maxWidth: 300,
            minWidth: 300,
        }]
        return (
            <div className="wrapper">
                <ReportesMenu />

                <div className="container-fluid m-0 p-0">
                    <div className="m-3 w-100">

                        <h2 className="text-center m-5"> Reporte 1: Listado de Sucursales</h2>

                        <ReactTable className="mr-4"
                            columns={columns}
                            data={this.state.reporte1}
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