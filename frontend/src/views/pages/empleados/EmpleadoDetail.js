import React, { Component } from 'react';
import axios from 'axios';
import FormEmpleado from './FormEmpleado';
import Sidemenu from '../../containers/Sidemenu';
import MenuAdmin from '../../containers/MenuAdmin';
import '../../css/account.css';

export default class EmpleadoDetail extends Component{
    constructor(props){
        super(props)
        this.state = {
            empleado : {}
        } 
    }
    componentDidMount(){
        const empleadoID = this.props.match.params.empleadoID;
        /* axios.get(`http://127.0.0.1:8000/${empleadoID}`)
        .then(response =>{
            this.setState({empleado: response.data})
        }) */
    }

    render(){
        return(  
        <div>          
            <div className="m-3 w-100">
                <h2 className="text-center m-3"> SisLogUCAB Empleado Detail</h2>
                
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
                <FormEmpleado
                    requestType="put"
                    // sucursalID={this.props.match.params.empleadoID}
                    btnText="Update"
                />
            </div>
        
        </div>
        );
    }
}