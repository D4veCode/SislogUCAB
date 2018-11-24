import React, { Component } from 'react';
import FormSucursal from './FormSucursal';
import Sidemenu from '../../containers/Sidemenu';
import MenuAdmin from '../../containers/MenuAdmin';
import {Link} from 'react-router-dom';
import axios from 'axios';
import '../../css/account.css';

export default class Sucursal extends Component{
    constructor(props){
        super(props)
        this.state = {
            sucursales : {}
        } 
    }
    componentDidMount(){
        /* axios.get(`http://127.0.0.1:8000/api/`)
        .then(response =>{
            this.setState({sucursales: response.data})
        }) */
    }

    render(){
        return(
            <div className="wrapper">
            <Sidemenu/>
            
            <div className="container-fluid m-0 p-0">
                <MenuAdmin/>
            
            
            <div className="m-3 w-100">
                <h2 className="text-center m-3"> SisLogUCAB Sucursal DataTable</h2>
            
                <table className="table table-hover w-100">
                    <thead>
                        <tr>
                        <th scope="col">#</th>
                        <th scope="col">  Nombre  </th>
                        <th scope="col">  Email  </th>
                        <th scope="col">  Metros2  </th>
                        <th scope="col">  Almacenamiento  </th>
                        <th scope="col">  Tamaño Almacenamiento  </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <th scope="row"><Link to={{
                            pathname: "/sucursal/1"
                        }} className="btn btn-info">1</Link></th>
                        <td>Mark</td>
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
                        </tr>
                        <tr>
                        <th scope="row">3</th>
                        <td>Larry the Bird</td>
                        <td>@twitter</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <br/>

            <div className="m-3">
                <FormSucursal
                    requestType="post"
                    sucursalID={null}
                    btnText="Create"
                />
            </div>
            
        
            </div>
        </div>
        );
    }
}