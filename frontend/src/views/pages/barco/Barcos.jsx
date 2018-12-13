import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ReactTable from "react-table";
import "react-table/react-table.css";
import axios from 'axios';
import '../../css/account.css';

export default class Barcos extends Component {
    constructor(props) {
        super(props)
        this.state = {
            barcos: [],
            sucursales:[],
        }
    }
    componentDidMount() {
        axios.get("http://127.0.0.1:3001/api/v1/barcos", {
            headers: {
                Authorization:
                "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE1NDQ2NTcwMjYsIm5iZiI6MTU0NDY1NzAyNiwianRpIjoiYTNhOTM3N2QtOTVkYS00YTc3LTkyOGItOWMyYzhjZDY3OGUxIiwiZXhwIjoxNTQ1OTUzMDI2LCJpZGVudGl0eSI6InJhbW9uMyIsImZyZXNoIjpmYWxzZSwidHlwZSI6ImFjY2VzcyJ9.X80zuLw7bUH3V1PEwbteG6RARR1NZYcJJsMLTtDLcj4",
                "Content-Type": "application/json"
            }
        })
        .then(response => {
            this.setState({ barcos: response.data.barcos });
            console.log(this.state.barcos);
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
        const Descripcion = event.target.elements.Descripcion.value;
        const Long = parseInt(event.target.elements.Long.value);
        const Vmax = parseFloat(event.target.elements.Vmax.value);
        const Peso = parseInt(event.target.elements.Peso.value);
        const Cap_C = parseInt(event.target.elements.Cap_C.value);
        const Fk_Sucursal = parseInt(event.target.elements.sucursal.value);

        let datas = JSON.stringify({
            nombre: Nombre,
            descripcion: Descripcion,
            peso: Peso,
            cap_c: Cap_C,
            long: Long,
            vmax: Vmax,
            fk_sucursal: Fk_Sucursal
        });

        console.log(datas);

        axios.post('http://localhost:3001/api/v1/barcos', datas, {
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
                        pathname: "/admin/barco/" + props.original.id,
                        state: {
                            barcoID: props.original.id,
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
                            axios.delete('http://localhost:3001/api/v1/barco/' + props.original.id,
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
        return (

            <div className="m-3 w-100">
                <h2 className="text-center m-3"> SisLogUCAB Barcos DataTable </h2>

                <ReactTable className="mr-4"
                    columns={columns}
                    data={this.state.barcos}
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
                            <div className="form-group col-md-3">
                                <label htmlFor="Descripcion">Descripcion</label>
                                <input type="text" name="Descripcion" className="form-control" />
                            </div>
                            <div className="form-group col-md-3">
                                <label htmlFor="Long">Longitud</label>
                                <input type="text" name="Long" className="form-control" />
                            </div>
                            <div className="form-group col-md-3">
                                <label htmlFor="Vmax"> Velocidad Max </label>
                                <input type="text" name="Vmax" className="form-control" />
                            </div>
                            <div className="form-group col-md-3">
                                <label htmlFor="sucursal">Sucursal</label>
                                <select className="form-control" name="sucursal">
                                    <option >Choose...</option>
                                    {sucursales}
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