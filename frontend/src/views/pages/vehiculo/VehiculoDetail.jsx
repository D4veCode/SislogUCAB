import React, { Component } from 'react';
import axios from 'axios';
import '../../css/account.css';
import Sidemenu from "../../containers/Sidemenu.jsx";

export default class VehiculoDetail extends Component {
    constructor(props) {
        super(props)
        this.state = {
            vehiculo: {},
            vehiculoID: this.props.location.state.vehiculoID,
            sucursales: [],
            modelos:[]

        }
    }
    componentDidMount() {
        axios.get("http://127.0.0.1:3001/api/v1/vehiculo/" + this.state.vehiculoID, {
            headers: {
                Authorization:
                    "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE1NDQ2NTcwMjYsIm5iZiI6MTU0NDY1NzAyNiwianRpIjoiYTNhOTM3N2QtOTVkYS00YTc3LTkyOGItOWMyYzhjZDY3OGUxIiwiZXhwIjoxNTQ1OTUzMDI2LCJpZGVudGl0eSI6InJhbW9uMyIsImZyZXNoIjpmYWxzZSwidHlwZSI6ImFjY2VzcyJ9.X80zuLw7bUH3V1PEwbteG6RARR1NZYcJJsMLTtDLcj4",
                "Content-Type": "application/json"
            }
        })
            .then(response => {
                this.setState({ vehiculo: response.data.vehiculo });
                console.log(this.state.vehiculo);
            })
            .catch(function (error) {
                console.log(error.response);
            });

        axios.get("http://127.0.0.1:3001/api/v1/sucursales", {
            headers: {
                Authorization:
                    "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE1NDQ2NTcwMjYsIm5iZiI6MTU0NDY1NzAyNiwianRpIjoiYTNhOTM3N2QtOTVkYS00YTc3LTkyOGItOWMyYzhjZDY3OGUxIiwiZXhwIjoxNTQ1OTUzMDI2LCJpZGVudGl0eSI6InJhbW9uMyIsImZyZXNoIjpmYWxzZSwidHlwZSI6ImFjY2VzcyJ9.X80zuLw7bUH3V1PEwbteG6RARR1NZYcJJsMLTtDLcj4",
                "Content-Type": "application/json"
            }
        })
            .then(response => {
                this.setState({ sucursales: response.data.sucursales });
                console.log(this.state.sucursales);
            })
            .catch(function (error) {
                console.log(error.response);
            });

        axios.get("http://127.0.0.1:3001/api/v1/modelos", {
            headers: {
                Authorization:
                    "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE1NDQ2NTcwMjYsIm5iZiI6MTU0NDY1NzAyNiwianRpIjoiYTNhOTM3N2QtOTVkYS00YTc3LTkyOGItOWMyYzhjZDY3OGUxIiwiZXhwIjoxNTQ1OTUzMDI2LCJpZGVudGl0eSI6InJhbW9uMyIsImZyZXNoIjpmYWxzZSwidHlwZSI6ImFjY2VzcyJ9.X80zuLw7bUH3V1PEwbteG6RARR1NZYcJJsMLTtDLcj4",
                "Content-Type": "application/json"
            }
        })
            .then(response => {
                this.setState({ modelos: response.data.modelos });
                console.log(this.state.modelos);
            })
            .catch(function (error) {
                console.log(error.response);
            });

    }

    handleFormSubmit = (event, requestType, vehiculoID) => {
        event.preventDefault();
        const Placa = event.target.elements.Placa.value;
        const Peso = parseInt(event.target.elements.Peso.value);
        const Cap_C = parseInt(event.target.elements.Cap_C.value);
        const Descripcion = event.target.elements.Descripcion.value;
        const Color = event.target.elements.Color.value;
        const Fecha_V = event.target.elements.Fecha_V.value;
        const Serial_M = event.target.elements.Serial_M.value;
        const Serial_C = event.target.elements.Serial_C.value;
        const Fk_Sucursal = parseInt(event.target.elements.sucursal.value);
        const Fk_Mod = parseInt(event.target.elements.modelos.value);

        if (requestType === "put") {
            let datas = JSON.stringify({
                placa: Placa,
                peso: Peso,
                cap_c: Cap_C,
                descripcion: Descripcion,
                color: Color,
                fecha_v: Fecha_V,
                serial_m: Serial_M,
                serial_c: Serial_C,
                fk_sucursal: Fk_Sucursal,
                fk_mod: Fk_Mod
            });

            console.log(datas);

            axios.put(`http://localhost:3001/api/v1/vehiculo/${vehiculoID}`, datas,
                {
                    headers: {
                        Authorization:
                            "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE1NDQ2NTcwMjYsIm5iZiI6MTU0NDY1NzAyNiwianRpIjoiYTNhOTM3N2QtOTVkYS00YTc3LTkyOGItOWMyYzhjZDY3OGUxIiwiZXhwIjoxNTQ1OTUzMDI2LCJpZGVudGl0eSI6InJhbW9uMyIsImZyZXNoIjpmYWxzZSwidHlwZSI6ImFjY2VzcyJ9.X80zuLw7bUH3V1PEwbteG6RARR1NZYcJJsMLTtDLcj4",
                        "Content-Type": "application/json"
                    }
                }
            )
                .then(response => console.log(response))
                .catch(function (error) {
                    console.log(error.response);
                });
        }

        axios.get("http://localhost:3001/api/v1/vehiculo/" + this.state.vehiculoID, {
            headers: {
                Authorization:
                    "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE1NDQ2NTcwMjYsIm5iZiI6MTU0NDY1NzAyNiwianRpIjoiYTNhOTM3N2QtOTVkYS00YTc3LTkyOGItOWMyYzhjZDY3OGUxIiwiZXhwIjoxNTQ1OTUzMDI2LCJpZGVudGl0eSI6InJhbW9uMyIsImZyZXNoIjpmYWxzZSwidHlwZSI6ImFjY2VzcyJ9.X80zuLw7bUH3V1PEwbteG6RARR1NZYcJJsMLTtDLcj4",
                "Content-Type": "application/json"
            }
        }).then(response => {
            this.setState({ vehiculo: response.data.vehiculo });
            // console.log(this.state.cliente);
        });
    }

    render() {
        var sucursales = this.state.sucursales.map(function (av) {
            return <option value={av.id} key={av.id}> {av.nombre} </option>
        })
        var modelos = this.state.modelos.map(function (md) {
            return <option value={md.id} key={md.id}> {md.nombre} </option>
        })
        return (
            <div className="wrapper" keywords="clientes">
                <Sidemenu />

                <div className="container-fluid m-0 p-0">
                    {/* <MenuAdmin/> */}
                <div className="m-3 w-100">
                    <h2 className="text-center m-3"> SisLogUCAB Vehiculo {this.state.vehiculo.id} Info </h2>

                    <table className="table table-hover w-100 mr-3">
                        <thead className="thead-dark">
                            <tr>
                                <th scope="col" className="text-center">Placa</th>
                                <th scope="col" className="text-center">Peso</th>
                                <th scope="col" className="text-center">Cap. Carga</th>
                                <th scope="col" className="text-center">Descripcion</th>
                                <th scope="col" className="text-center">Color</th>
                                <th scope="col" className="text-center">Fecha Veh</th>
                                <th scope="col" className="text-center">Serial Motor</th>
                                <th scope="col" className="text-center">Serial Carroceria</th>
                                <th scope="col" className="text-center">Modelo</th>
                                <th scope="col" className="text-center">Sucursal</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="text-center">{this.state.empleado.placa}</td>
                                <td className="text-center">{this.state.empleado.peso}</td>
                                <td className="text-center"> {this.state.empleado.cap_c}</td>
                                <td className="text-center"> {this.state.empleado.descripcion} </td>
                                <td className="text-center">{this.state.empleado.color}</td>
                                <td className="text-center">{this.state.empleado.fecha_v}</td>
                                <td className="text-center">{this.state.empleado.serial_m}</td>
                                <td className="text-center">{this.state.empleado.serial_c}</td>
                                <td className="text-center">{this.state.empleado.fk_mod}</td>
                                <td className="text-center">{this.state.empleado.fk_sucursal}</td>
                            </tr>
                        </tbody>
                    </table>
                    <br />

                    <div className="m-3">
                        <div>
                            <form onSubmit={event => this.handleFormSubmit(event, "put", this.state.vehiculoID)}>
                                <div className="form-row">
                                    <div className="form-group col-md-4">
                                        <label htmlFor="nombre">Nombre</label>
                                        <input type="text" name="Nombre" className="form-control" />
                                    </div>
                                    <div className="form-group col-md-4">
                                        <label htmlFor="Peso">Peso</label>
                                        <input type="text" name="Peso" className="form-control" />
                                    </div>
                                    <div className="form-group col-md-4">
                                        <label htmlFor="Cap_C">Capacidad Carga</label>
                                        <input type="text" name="Cap_C" className="form-control" />
                                    </div>
                                </div>
                                <div className="form-row">
                                    <div className="form-group col-md-4">
                                        <label htmlFor="Descripcion">Descripcion</label>
                                        <input type="text" name="Descripcion" className="form-control" />
                                    </div>
                                    <div className="form-group col-md-4">
                                        <label htmlFor="Color">Color</label>
                                        <input type="text" name="Color" className="form-control" />
                                    </div>
                                    <div className="form-group col-md-4">
                                        <label htmlFor="Fecha_V">Fecha Vehiculo</label>
                                        <input type="date" name="Fecha_V" className="form-control" />
                                    </div>
                                </div>
                                <div className="form-row">
                                    <div className="form-group col-md-3">
                                        <label htmlFor="Serial_M">Serial Motor</label>
                                        <input type="text" name="Serial_M" className="form-control" />
                                    </div>
                                    <div className="form-group col-md-3">
                                        <label htmlFor="Serial_C">Serial Carroceria</label>
                                        <input type="text" name="Serial_C" className="form-control" />
                                    </div>
                                    <div className="form-group col-md-3">
                                        <label htmlFor="sucursal">Sucursal</label>
                                        <select className="form-control" name="sucursal">
                                            <option >Choose...</option>
                                            {sucursales}
                                        </select>
                                    </div>
                                    <div className="form-group col-md-3">
                                        <label htmlFor="modelos">Modelos</label>
                                        <select className="form-control" name="modelos">
                                            <option >Choose...</option>
                                            {modelos}
                                        </select>
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