import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ReactTable from "react-table";
import "react-table/react-table.css";
import axios from 'axios';
import '../../css/account.css';
import Sidemenu from '../../containers/Sidemenu.jsx';

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
                "Bearer " + localStorage.getItem('token'),
                "Content-Type": "application/json"
            }
        })
        .then(response => {
            this.setState({ barcos: response.data.barcos });
            //console.log(this.state.barcos);
            })
            .catch(function (error) {
                console.log(error.response);
            });

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

    }

    handleFormSubmit = (event) => {
        event.preventDefault();
        const Nombre = event.target.elements.Nombre.value;
        const Descripcion = event.target.elements.Descripcion.value;
        const Long = parseInt(event.target.elements.Long.value);
        const Vmax = parseFloat(event.target.elements.Vmax.value);
        const Fk_Sucursal = parseInt(event.target.elements.sucursal.value);

        let datas = JSON.stringify({
            nombre: Nombre,
            descripcion: Descripcion,
            long: Long,
            vmax: Vmax,
            fk_sucursal: Fk_Sucursal
        });

        console.log(datas);

        axios.post('http://localhost:3001/api/v1/barcos', datas, {
            headers: {
                Authorization:
                "Bearer " + localStorage.getItem('token'),
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
            width: 80,
            maxWidth: 80,
            minWidth: 80,
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
            width: 250,
            maxWidth: 250,
            minWidth: 250,
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
            width: 250,
            maxWidth: 250,
            minWidth: 250,
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
            width: 150,
            maxWidth: 150,
            minWidth: 150,
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
            width: 150,
            maxWidth: 150,
            minWidth: 150,
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
            width: 250,
            maxWidth: 250,
            minWidth: 250,
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
                                        Authorization: "Bearer " + localStorage.getItem('token'),
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
            <div className="wrapper" keywords="clientes">
                <Sidemenu />

                <div className="container-fluid m-0 p-0">
                    {/* <MenuAdmin/> */}

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
                    <div className="mx-3 p-3">
                        <form onSubmit={event => this.handleFormSubmit(event)}>
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
            </div>
        </div>
        );
    }
}