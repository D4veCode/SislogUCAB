import React from 'react';
import { Route, Switch } from "react-router-dom";

//importando las rutas de la pagina
import Home from './views/Home.jsx';
import Sucursal from './views/pages/sucursal/Sucursal.jsx';
import Clientes from './views/pages/clientes/Clientes.jsx';
import ClienteDetail from './views/pages/clientes/ClienteDetail.jsx';
import CreateClienteN from './views/pages/clientes/CreateClienteN.jsx';
import CreateClienteJ from './views/pages/clientes/CreateClienteJ.jsx';
import Empleados from './views/pages/empleados/Empleados.jsx';
import EmpleadoDetail from './views/pages/empleados/EmpleadoDetail.jsx';
import Usuarios from './views/pages/usuarios/Usuarios.jsx';
import Roles from './views/pages/roles/Roles.jsx';
import RolDetail from './views/pages/roles/RolDetail.jsx';
import Account from './views/Account.jsx';
import Login from './views/Login';
import Aviones from './views/pages/avion/Aviones.jsx';
import AvionDetail from './views/pages/avion/AvionDetail.jsx';
import Barcos from "./views/pages/barco/Barcos.jsx";
import BarcoDetail from "./views/pages/barco/BarcoDetail.jsx";
import Rutas from "./views/pages/rutas/Rutas.jsx";
import RutaDetail from "./views/pages/rutas/RutaDetail.jsx";
import Vehiculos from "./views/pages/vehiculo/Vehiculos.jsx";
import VehiculoDetail from "./views/pages/vehiculo/VehiculoDetail.jsx";
import SucursalDetail from "./views/pages/sucursal/SucursalDetail.jsx";
import Paquetes from "./views/pages/paquete/Paquetes.jsx";
import Perfil from "./views/pages/VistaUsuario/Perfil.jsx";
import Tracking from "./views/pages/VistaUsuario/Tracking.jsx";
import PerfilEmp from "./views/pages/VistaEmpleado/PerfilEmp.jsx";
import RegistroClienteN from "./views/pages/VistaEmpleado/RegistroClienteN.jsx";
import RegistroClienteJ from './views/pages/VistaEmpleado/RegistroClienteJ.jsx';
import RegistroPaquete from "./views/pages/VistaEmpleado/RegistrarPaquete.jsx";
import ClienteIndex from './views/pages/VistaUsuario/ClienteIndex.jsx';
import EmpleadoIndex from './views/pages/VistaEmpleado/EmpleadoIndex.jsx';
import Carnet from './views/pages/VistaEmpleado/Carnet.jsx';

const BaseRouter = () =>(
    <div>
        <Route exact path="/" component={Home} />
        <Route exact path="/account" component={Account} />
        <Route path="/login" component={Login} />
        <Route path="/admin/sucursales" component={Sucursal} />
        <Route path="/admin/sucursal/:sucursal" component={SucursalDetail} />
        <Route path="/admin/clientes" component={Clientes} />
        <Route path="/admin/clientes/registro/natural" component={CreateClienteN} />
        <Route path="/admin/clientes/registro/juridico" component={CreateClienteJ} />
        <Route path="/admin/cliente/:cliente" component={ClienteDetail} />
        <Route path="/admin/empleados" component={Empleados} />
        <Route path="/admin/empleado/:empleado" component={EmpleadoDetail} />
        <Route path="/admin/usuarios" component={Usuarios} />
        <Route path="/admin/roles" component={Roles} />
        <Route path="/admin/rol/:rol" component={RolDetail} />
        <Route path="/admin/aviones" component={Aviones} />
        <Route path="/admin/avion/:avion" component={AvionDetail} />
        <Route path="/admin/barcos" component={Barcos} />
        <Route path="/admin/barco/:barco" component={BarcoDetail} />
        <Route path="/admin/rutas" component={Rutas} />
        <Route path="/admin/ruta/:ruta" component={RutaDetail} />
        <Route path="/admin/vehiculos" component={Vehiculos} />
        <Route path="/admin/vehiculo/:vehiculo" component={VehiculoDetail} />
        <Route path="/admin/paquetes" component={Paquetes} />
        <Switch>
            <Route exact path="/cliente" component={ClienteIndex} />
            <Route exact path="/cliente/perfil" component={Perfil} />
            <Route exact path="/cliente/tracking" component={Tracking} />
        </Switch>
        <Switch>
            <Route exact path="/empleado" component={EmpleadoIndex} />
            <Route exact path="/empleado/perfil" component={PerfilEmp} />
            <Route exact path="/empleado/paquete" component={RegistroPaquete}/>
            <Route exact path="/empleado/registro/clienteN" component={ RegistroClienteN } />
            <Route exact path="/empleado/registro/clienteJ" component={ RegistroClienteJ } />
        </Switch>
        <Route path="/generar/carnet" component={ Carnet } />
    </div>
);



export default BaseRouter;