import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Loadable from 'react-loadable';
import '../node_modules/jquery/dist/jquery.min.js';
import '../node_modules/popper.js/dist/popper.min.js';
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';

// importando los respectivos componentes
import Home from './views/Home';
import Sucursal from './views/pages/sucursal/Sucursal';
import SucursalDetail from './views/pages/sucursal/SucursalDetail';
import Clientes from './views/pages/clientes/Clientes';
import ClienteDetail from './views/pages/clientes/ClienteDetail';


const loading = () => <div className="animated fadeIn pt-3 text-center">Loading...</div>;

const Account = Loadable({
  loader: () => import('./views/Account'),
  loading
});

const Login = Loadable({
  loader: () => import('./views/Login'),
  loading
});

const Register = Loadable({
  loader: () => import('./views/Register'),
  loading
});

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
            <div>
              <Route exact path="/" component={Home} />
              <Route path="/login" component={Login} />
              <Route path="/register" name="Register Page" component={Register} />
              <Route path="/account" component={Account}/>
              <Route path="/sucursal" component={Sucursal}/>
              <Route path="/sucursal/:sucursal" component={SucursalDetail}/>
              <Route path="/clientes" component={Clientes}/>
              <Route path="/cliente/:cliente" component={ClienteDetail}/>
            </div> 
        </Router>
      </div>
    );
  }
}

export default App;
