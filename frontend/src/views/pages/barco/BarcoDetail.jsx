import React, { Component } from 'react';
import axios from 'axios';
import '../../css/account.css';

export default class BarcoDetail extends Component {
    constructor(props) {
        super(props)
        this.state = {
            barco: {},
            barcoID: this.props.location.state.barcoID,
            sucursales: [],
        }
    }
    componentDidMount() {
        axios.get("http://127.0.0.1:3001/api/v1/barco/" + this.state.barcoID, {
            headers: {
                Authorization:
                    "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE1NDQ2NTcwMjYsIm5iZiI6MTU0NDY1NzAyNiwianRpIjoiYTNhOTM3N2QtOTVkYS00YTc3LTkyOGItOWMyYzhjZDY3OGUxIiwiZXhwIjoxNTQ1OTUzMDI2LCJpZGVudGl0eSI6InJhbW9uMyIsImZyZXNoIjpmYWxzZSwidHlwZSI6ImFjY2VzcyJ9.X80zuLw7bUH3V1PEwbteG6RARR1NZYcJJsMLTtDLcj4",
                "Content-Type": "application/json"
            }
        })
            .then(response => {
                this.setState({ barco: response.data.barco })
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

    handleFormSubmit = (event, requestType, barcoID) => {
        event.preventDefault();
        const Nombre = event.target.elements.Nombre.value;
        const Descripcion = event.target.elements.Descripcion.value;
        const Long = parseInt(event.target.elements.Long.value);
        const Vmax = parseFloat(event.target.elements.Vmax.value);
        const Fk_Sucursal = parseInt(event.target.elements.sucursal.value);

        if (requestType === "put") {
            let datas = JSON.stringify({
                nombre: Nombre,
                descripcion: Descripcion,
                long: Long,
                vmax: Vmax,
                fk_sucursal: Fk_Sucursal
            });

            console.log(datas);

            axios.put(`http://localhost:3001/api/v1/avion/${barcoID}`, datas,
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

        axios.get("http://localhost:3001/api/v1/barco/" + this.state.barcoID, {
            headers: {
                Authorization:
                "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE1NDQ2NTcwMjYsIm5iZiI6MTU0NDY1NzAyNiwianRpIjoiYTNhOTM3N2QtOTVkYS00YTc3LTkyOGItOWMyYzhjZDY3OGUxIiwiZXhwIjoxNTQ1OTUzMDI2LCJpZGVudGl0eSI6InJhbW9uMyIsImZyZXNoIjpmYWxzZSwidHlwZSI6ImFjY2VzcyJ9.X80zuLw7bUH3V1PEwbteG6RARR1NZYcJJsMLTtDLcj4",
                "Content-Type": "application/json"
            }
        }).then(response => {
            this.setState({ barco: response.data.barco });
            // console.log(this.state.cliente);
        });
    }

    render() {
        var sucursales = this.state.sucursales.map(function (av) {
                return <option value={av.id} key={av.id}> {av.nombre} </option>
        })
        return (
            <div className="m-3 w-100">
                <h2 className="text-center m-3"> SisLogUCAB Barco {this.state.barco.id} Info </h2>

                <table className="table table-hover w-100 mr-3">
                    <thead className="thead-dark">
                        <tr>
                            <th scope="col" className="text-center">Nombre</th>
                            <th scope="col" className="text-center">Descripcion</th>
                            <th scope="col" className="text-center">Longitud</th>
                            <th scope="col" className="text-center">Velocidad Max</th>
                            <th scope="col" className="text-center">Sucursal</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="text-center">{this.state.empleado.nombre}</td>
                            <td className="text-center"> {this.state.empleado.descripcion} </td>
                            <td className="text-center">{this.state.empleado.long}</td>
                            <td className="text-center">{this.state.empleado.vmax}</td>
                            <td className="text-center">{this.state.empleado.fk_sucursal}</td>
                        </tr>
                    </tbody>
                </table>
                <br />

                <div className="m-3">
                    <div>
                        <form onSubmit={event => this.handleFormSubmit(event, "put", this.state.barcoID)}>
                            <div className="form-row">
                                <div className="form-group col-md-6">
                                    <label htmlFor="nombre">Nombre</label>
                                    <input type="text" name="Nombre" className="form-control" />
                                </div>
                                <div className="form-group col-md-6">
                                    <label htmlFor="Descripcion">Descripcion</label>
                                    <input type="text" name="Descripcion" className="form-control" />
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="form-group col-md-4">
                                    <label htmlFor="Long">Longitud</label>
                                    <input type="text" name="Long" className="form-control" />
                                </div>
                                <div className="form-group col-md-4">
                                    <label htmlFor="Vmax"> Velocidad Max </label>
                                    <input type="text" name="Vmax" className="form-control" />
                                </div>
                                <div className="form-group col-md-4">
                                    <label htmlFor="sucursal">Sucursal</label>
                                    <select className="form-control" name="sucursal">
                                        <option >Choose...</option>
                                        {sucursales}
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
        );
    }
}