import React, { Component } from 'react';
import FormEmpleado from './FormEmpleado';
import Sidemenu from '../../containers/Sidemenu';
import MenuAdmin from '../../containers/MenuAdmin';
import {Link} from 'react-router-dom';
import axios from 'axios';
import '../../css/account.css';

export default class Empleado extends Component{
    constructor(props){
        super(props)
        this.state = {
            empleados : {}
        } 
    }
    componentDidMount(){
        /* axios.get(`http://127.0.0.1:8000/api/`)
        .then(response =>{
            this.setState({empleados: response.data})
        }) */
    }

    render(){
        return(
            <div className="wrapper">
            <Sidemenu/>
            
            <div className="container-fluid m-0 p-0">
                <MenuAdmin/>
            
            
            <div className="m-3 w-100">
                <h2 className="text-center m-3"> SisLogUCAB Empleados DataTable</h2>
            
                <table className="table table-hover w-100">
                    <thead className="thead-dark">
                        <tr>
                        <th scope="col">#</th>
                        <th scope="col">  Username  </th>
                        <th scope="col">  Password  </th>
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
                        <tr>
                        <th scope="row"><Link to={{
                            pathname: "/empleado/1"
                        }} className="btn btn-info">1</Link></th>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                        </tr>
                        <tr>
                        <th scope="row">2</th>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                        </tr>
                        <tr>
                        <th scope="row">3</th>
                        <td>Larry the Bird</td>
                        <td>@twitter</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                        <td>@mdo</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <br/>

            <div className="m-3">
                <FormEmpleado
                    requestType="post"
                    empleadoID={null}
                    btnText="Create"
                />
            </div>
            
        
            </div>
        </div>
        );
    }
}