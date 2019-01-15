import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ReactTable from "react-table";
import "react-table/react-table.css";
import Sidemenu from "../../containers/Sidemenu.jsx";
import axios from 'axios';
import '../../css/account.css';

export default class Paquetes extends Component {
    constructor(props) {
        super(props)
        this.state = {
            paquetes: [],
            sucursales: [],
            m_trans:[],
            clientes:[]
        }
    }
    componentDidMount() {
        axios.get("http://127.0.0.1:3001/api/v1/paquetes", {
            headers: {
                Authorization:
                "Bearer " + localStorage.getItem('token'),
                "Content-Type": "application/json"
            }
        })
            .then(response => {
                this.setState({ paquetes: response.data.paquetes });
                //console.log(this.state.paquetes);
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
        })
            .then(response => {
                //console.log(response.data);
                this.setState({ m_trans: response.data.m_trans});
               // console.log(this.state.m_trans);
            })
            .catch(function (error) {
                console.log(error.response);
            });

         axios.get("http://127.0.0.1:3001/api/v1/clientes", {
            headers: {
                Authorization:
                "Bearer " + localStorage.getItem('token'),
                "Content-Type": "application/json"
            }
        })
            .then(response => {
                this.setState({ clientes: response.data.clientes });
                //console.log(this.state.clientes);
            })
            .catch(function (error) {
                console.log(error.response);
            });

    }

    handleFormSubmit = (event) => {
        event.preventDefault();
        const Num_G = event.target.elements.Num_G.value;
        const Peso = parseInt(event.target.elements.Peso.value);
        const Monto = parseInt(event.target.elements.Monto.value);
        const Fk_Trans = parseInt(event.target.elements.Fk_Trans.value);
        const Fk_Cliente = parseInt(event.target.elements.Fk_Cliente.value);
        const Ancho = parseInt(event.target.elements.Ancho.value);
        const Largo = parseInt(event.target.elements.Largo.value);
        const Alto = parseInt(event.target.elements.Alto.value);
        

        let datas = JSON.stringify({
            num_g: Num_G,
            peso: Peso,
            monto: Monto,
            fk_trans: Fk_Trans,
            fk_cliente: Fk_Cliente,
            alto: Alto,
            largo:Largo,
            ancho:Ancho
        });

        //console.log(datas);

        axios.post('http://localhost:3001/api/v1/paquetes', datas, {
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
                        pathname: "/admin/paquete/" + props.original.id,
                        state: {
                            paqueteID: props.original.id,
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
            Header: 'Num. Guia',
            accessor: 'num_g',
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
            width: 80,
            maxWidth:80,
            minWidth: 80,
        },
        {
            Header: 'Monto',
            accessor: 'monto',
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
            Header: 'Metodo Transporte',
            accessor: 'fk_trans',
            sortable: false,
            style: {
                textAlign: "center"
            },
            headerStyle: {
                background: "black",
                color: 'white',
            },
            width: 200,
            maxWidth: 200,
            minWidth: 200,
        },
        {
            Header: 'Cliente',
            accessor: 'fk_cliente',
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
            Header: 'Alto',
            accessor: 'alto',
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
            Header: 'Ancho',
            accessor: 'ancho',
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
            Header: 'Largo',
            accessor: 'largo',
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
            Header: 'Action',
            Cell: props => {
                return (
                    <button className="btn btn-danger"
                        onClick={() => {
                            axios.delete('http://localhost:3001/api/v1/paquete/' + props.original.id,
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
        var transporte = this.state.m_trans.map(function (trans) {
            return <option value={trans.id} key={trans.id}> {trans.tipo} </option>
        })
        var clientes = this.state.clientes.map(function (cl) {
            return <option value={cl.id} key={cl.id}> {cl.nombre} {cl.apellido} </option>
        })
        return (
            <div className="wrapper" keywords="clientes">
                <Sidemenu />

                <div className="container-fluid m-0 p-0">
                    {/* <MenuAdmin/> */}
                <div className="m-3 w-100">
                    <h2 className="text-center m-3"> SisLogUCAB Paquetes DataTable </h2>

                    <ReactTable className="mr-2"
                        columns={columns}
                        data={this.state.paquetes}
                        defaultPageSize={5}
                        filterable={false}
                        noDataText="No Posee Registro Alguno!"
                        showPageSizeOptions={false}
                    ></ReactTable>
                    <br />
                    <div>
                        <form onSubmit={event => this.handleFormSubmit(event)}>
                            <div className="form-row">
                                <div className="form-group col-md-3">
                                    <label htmlFor="Num_G">Numero Guia</label>
                                    <input type="text" name="Num_G" className="form-control" />
                                </div>
                                <div className="form-group col-md-3">
                                    <label htmlFor="Peso">Peso</label>
                                    <input type="text" name="Peso" className="form-control" />
                                </div>
                                <div className="form-group col-md-3">
                                    <label htmlFor="Monto">Monto</label>
                                    <input type="text" name="Monto" className="form-control" />
                                </div>
                                <div className="form-group col-md-3">
                                    <label htmlFor="Fk_Trans">Met Trans</label>
                                    <select className="form-control" name="Fk_Trans">
                                        <option >Choose...</option>
                                        {transporte}
                                    </select>
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="form-group col-md-3">
                                    <label htmlFor="Alto">Alto</label>
                                    <input type="text" name="Alto" className="form-control" />
                                </div>
                                <div className="form-group col-md-3">
                                    <label htmlFor="Largo">Ancho</label>
                                    <input type="text" name="Largo" className="form-control" />
                                </div>
                                <div className="form-group col-md-3">
                                    <label htmlFor="Ancho">Ancho</label>
                                    <input type="text" name="Ancho" className="form-control" />
                                </div>
                                <div className="form-group col-md-2">
                                    <label htmlFor="Fk_Cliente">Clientes</label>
                                    <select className="form-control" name="Fk_Cliente">
                                        <option >Choose...</option>
                                        {clientes}
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