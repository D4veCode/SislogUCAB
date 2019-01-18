import React, { Component } from 'react';
import '../../css/account.css';
import MenuEmpleado from './MenuEmpleado.jsx';
import axios from 'axios';
import '../../css/carnet.css';

/*const carnet = {
    background: "url(require(../../css/fondo_carnet.jpg))"
};
*/
export default class Carnet extends Component {
    constructor(props) {
        super(props)
        this.state = {
            cliente: {},
            seq:{}
        }
    }
    componentDidMount() {
        axios.get("http://localhost:3001/api/v1/cliente/" + localStorage.getItem('cliente'),
            {
                headers: {
                    Authorization: "Bearer " + localStorage.getItem('token'),
                    "Content-Type": "application/json"
                }
            }
        )
            .then(response => {
                this.setState({ cliente: response.data.cliente });
                //console.log(this.state.cliente);
            });
        
        axios.get("http://localhost:3001/api/v1/generarseq" ,
            {
                headers: {
                    Authorization: "Bearer " + localStorage.getItem('token'),
                    "Content-Type": "application/json"
                }
            }).then(response => {
                this.setState({ seq: response.data });
                console.log(this.state.seq);
            });
    }
    render() {
        return (
            <div className="wrapper">
                <MenuEmpleado {...this.props} />

                <div className="container-fluid m-0 p-0">
                    <div className="m-3 w-100">
                   
                    <h2 className="text-center m-5"> Generacion de Carnet </h2>

                    <div className="d-flex w-100 justify-content-center">
                        <div className="card bg-dark text-white shadow-sm p-3 mb-5 bg-white rounded">
                        <img src={require('../../css/carnet.jpg') } className="card-img w-100 h-100" alt="carnet"/>
                            <div className="card-img-overlay">
                                <h5 className="card-title my-5 font-weight-bold text-dark text-center">SisLogUcab Carnet</h5>
                                <p className="card-text font-weight-bold text-dark">Nombre Y Apellido: {this.state.cliente.nombre } { this.state.cliente.apellido }</p>
                                <p className="card-text font-weight-bold text-dark">Correo: {this.state.cliente.email}</p>
                                <p className="card-text font-weight-bold text-dark">Usuario: {this.state.cliente.username}</p>

                                <hr/>

                                <p className="card-text text-center font-weight-bold text-dark"> {localStorage.getItem('sucursal')} - {this.state.cliente.cedula} - {this.state.seq.seq}</p>
                            </div>
                        </div>
                    </div>
                    
                    
                   </div>     
                </div>

            </div>
        );
    }
}