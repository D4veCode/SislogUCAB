import React, { Component } from 'react';
import axios from 'axios';
import Sidemenu from "../../containers/Sidemenu.jsx";
import '../../css/account.css';

export default class RutaDetail extends Component {
    constructor(props) {
        super(props)
        this.state = {
            ruta: {},
            rutaID: this.props.location.state.rutaID,
            sucursales: [],
            destinos: [],
            dest: {},
            met_trans: []
        }
    }
    componentDidMount() {
        axios.get("http://127.0.0.1:3001/api/v1/ruta/" + this.state.rutaID, {
            headers: {
                Authorization:
                "Bearer " + localStorage.getItem('token'),
                "Content-Type": "application/json"
            }
        })
            .then(response => {
                this.setState({ ruta: response.data.ruta })
            }).catch(function (error) {
                console.log(error.response);
            })

        axios.get("http://127.0.0.1:3001/api/v1/sucursales", {
            headers: {
                Authorization:
                "Bearer " + localStorage.getItem('token'),
                "Content-Type": "application/json"
            }
        })
            .then(response => {
                this.setState({ sucursales: response.data.sucursales });
                //console.log(this.state.sucursales);
            })
            .catch(function (error) {
                console.log(error.response);
            });

        axios.get("http://127.0.0.1:3001/api/v1/met_trans", {
            headers: {
                Authorization:
                "Bearer " + localStorage.getItem('token'),
                "Content-Type": "application/json"
            }
        }).then(response => {
            this.setState({ met_trans: response.data.m_trans });
            //console.log(this.state.met_trans);
        }).catch(function (error) {
            console.log(error.response);
        });

    }

    handleFormSubmit = (event, requestType, rutaID) => {
        event.preventDefault();
        const Suc_Origen = parseInt(event.target.elements.Origen.value);
        const Suc_Dest = parseInt(event.target.elements.Destino.value);
        const M_Trans = parseInt(event.target.elements.M_Trans.value);
        const Tiempo = parseInt(event.target.elements.Tiempo.value);
        const Precio = parseInt(event.target.elements.Precio.value);

        if (requestType === "put") {
            let datas = JSON.stringify({
                origen: Suc_Origen,
                destino: Suc_Dest,
                m_trans: M_Trans,
                tiempo: Tiempo,
                precio: Precio
            });

            console.log(datas);

            axios.put(`http://localhost:3001/api/v1/ruta/${rutaID}`, datas,
                {
                    headers: {
                        Authorization:
                        "Bearer " + localStorage.getItem('token'),
                        "Content-Type": "application/json"
                    }
                }
            )
                .then(response => console.log(response))
                .catch(function (error) {
                    console.log(error.response);
                });
        }

        axios.get("http://localhost:3001/api/v1/ruta/" + this.state.rutaID, {
            headers: {
                Authorization:
                "Bearer " + localStorage.getItem('token'),
                "Content-Type": "application/json"
            }
        }).then(response => {
            this.setState({ ruta: response.data.ruta });
            // console.log(this.state.cliente);
        });
    }

    onGetDestinos() {
        console.log(this.refs.Origen.value)
        axios.get('http://localhost:3001/api/v1/sucursales', {
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('token'),
                'Content-Type': 'application/json'
            }
        }).then(response => {
            this.setState({ destinos: response.data.sucursales });
            //console.log(this.state.destinos)
        }).catch(function (error) {
            console.log(error.response);
        });

        axios.get('http://localhost:3001/api/v1/sucursal/' + this.refs.Origen.value, {
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('token'),
                'Content-Type': 'application/json'
            }
        }).then(response => {
            this.setState({ dest: response.data.sucursal });
            //console.log(this.state.dest)
        }).catch(function (error) {
            console.log(error.response);
        });
    }
    render() {
        var sucursales = this.state.sucursales.map(function (av) {
            return <option value={av.cod} key={av.cod}> {av.nombre} </option>
        })
        var transporte = this.state.met_trans.map(function (trans) {
            return <option value={trans.id} key={trans.id}> {trans.tipo} </option>
        })
        var prueba = this.state.dest.cod;
        var destino = this.state.destinos.map(function (des) {
            if (des.cod !== prueba)
                return <option value={des.cod} key={des.cod}> {des.nombre} </option>
        })
        return (
            <div className="wrapper" keywords="clientes">
                <Sidemenu />

                <div className="container-fluid m-0 p-0">
                    {/* <MenuAdmin/> */}
                <div className="m-3 w-100">
                    <h2 className="text-center m-3"> SisLogUCAB Ruta {this.state.ruta.id} Info </h2>

                    <table className="table table-hover w-100 mr-3">
                        <thead className="thead-dark">
                            <tr>
                                <th scope="col" className="text-center">Sucursal Origen</th>
                                <th scope="col" className="text-center">Sucursal Destino</th>
                                <th scope="col" className="text-center">Metodo Transporte</th>
                                <th scope="col" className="text-center">Duracion</th>
                                <th scope="col" className="text-center">Precio</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="text-center">{this.state.ruta.suc_origen}</td>
                                <td className="text-center">{this.state.ruta.suc_dest}</td>
                                <td className="text-center">{this.state.ruta.tipo_trans}</td>
                                <td className="text-center">{this.state.ruta.tiempo}</td>
                                <td className="text-center">{this.state.ruta.precio}</td>
                            </tr>
                        </tbody>
                    </table>
                    <br />

                    <div className="m-3">
                        <div>
                            <form onSubmit={event => this.handleFormSubmit(event, "put", this.state.rutaID)}>
                                <div className="form-row">
                                <div className="form-group col-md-3">
                                <label htmlFor="Origen">Sucursal Origen</label>
                                <select ref="Origen" className="form-control" name="Origen" onChange={(e) => { this.onGetDestinos(); }}>
                                    <option>Seleccione...</option>
                                    {sucursales}
                                </select>
                                </div>
                                <div className="form-group col-md-3">
                                <label htmlFor="Destino">Sucursal Destino</label>
                                <select className="form-control" name="Destino">
                                    <option>Seleccione...</option>
                                    {destino}
                                </select>
                                </div>
                                <div className="form-group col-md-3">
                                <label htmlFor="M_Trans"> Metodo Transporte</label>
                                <select className="form-control" name="M_Trans">
                                    <option>Seleccione...</option>
                                    {transporte}
                                </select>
                                </div>
                                <div className="form-group col-md-3">
                                    <label htmlFor="Tiempo"> Tiempo Envio</label>
                                    <input type="number" name="Tiempo" className="form-control"/>
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="form-group col-md-3">
                                    <label htmlFor="Precio"> Precio Envio</label>
                                    <input type="number" name="Precio" className="form-control"/>
                                </div>
                            </div>
                                            <button type="submit" className="btn btn-primary">
                                    Update
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        );
    }
}