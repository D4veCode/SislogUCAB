import React, { Component } from 'react';
import './css/account.css';
import Sidemenu from './containers/Sidemenu.jsx';
//import MenuAdmin from './containers/MenuAdmin';

export default class Account extends Component{
    render(){
        return(
        <div className="wrapper">
            <Sidemenu/>
            
            <div className="content">
              {/* <MenuAdmin/> */}
            
            
            <div className="m-3 titulo-admin">
                <div> <h2>¡Bienvenidos a SislogUCAB Admin!</h2> <br/> <h5>Acá podrás gestionar todas las actividades dentro de nuestra empresa. </h5></div>
            
            </div>
            
            
         
            
            
            </div>
        </div>
        );
    }
}