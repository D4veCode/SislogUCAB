import React, { Component } from 'react';
import "../../css/account.css";
import ReportesMenu from '../../containers/ReportesMenu.jsx';
import axios from 'axios';

export default class Account extends Component {
    constructor(props) {
        super(props)
        this.state = {
            reporte9: {},

        }
    }
    componentDidMount() {
        axios.get("http://localhost:3001/api/v1/reporte9",
            {
                headers: {
                    Authorization: "Bearer " + localStorage.getItem('token'),
                    "Content-Type": "application/json"
                }
            }).then(response => {
                this.setState({ reporte9: response.data.reporte9 });
                console.log(this.state.reporte9);
            });

    }
    render() {
        return (
            <div className="wrapper">
                <ReportesMenu />

                <div className="container-fluid m-0 p-0">
                    <div className="m-3 w-100">

                        <h2 className="text-center m-5"> Reporte 9: Mes que ha sido Enviado mas Paquetes</h2>

                        <table className="table table-hover w-100">
                            <thead className="thead-dark">
                                <tr>
                                    <th scope="col" className="text-center" > Mes </th>
                                    <th scope="col" className="text-center" > Cantidad de Paquetes Enviados </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="text-center" >{this.state.reporte9.mes}</td>
                                    <td className="text-center" >{this.state.reporte9.cantidad}</td>
                                </tr>
                            </tbody>
                        </table>

                    </div>
                </div>
            </div>
        );
    }
}