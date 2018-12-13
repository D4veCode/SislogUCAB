import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ReactTable from "react-table";
import "react-table/react-table.css";
import axios from 'axios';
import '../../css/account.css';

export default class Vehiculos extends Component {
    constructor(props) {
        super(props)
        this.state = {
            vehiculos: [],
            sucursales: [],
            modelos:[]
        }
    }
    componentDidMount() {
        axios.get("http://127.0.0.1:3001/api/v1/vehiculos", {
            headers: {
                Authorization:
                "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE1NDQ2NTcwMjYsIm5iZiI6MTU0NDY1NzAyNiwianRpIjoiYTNhOTM3N2QtOTVkYS00YTc3LTkyOGItOWMyYzhjZDY3OGUxIiwiZXhwIjoxNTQ1OTUzMDI2LCJpZGVudGl0eSI6InJhbW9uMyIsImZyZXNoIjpmYWxzZSwidHlwZSI6ImFjY2VzcyJ9.X80zuLw7bUH3V1PEwbteG6RARR1NZYcJJsMLTtDLcj4",
                "Content-Type": "application/json"
            }
        })
            .then(response => {
                this.setState({ vehiculos: response.data.vehiculos });
                console.log(this.state.vehiculos);
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

    handleFormSubmit = (event) => {
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

        //console.log(datas);

        axios.post('http://localhost:3001/api/v1/vehiculos', datas, {
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
                        pathname: "/admin/vehiculo/" + props.original.id,
                        state: {
                            vehiculoID: props.original.id,
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
            Header: 'Placa',
            accessor: 'placa',
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
            Header: 'Color',
            accessor: 'color',
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
            Header: 'Fecha Vehiculo',
            accessor: 'fecha_v',
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
            Header: 'Serial Motor',
            accessor: 'serial_m',
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
            Header: 'Serial Carroceria',
            accessor: 'serial_c',
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
            Header: 'Modelo',
            accessor: 'fk_mod',
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
                            axios.delete('http://localhost:3001/api/v1/vehiculo/' + props.original.id,
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
            return <option value={av.id} key={av.id}> {av.nombre} </option>
        })
        var modelos = this.state.modelos.map(function (md) {
            return <option value={md.id} key={md.id}> {md.nombre} </option>
        })
        return (

            <div className="m-3 w-100">
                <h2 className="text-center m-3"> SisLogUCAB Vehiculos DataTable </h2>

                <ReactTable className="mr-4"
                    columns={columns}
                    data={this.state.vehiculos}
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
                            Registro
                            </button>
                    </form>
                </div>
            </div>
        );
    }
}