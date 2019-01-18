import React, { Component } from 'react';
import "../../css/account.css";
import ReportesMenu from '../../containers/ReportesMenu.jsx';
import axios from 'axios';

export default class Account extends Component {
    constructor(props) {
        super(props)
        this.state = {
            reporte11: {},

        }
    }
    componentDidMount() {
        axios.get("http://localhost:3001/api/v1/reporte11",
            {
                headers: {
                    Authorization: "Bearer " + localStorage.getItem('token'),
                    "Content-Type": "application/json"
                }
            }).then(response => {
                this.setState({ reporte11: response.data.reporte11 });
                console.log(this.state.reporte11);
            });

    }
    render() {
        return (
            <div className="wrapper">
                <ReportesMenu />

                <div className="container-fluid m-0 p-0">
                    <div className="m-3 w-100">

                        <h2 className="text-center m-5"> Reporte 11: Sucursal con mas Transito de Paquetes</h2>

                        <table className="table table-hover w-100">
                            <thead className="thead-dark">
                                <tr>
                                    <th scope="col" className="text-center" > Nombre Sucursal </th>
                                    <th scope="col" className="text-center" > Transito de Paquetes </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="text-center" >{this.state.reporte11.nombre}</td>
                                    <td className="text-center" >{this.state.reporte11.veces}</td>
                                </tr>
                            </tbody>
                        </table>

                    </div>
                </div>
            </div>
        );
    }
}