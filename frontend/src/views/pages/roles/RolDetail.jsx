import React, { Component } from 'react';
import axios from 'axios';
import Sidemenu from "../../containers/Sidemenu.jsx";
// import MenuAdmin from '../../containers/MenuAdmin';
import '../../css/account.css';

export default class ClienteDetail extends Component {
    constructor(props) {
        super(props)

        this.state = {
            rol: {},
            rolID: this.props.location.state.rolID,
        }
    }
    componentDidMount() {
        console.log(this.state.clienteID)
        axios.get("http://localhost:3001/api/v1/rol/" + this.state.rolID,
            {
                headers: {
                    Authorization: "Bearer " + localStorage.getItem('token'),
                    "Content-Type": "application/json"
                }
            }
        )
            .then(response => {
                this.setState({ rol: response.data.rol });
                //console.log(this.state.cliente);
            });


    }

    handleFormSubmit = (event, requestType, rolID) => {
        event.preventDefault();
        const Nombre = event.target.elements.Nombre.value;
        const Tipo = event.target.elements.Tipo.value;
       

        if (requestType === "put") {
            let datas = JSON.stringify({
                nombre: Nombre,
                tipo: Tipo,
            })

            console.log(datas);

            axios.put(`http://localhost:3001/api/v1/rol/${rolID}`, datas,
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

        axios.get("http://localhost:3001/api/v1/rol/" + this.state.rolID, {
            headers: {
                Authorization:
                "Bearer " + localStorage.getItem('token'),
                "Content-Type": "application/json"
            }
        }
        )
            .then(response => {
                this.setState({ rol: response.data.rol });
                // console.log(this.state.cliente);
            });
    }
    render() {
        return (
            <div className="wrapper">
                <Sidemenu />

                <div className="container-fluid m-0 p-0">
                    {/* <MenuAdmin/> */}

                    <div className="m-3 w-100">
                        <h2 className="text-center m-3"> SisLogUCAB Rol {this.state.rol.id} info </h2>

                        <table className="table table-hover w-100">
                            <thead className="thead-dark">
                                <tr>
                                    <th scope="col" className="text-center" > Nombre </th>
                                    <th scope="col" className="text-center" > Tipo </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="text-center" >{this.state.rol.nombre}</td>
                                    <td className="text-center" >{this.state.rol.tipo}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <br />

                    <div className="m-3">
                        <form onSubmit={event => this.handleFormSubmit(
                            event,
                            'put',
                            this.state.rolID
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