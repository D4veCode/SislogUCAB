import React, { Component } from 'react';
import Sidemenu from '../../containers/Sidemenu.jsx';
//import MenuAdmin from '../../containers/MenuAdmin';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../../css/account.css';
import ReactTable from 'react-table';
import "react-table/react-table.css";

export default class Roles extends Component {
    constructor(props) {
        super(props);
        this.state = {
            roles: []
        }
    }
    componentDidMount() {
        axios.get("http://127.0.0.1:3001/api/v1/roles", {
            headers: {
                Authorization:
                "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE1NDQ1NDg3MDUsIm5iZiI6MTU0NDU0ODcwNSwianRpIjoiNzM3ZTdlZjEtZDAyOS00NzliLWJhNmQtY2YxMGQwYjQwMTY0IiwiZXhwIjoxNTQ0NTkzNzA1LCJpZGVudGl0eSI6ImlzYWFjIiwiZnJlc2giOmZhbHNlLCJ0eXBlIjoiYWNjZXNzIn0.kWtFuLIo0XHBdbrQffgXesHm7XLaheWJLcgHPYN3BlY",
                "Content-Type": "application/json"
            }
        }).then(response => {
            this.setState({ roles: response.data.roles });
            console.log(this.state.roles);
        }).catch(function (error) {
            console.log(error.response);
        });
    }

    handleFormSubmit = (event) => {
        event.preventDefault();
        const Nombre = event.target.elements.Nombre.value;
        const Tipo = event.target.elements.Tipo.value;

            let datas = JSON.stringify({
                nombre: Nombre,
                tipo: Tipo,
            })

            console.log(datas);

            axios.post('http://localhost:3001/api/v1/roles', datas,
                {
                    headers: {
                        Authorization:
                        "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE1NDQzNjM4NjcsIm5iZiI6MTU0NDM2Mzg2NywianRpIjoiOTRmYzE0ZTktMTU5OS00ZDdhLWI4OTUtOTExYThhMTU4OGU0IiwiZXhwIjoxNTQ0NDA4ODY3LCJpZGVudGl0eSI6ImhpdDIiLCJmcmVzaCI6ZmFsc2UsInR5cGUiOiJhY2Nlc3MifQ.P_cVpJ7pCuATRBE55EtdZOSFEzgrz0wu5Cm5oEaHgmQ",
                        "Content-Type": "application/json"
                    }
                }
            )
                .then(response => console.log(response))
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
                        pathname: "/admin/rol/" + props.original.id,
                        state: {
                            rolID: props.original.id,
                        }
                    }} className="btn btn-info">{props.original.id}</Link>
                )
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
            Header: 'Tipo',
            accessor: 'tipo',
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
            Header: 'Action',
            Cell: props => {
                return (
                    <button className="btn btn-danger"
                        onClick={() => {
                            axios.delete('http://localhost:3001/api/v1/rol/' + props.original.id,
                                {
                                    headers: {
                                        Authorization: "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE1NDQ1NDg3MDUsIm5iZiI6MTU0NDU0ODcwNSwianRpIjoiNzM3ZTdlZjEtZDAyOS00NzliLWJhNmQtY2YxMGQwYjQwMTY0IiwiZXhwIjoxNTQ0NTkzNzA1LCJpZGVudGl0eSI6ImlzYWFjIiwiZnJlc2giOmZhbHNlLCJ0eXBlIjoiYWNjZXNzIn0.kWtFuLIo0XHBdbrQffgXesHm7XLaheWJLcgHPYN3BlY",
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
        return (
            <div className="wrapper" keywords="clientes">
                <Sidemenu />

                <div className="container-fluid m-0 p-0">
                    {/* <MenuAdmin/> */}

                    <div className="m-2 w-100">
                        <h2 className="text-center"> SisLogUCAB Roles DataTable</h2>

                        <ReactTable className="mr-4"
                            columns={columns}
                            data={this.state.roles}
                            defaultPageSize={10}
                            filterable={false}
                            noDataText="No Posee Registro Alguno!"
                            showPageSizeOptions={false}
                        ></ReactTable>
                    </div>

                    <div className="m-3">
                        <form onSubmit={event => this.handleFormSubmit(
                            event
                        )}>
                            <div className="form-row">
                                <div className="form-group col-md-6">
                                    <label htmlform="Nombre">Nombre</label>
                                    <input type="text" name="Nombre" className="form-control" />
                                </div>
                                <div className="form-group col-md-6">
                                    <label htmlform="Tipo">Tipo</label>
                                    <input type="text" name="Tipo" className="form-control" id="inputPassword4" />
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