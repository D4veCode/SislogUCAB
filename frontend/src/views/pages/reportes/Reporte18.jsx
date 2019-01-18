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
            reporte18: [],

        }
    }
    componentDidMount() {
        axios.get("http://localhost:3001/api/v1/reporte18",
            {
                headers: {
                    Authorization: "Bearer " + localStorage.getItem('token'),
                    "Content-Type": "application/json"
                }
            }).then(response => {
                this.setState({ reporte18: response.data.reporte18 });
                console.log(this.state.reporte18);
            });

    }
    render() {
        const columns = [
            {
                Header: ' Estado',
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
                Header: ' Municipio',
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
            },
            {
                Header: 'Nombre Taller',
                accessor: 'nombre_taller',
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

                        <h2 className="text-center m-5"> Reporte 18: Talleres por Zona </h2>

                        <ReactTable className="mr-4"
                            columns={columns}
                            data={this.state.reporte18}
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