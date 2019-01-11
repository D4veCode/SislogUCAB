import React, { Component } from 'react';
import UserMenu from './Usermenu.jsx';
import axios from 'axios';
import '../../css/account.css';

class Tracking extends Component {
    reden() {
        return (
            <div className="wrapper" keywords="clientes">
                <UserMenu />

                <div className="container-fluid m-0 p-0">

                    <div className="m-2 w-100">
                        <h2 className="text-center"> Tracking </h2>



                    </div>

                </div>
            </div>
        );
    }
}

export default Tracking;

