import React, { Component } from 'react';
import axios from 'axios';
import FormCliente from './FormCliente';
import Sidemenu from '../../containers/Sidemenu';
import MenuAdmin from '../../containers/MenuAdmin';
import '../../css/account.css';

export default class SucursalDetail extends Component{
    constructor(props){
        super(props)
        this.state = {
            sucursal : {}
        } 
    }
    componentDidMount(){
        const clienteID = this.props.match.params.clienteID;
        /* axios.get(`http://127.0.0.1:8000/${clienteID}`)
        .then(response =>{
            this.setState({sucursal: response.data})
        }) */
    }

    render(){
        return(  
        <div>          
            <div className="m-3 w-100">
                <h2 className="text-center m-3"> SisLogUCAB Cliente Detail</h2>
                
                <div className="card">
                    <div className="card-header">
                        Featured
                    </div>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">Cras justo odio</li>
                        <li className="list-group-item">Dapibus ac facilisis in</li>
                        <li className="list-group-item">Vestibulum at eros</li>
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