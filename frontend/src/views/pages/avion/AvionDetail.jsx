import React, { Component } from 'react';
import axios from 'axios';
import '../../css/account.css';

export default class BarcoDetail extends Component {
    constructor(props) {
        super(props)
        this.state = {
            avion: {},
            avionID: this.props.location.state.avionID,
            sucursales: [],

        }
    }
    componentDidMount() {
        axios.get("http://127.0.0.1:3001/api/v1/avion/" + this.state.avionID, {
            headers: {
                Authorization:
                "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE1NDQ2NTcwMjYsIm5iZiI6MTU0NDY1NzAyNiwianRpIjoiYTNhOTM3N2QtOTVkYS00YTc3LTkyOGItOWMyYzhjZDY3OGUxIiwiZXhwIjoxNTQ1OTUzMDI2LCJpZGVudGl0eSI6InJhbW9uMyIsImZyZXNoIjpmYWxzZSwidHlwZSI6ImFjY2VzcyJ9.X80zuLw7bUH3V1PEwbteG6RARR1NZYcJJsMLTtDLcj4",
                "Content-Type": "application/json"
            }
        })
            .then(response => {
                this.setState({ avion: response.data.avion })
            })

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

    }

    handleFormSubmit = (event, requestType, avionID) => {
        event.preventDefault();
        const Nombre = event.target.elements.Nombre.value;
        const Peso = parseInt(event.target.elements.Peso.value);
        const Cap_C = parseInt(event.target.elements.Cap_C.value);
        const Descripcion = event.target.elements.Descripcion.value;
        const Long = parseInt(event.target.elements.Long.value);
        const Env = parseInt(event.target.elements.Env.value);
        const Alt = parseInt(event.target.elements.Alt.value);
        const Ancho_C = parseInt(event.target.elements.Ancho_C.value);
        const Diametro = parseInt(event.target.elements.Diametro.value);
        const Peso_MaxD = parseInt(event.target.elements.Peso_MaxD.value);
        const Carrera_D = parseInt(event.target.elements.Carrera_D.value);
        const Vmax = parseFloat(event.target.elements.Vmax.value);
        const Fuel_C = parseInt(event.target.elements.Fuel_C.value);
        const Motor = event.target.elements.Motor.value;
        const Area = parseInt(event.target.elements.Area.value);
        const Fk_Sucursal = parseInt(event.target.elements.sucursal.value);

        if (requestType === "put") {
            let datas = JSON.stringify({
                nombre: Nombre,
                peso: Peso,
                cap_c: Cap_C,
                descripcion: Descripcion,
                long: Long,
                env: Env,
                alt: Alt,
                ancho_c: Ancho_C,
                diametro: Diametro,
                peso_maxd: Peso_MaxD,
                carrera_d: Carrera_D,
                vmax: Vmax,
                fuel_c: Fuel_C,
                motor: Motor,
                area: Area,
                fk_sucursal: Fk_Sucursal
            });

            console.log(datas);

            axios.put(`http://localhost:3001/api/v1/avion/${avionID}`, datas,
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

        axios.get("http://localhost:3001/api/v1/avion/" + this.state.avionID, {
            headers: {
                Authorization:
                "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE1NDQ2NTcwMjYsIm5iZiI6MTU0NDY1NzAyNiwianRpIjoiYTNhOTM3N2QtOTVkYS00YTc3LTkyOGItOWMyYzhjZDY3OGUxIiwiZXhwIjoxNTQ1OTUzMDI2LCJpZGVudGl0eSI6InJhbW9uMyIsImZyZXNoIjpmYWxzZSwidHlwZSI6ImFjY2VzcyJ9.X80zuLw7bUH3V1PEwbteG6RARR1NZYcJJsMLTtDLcj4",
                "Content-Type": "application/json"
            }
        }).then(response => {
            this.setState({ avion: response.data.avion });
            // console.log(this.state.cliente);
        });
    }

    render() {
        var sucursales = this.state.sucursales.map(function (av) {
                return <option value={av.id} key={av.id}> {av.nombre} </option>
        })
        return (
            <div className="m-3 w-100">
                <h2 className="text-center m-3"> SisLogUCAB Avion {this.state.avion.id} Info </h2>

                <table className="table table-hover w-100 mr-3">
                    <thead className="thead-dark">
                        <tr>
                            <th scope="col" className="text-center">Nombre</th>
                            <th scope="col" className="text-center">Peso</th>
                            <th scope="col" className="text-center">Capacidad Carga</th>
                            <th scope="col" className="text-center">Descripcion</th>
                            <th scope="col" className="text-center">Longitud</th>
                            <th scope="col" className="text-center">Envergadura</th>
                            <th scope="col" className="text-center">Altura</th>
                            <th scope="col" className="text-center">Ancho Carga</th>
                            <th scope="col" className="text-center">Diametro</th>
                            <th scope="col" className="text-center">Peso Max D</th>
                            <th scope="col" className="text-center">Carrera Despegue</th>
                            <th scope="col" className="text-center">Velocidad Max</th>
                            <th scope="col" className="text-center">Combustible</th>
                            <th scope="col" className="text-center">Motor</th>
                            <th scope="col" className="text-center">Area</th>
                            <th scope="col" className="text-center">Sucursal</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="text-center">{this.state.empleado.nombre}</td>
                            <td className="text-center">{this.state.empleado.peso}</td>
                            <td className="text-center"> {this.state.empleado.cap_c}</td>
                            <td className="text-center"> {this.state.empleado.descripcion} </td>
                            <td className="text-center">{this.state.empleado.long}</td>
                            <td className="text-center">{this.state.empleado.env}</td>
                            <td className="text-center">{this.state.empleado.alt}</td>
                            <td className="text-center">{this.state.empleado.ancho_c}</td>
                            <td className="text-center">{this.state.empleado.diametro}</td>
                            <td className="text-center">{this.state.empleado.peso_maxd}</td>
                            <td className="text-center">{this.state.empleado.carrera_d}</td>
                            <td className="text-center">{this.state.empleado.vmax}</td>
                            <td className="text-center">{this.state.empleado.fuel_c}</td>
                            <td className="text-center">{this.state.empleado.motor}</td>
                            <td className="text-center">{this.state.empleado.area}</td>
                            <td className="text-center">{this.state.empleado.fk_sucursal}</td>
                        </tr>
                    </tbody>
                </table>
                <br />

                <div className="m-3">
                    <div>
                        <form onSubmit={event => this.handleFormSubmit(event, "put", this.state.avionID)}>
                            <div className="form-row">
                                <div className="form-group col-md-6">
                                    <label htmlFor="nombre">Nombre</label>
                                    <input type="text" name="Nombre" className="form-control" />
                                </div>
                                <div className="form-group col-md-3">
                                    <label htmlFor="Peso">Peso</label>
                                    <input type="text" name="Peso" className="form-control" />
                                </div>
                                <div className="form-group col-md-3">
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
                                    <label htmlFor="Long">Longitud</label>
                                    <input type="text" name="Long" className="form-control" />
                                </div>
                                <div className="form-group col-md-4">
                                    <label htmlFor="Env">Envergadura</label>
                                    <input type="text" name="Env" className="form-control" />
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="form-group col-md-4">
                                    <label htmlFor="Alt">Altura</label>
                                    <input type="text" name="Alt" className="form-control" />
                                </div>
                                <div className="form-group col-md-4">
                                    <label htmlFor="Ancho_C">Ancho Capacidad</label>
                                    <input type="text" name="Ancho_C" className="form-control" />
                                </div>
                                <div className="form-group col-md-4">
                                    <label htmlFor="Diametro">Diametro</label>
                                    <input type="text" name="Diametro" className="form-control" />
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="form-group col-md-4">
                                    <label htmlFor="Peso_MaxD">Peso Max Despegue
                                    </label>
                                    <input type="text" name="Peso_MaxD" className="form-control" />
                                </div>
                                <div className="form-group col-md-4">
                                    <label htmlFor="Carrera_D"> Carrera Max Despegue </label>
                                    <input type="text" name="Carrera_D" className="form-control" />
                                </div>
                                <div className="form-group col-md-4">
                                    <label htmlFor="Vmax"> Velocidad Max </label>
                                    <input type="text" name="Vmax" className="form-control" />
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="form-group col-md-3">
                                    <label htmlFor="Fuel_C">Capacidad Combustible</label>
                                    <input type="text" name="Fuel_C" className="form-control" />
                                </div>
                                <div className="form-group col-md-3">
                                    <label htmlFor="Motor"> Motor </label>
                                    <input type="text" name="Motor" className="form-control" />
                                </div>
                                <div className="form-group col-md-3">
                                    <label htmlFor="sucursal">Sucursal</label>
                                    <select className="form-control" name="sucursal">
                                        <option >Choose...</option>
                                        {sucursales}
                                    </select>
                                </div>
                                <div className="form-group col-md-3">
                                    <label htmlFor="Area"> Area </label>
                                    <input type="text" name="Area" className="form-control" />
                                </div>
                            </div>

                            <button type="submit" className="btn btn-primary">
                                Update
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}