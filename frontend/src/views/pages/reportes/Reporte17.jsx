import React, { Component } from 'react';
import "../../css/account.css";
import ReportesMenu from '../../containers/ReportesMenu.jsx';
import axios from 'axios';

export default class Account extends Component {
    constructor(props) {
        super(props)
        this.state = {
            reporte17: {},

        }
    }
    componentDidMount() {
        axios.get("http://localhost:3001/api/v1/reporte4",
            {
                headers: {
                    Authorization: "Bearer " + localStorage.getItem('token'),
                    "Content-Type": "application/json"
                }
            }).then(response => {
                this.setState({ reporte17: response.data.reporte17 });
                console.log(this.state.reporte17);
            });

    }
    render() {
        return (
            <div className="wrapper">
                <ReportesMenu />

                <div className="container-fluid m-0 p-0">
                    <div className="m-3 w-100">

                        <h2 className="text-center m-5"> Reporte 17: La Ruta mas Usada</h2>

                        <table className="table table-hover w-100">
                            <thead className="thead-dark">
                                <tr>
                                    <th scope="col" className="text-center" > Sucursal Origen  </th>
                                    <th scope="col" className="text-center" > Sucursal Destino  </th>
                                    <th scope="col" className="text-center" > Tipo Ruta  </th>
                                    <th scope="col" className="text-center" > Cantidad   </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="text-center" >{this.state.reporte17.suc_origen}</td>
                                    <td className="text-center" >{this.state.reporte17.suc_destino}</td>
                                    <td className="text-center" >{this.state.reporte17.tipo}</td>
                                    <td className="text-center" >{this.state.reporte17.count}</td>
                                </tr>
                            </tbody>
                        </table>

                    </div>
                </div>
            </div>
        );
    }
}