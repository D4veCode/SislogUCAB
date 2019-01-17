import React, { Component } from "react";
import "../../css/account.css";
import UserMenu from "./Usermenu.jsx";

export default class ClienteIndex extends Component {
  render() {
    return (
      <div className="wrapper">
        <UserMenu {...this.props} />

        <div className="content">
          <div className="m-3 titulo-admin">
        
            <div> <h2>¡Bienvenidos a SislogUCAB Cliente!</h2> <br /> <h5>Acá podrás gestionar todas las actividades dentro de nuestra empresa. </h5></div>

          </div>
        </div>
      </div>
    );
  }
}
