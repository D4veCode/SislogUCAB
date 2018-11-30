import React, { Component } from 'react';
import axios from 'axios';
import FormCliente from './FormCliente';
import Sidemenu from '../../containers/Sidemenu';
import MenuAdmin from '../../containers/MenuAdmin';
import '../../css/account.css';

export default class ClienteDetail extends Component{
    constructor(props){
        super(props)
        this.state = {
            cliente : {}
        } 
    }
    componentDidMount(){
        const clienteID = this.props.match.params.clienteID;
         axios.get(`http://127.0.0.1:8000/${clienteID}`)
        .then(response =>{
            this.setState({sucursal: response.data.clientes})
            console.log(this.state.clientes);
        }) 
    }

    render(){
        var Edo_Civil = ""
        var VIP = ""
        if (this.state.cliente.Edo_C == "v"){
            return Edo_Civil = "Viudo"
        }
        if (this.state.cliente.L-VIP == 0){
            return VIP = "El Cliente No Posee L-VIP"
        }
        return(  
        <div>          
            <div className="m-3 w-100">
                <h2 className="text-center m-3"> SisLogUCAB Cliente {this.state.cliente.ID} Detail</h2>
                
                <div className="card">
                    <div className="card-header text-center">
                        {this.state.cliente.Nombre} {this.state.cliente.Apellido}
                    </div>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">{this.state.cliente.Cedula}</li>
                        <li className="list-group-item">{this.state.cliente.ID}</li>
                        <li className="list-group-item">{Edo_Civil}</li>
                        <li className="list-group-item">{this.state.cliente.Nombre_E}</li>
                        <li className="list-group-item">{ VIP }</li>
                        <li className="list-group-item">{this.state.cliente.Fecha_N}</li>
                    </ul>
                </div>

            </div>   
            <br/>

            <div className="m-3">
                <FormCliente
                    requestType="put"
                    // clienteID={this.props.match.params.clienteID}
                    btnText="Update"
                />
            </div>
        
        </div>
        );
    }
}