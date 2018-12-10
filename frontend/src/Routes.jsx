import { Route } from 'react-router-dom';
import React, { Component } from 'react';

//importando las rutas de la pagina
import Home from './views/Home.jsx';
import Sucursal from './views/pages/sucursal/Sucursal.jsx';
import SucursalDetail from './views/pages/sucursal/SucursalDetail.jsx';
import CreateSucursal from './views/pages/sucursal/CreateSucursal.jsx';
import Clientes from './views/pages/clientes/Clientes.jsx';
import ClienteDetail from './views/pages/clientes/ClienteDetail.jsx';
import CreateClienteN from './views/pages/clientes/CreateClienteN.jsx';
import CreateClienteJ from './views/pages/clientes/CreateClienteJ.jsx';
import Empleados from './views/pages/empleados/Empleados.jsx';
import EmpleadoDetail from './views/pages/empleados/EmpleadoDetail.jsx';
import CreateEmpleado from './views/pages/empleados/CreateEmpleado.jsx';
import Usuarios from './views/pages/usuarios/Usuarios.jsx';
import UsuarioDetail from './views/pages/usuarios/UsuarioDetail.jsx';
import CreateUsuario from './views/pages/usuarios/CreateUsuario.jsx';
import Roles from './views/pages/roles/Roles.jsx';
import RolDetail from './views/pages/roles/RolDetail.jsx';
import CreateRol from './views/pages/roles/CreateRol.jsx';
import Account from './views/Account.jsx';
import Login from './views/Login';
import Register from "./views/Register";

class BaseRouter extends Component{
    render(){
        return <div>
            <Route exact path="/" component={Home} />
            <Route path="/cliente/login" component={Login} />
            <Route path="/cliente/register" name="Register Page" component={Register} />
            <Route path="/account" component={Account} />
            <Route path="/admin/sucursales" component={Sucursal} />
            <Route path="/admin/sucursal/create" component={CreateSucursal} />
            <Route path="/admin/sucursal/:sucursal" component={SucursalDetail} />
            <Route path="/admin/clientes" component={Clientes} />
            <Route path="/admin/clientes/registro/natural" component={CreateClienteN} />
            <Route path="/admin/clientes/registro/juridico" component={CreateClienteJ} />
            <Route path="/admin/cliente/:cliente" component={ClienteDetail} />
            <Route path="/admin/empleados" component={Empleados} />
            <Route path="/admin/empleado/create" component={CreateEmpleado} />
            <Route path="/admin/empleado/:empleado" component={EmpleadoDetail} />
            <Route path="/admin/usuarios" component={Usuarios} />
            <Route path="/admin/usuario/create" component={CreateUsuario} />
            <Route path="/admin/usuario/:usuario" component={UsuarioDetail} />
            <Route path="/admin/roles" component={Roles} />
            <Route path="/admin/rol/create" component={CreateRol} />
            <Route path="/admin/rol/:rol" component={RolDetail} />
          </div>;
    }
}

export default BaseRouter;