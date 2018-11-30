import React, { Component } from 'react';
import FormCliente from './FormCliente';
import Sidemenu from '../../containers/Sidemenu';
import MenuAdmin from '../../containers/MenuAdmin';
import {Link} from 'react-router-dom';
import axios from 'axios';
import '../../css/account.css';

export default class Sucursal extends Component{
    constructor(props){
        super(props)
        this.state = {
            clientes : []
        } 
    }
    componentDidMount(){
         axios.get('http://127.0.0.1:8000/api/v1/clientes')
        .then(response =>{
            this.setState({clientes: response.data.clientes})
            console.log(this.state.clientes);
        })
    }

    render(){
        var client = this.state.clientes.map(function(cliente){
            return <tr key={cliente.ID}>
                        <th scope="row"><Link to={{
                            pathname: "/cliente/"+cliente.ID
                        }} className="btn btn-info">{ cliente.ID }</Link></th>
                        <td>{ cliente.FK_User }</td>
                        <td>{ cliente.Nombre }</td>
                        <td>{ cliente.Apellido }</td>
                        <td>{ cliente.Cedula }</td>
                        <td>{ cliente.Nombre_E }</td>
                        <td>{ cliente.Edo_C }</td>
                        <td>{ cliente.L_VIP }</td>
                        <td>{ cliente.Fecha_N }</td>
                    </tr>
        })
        return(
            <div className="wrapper">
            <Sidemenu/>
            
            <div className="container-fluid m-0 p-0">
                <MenuAdmin/>
            
            
            <div className="m-3 w-100">
                <h2 className="text-center m-3"> SisLogUCAB Clientes DataTable</h2>
            
                <table className="table table-hover w-100">
                    <thead className="thead-dark">
                        <tr>
                        <th scope="col">#</th>
                        <th scope="col">  Username  </th>
                        <th scope="col">  Nombre  </th>
                        <th scope="col">  Apellido  </th>
                        <th scope="col">  Cedula </th>
                        <th scope="col">  Empresa  </th>
                        <th scope="col">  Edo. Civil </th>
                        <th scope="col">  L_VIP  </th>
                        <th scope="col">  Nacimiento </th>
                        </tr>
                    </thead>
                    <tbody>
                        { client }
                    </tbody>
                </table>
            </div>
            <br/>

            <div className="m-3">
                <FormCliente
                    requestType="post"
                    clienteID={null}
                    btnText="Create"
                />
            </div>
            
        
            </div>
        </div>
        );
    }
}