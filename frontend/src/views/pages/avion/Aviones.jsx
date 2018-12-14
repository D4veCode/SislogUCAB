import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ReactTable from "react-table";
import "react-table/react-table.css";
import axios from 'axios';
import '../../css/account.css';

export default class Aviones extends Component {
    constructor(props) {
        super(props)
        this.state = {
            aviones: [],
            sucursales:[],
        }
    }
    componentDidMount() {
        axios.get("http://127.0.0.1:3001/api/v1/aviones", {
            headers: {
                Authorization:
                "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE1NDQ2NTcwMjYsIm5iZiI6MTU0NDY1NzAyNiwianRpIjoiYTNhOTM3N2QtOTVkYS00YTc3LTkyOGItOWMyYzhjZDY3OGUxIiwiZXhwIjoxNTQ1OTUzMDI2LCJpZGVudGl0eSI6InJhbW9uMyIsImZyZXNoIjpmYWxzZSwidHlwZSI6ImFjY2VzcyJ9.X80zuLw7bUH3V1PEwbteG6RARR1NZYcJJsMLTtDLcj4",
                "Content-Type": "application/json"
                }
            })
            .then(response => {
                this.setState({ aviones: response.data.aviones });
                console.log(this.state.aviones);
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


    }

    handleFormSubmit = (event) => {
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

        axios.post('http://localhost:3001/api/v1/aviones', datas, {
            headers: {
                Authorization:
                "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE1NDQ2NTcwMjYsIm5iZiI6MTU0NDY1NzAyNiwianRpIjoiYTNhOTM3N2QtOTVkYS00YTc3LTkyOGItOWMyYzhjZDY3OGUxIiwiZXhwIjoxNTQ1OTUzMDI2LCJpZGVudGl0eSI6InJhbW9uMyIsImZyZXNoIjpmYWxzZSwidHlwZSI6ImFjY2VzcyJ9.X80zuLw7bUH3V1PEwbteG6RARR1NZYcJJsMLTtDLcj4",
                "Content-Type": "application/json"
            }
        }).then(response => console.log(response))
            .catch(function (error) {
                console.log(error.response);
            });
    }
    render() {
        const columns = [{
            Header: '#',
            Cell: props => {
                return (
                    <Link to={{
                        pathname: "/admin/avion/" + props.original.id,
                        state: {
                            avionID: props.original.id,
                        }
                    }} className="btn btn-info">{props.original.id}</Link>
                )
            },
            headerStyle: {
                background: "black",
                color: 'white',
            },
            width: 50,
            maxWidth: 50,
            minWidth: 50,
        },
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
            width: 100,
            maxWidth: 100,
            minWidth: 100,
        },
        {
            Header: 'Peso',
            accessor: 'peso',
            sortable: false,
            style: {
                textAlign: "center"
            },
            headerStyle: {
                background: "black",
                color: 'white',
            },
            width: 100,
            maxWidth: 100,
            minWidth: 100,
        },
        {
            Header: 'Capacidad C',
            accessor: 'Cap_C',
            sortable: false,
            style: {
                textAlign: "center"
            },
            headerStyle: {
                background: "black",
                color: 'white',
            },
            width: 100,
            maxWidth: 100,
            minWidth: 100,
        },
        {
            Header: 'Descripcion',
            accessor: 'descripcion',
            sortable: false,
            style: {
                textAlign: "center"
            },
            headerStyle: {
                background: "black",
                color: 'white',
            },
            width: 110,
            maxWidth: 110,
            minWidth: 110,
        },
        {
            Header: 'Longitud',
            accessor: 'long',
            sortable: false,
            style: {
                textAlign: "center"
            },
            headerStyle: {
                background: "black",
                color: 'white',
            },
            width: 120,
            maxWidth: 120,
            minWidth: 120,
        },
        {
            Header: 'Envergadura',
            accessor: 'env',
            sortable: false,
            style: {
                textAlign: "center"
            },
            headerStyle: {
                background: "black",
                color: 'white',
            },
            width: 120,
            maxWidth: 120,
            minWidth: 120,
        },
        {
            Header: 'Altura',
            accessor: 'alt',
            sortable: false,
            style: {
                textAlign: "center"
            },
            headerStyle: {
                background: "black",
                color: 'white',
            },
            width: 100,
            maxWidth: 100,
            minWidth: 100,
        },
        {
            Header: 'Ancho Capacidad',
            accessor: 'ancho_c',
            sortable: false,
            style: {
                textAlign: "center"
            },
            headerStyle: {
                background: "black",
                color: 'white',
            },
            width: 110,
            maxWidth: 110,
            minWidth: 110,
        },
        {
            Header: 'Diametro',
            accessor: 'diametro',
            sortable: false,
            style: {
                textAlign: "center"
            },
            headerStyle: {
                background: "black",
                color: 'white',
            },
            width: 110,
            maxWidth: 110,
            minWidth: 110,
        },
        {
            Header: 'Peso MaxD',
            accessor: 'peso_maxd',
            sortable: false,
            style: {
                textAlign: "center"
            },
            headerStyle: {
                background: "black",
                color: 'white',
            },
            width: 110,
            maxWidth: 110,
            minWidth: 110,
        },
        {
            Header: 'Carrera D',
            accessor: 'carrera_d',
            sortable: false,
            style: {
                textAlign: "center"
            },
            headerStyle: {
                background: "black",
                color: 'white',
            },
            width: 80,
            maxWidth: 80,
            minWidth: 80,
        },
        {
            Header: 'Velocidad M',
            accessor: 'vmax',
            sortable: false,
            style: {
                textAlign: "center"
            },
            headerStyle: {
                background: "black",
                color: 'white',
            },
            width: 80,
            maxWidth: 80,
            minWidth: 80,
        },
        {
            Header: 'Combustible C',
            accessor: 'fuel_c',
            sortable: false,
            style: {
                textAlign: "center"
            },
            headerStyle: {
                background: "black",
                color: 'white',
            },
            width: 80,
            maxWidth: 80,
            minWidth: 80,
        },
        {
            Header: 'Motor',
            accessor: 'motor',
            sortable: false,
            style: {
                textAlign: "center"
            },
            headerStyle: {
                background: "black",
                color: 'white',
            },
            width: 120,
            maxWidth: 120,
            minWidth: 120,
        },
        {
            Header: 'Area C',
            accessor: 'area',
            sortable: false,
            style: {
                textAlign: "center"
            },
            headerStyle: {
                background: "black",
                color: 'white',
            },
            width: 80,
            maxWidth: 80,
            minWidth: 80,
        },
        {
            Header: 'Sucursal',
            accessor: 'fk_sucursal',
            sortable: false,
            style: {
                textAlign: "center"
            },
            headerStyle: {
                background: "black",
                color: 'white',
            },
            width: 80,
            maxWidth: 80,
            minWidth: 80,
        },
        {
            Header: 'Action',
            Cell: props => {
                return (
                    <button className="btn btn-danger"
                        onClick={() => {
                            axios.delete('http://localhost:3001/api/v1/avion/' + props.original.id,
                                {
                                    headers: {
                                        Authorization: "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE1NDQ2NTcwMjYsIm5iZiI6MTU0NDY1NzAyNiwianRpIjoiYTNhOTM3N2QtOTVkYS00YTc3LTkyOGItOWMyYzhjZDY3OGUxIiwiZXhwIjoxNTQ1OTUzMDI2LCJpZGVudGl0eSI6InJhbW9uMyIsImZyZXNoIjpmYWxzZSwidHlwZSI6ImFjY2VzcyJ9.X80zuLw7bUH3V1PEwbteG6RARR1NZYcJJsMLTtDLcj4",
                                        "Content-Type": "application/json"
                                    }
                                }
                            ).then(response => {
                                console.log(response.data)
                            })
                                .catch(function (error) {
                                    console.log(error.response);
                                });
                        }}
                    >Delete</button>
                )
            },
            headerStyle: {
                background: "black",
                color: 'white',
            },
            width: 90,
            maxWidth: 90,
            minWidth: 90,
        }]

        var sucursales = this.state.sucursales.map(function (av) {
                return <option value={av.cod} key={av.cod}> {av.nombre} </option>
        })
        return (

            <div className="m-3 w-100">
                <h2 className="text-center m-3"> SisLogUCAB Aviones DataTable </h2>

                <ReactTable className="mr-4"
                    columns={columns}
                    data={this.state.aviones}
                    defaultPageSize={5}
                    filterable={false}
                    noDataText="No Posee Registro Alguno!"
                    showPageSizeOptions={false}
                ></ReactTable>
                <br />
                <div>
                    <form onSubmit={event => this.handleFormSubmit(event)}>
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
                            Registro
                            </button>
                    </form>
                </div>
            </div>
        );
    }
}