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
            reporte6: [],

        }
    }
    componentDidMount() {
        axios.get("http://localhost:3001/api/v1/reporte6",
            {
                headers: {
                    Authorization: "Bearer " + localStorage.getItem('token'),
                    "Content-Type": "application/json"
                }
            }).then(response => {
                this.setState({ reporte6: response.data.reporte6 });
                console.log(this.state.reporte6);
            });

    }
    render() {
        const columns = [
            {
                Header: 'Medio transporte',
                accessor: 'medio',
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
                Header: 'Usos',
                accessor: 'usos',
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

                        <h2 className="text-center m-5"> Reporte 6: Medio de Transporte mas Usado</h2>

                        <ReactTable className="mr-4"
                            columns={columns}
                            data={this.state.reporte6}
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