import React, { Component } from 'react';
import axios from 'axios';
import Sidemenu from '../../containers/Sidemenu.jsx';
//import MenuAdmin from '../../containers/MenuAdmin';
import '../../css/account.css';

export default class EmpleadoDetail extends Component{
    constructor(props){
        super(props)
        this.state = { 
            empleado: {},
            direccion:{}, 
            empleadoID: this.props.location.state.empleadoID 
        } 
    }
    componentDidMount(){
        axios.get("http://127.0.0.1:8000/api/v1/empleado/"+ this.state.empleadoID)
        .then(response =>{
            this.setState({empleado: response.data.empleado})
        }) 

        axios.get("http://127.0.0.1:8000/api/v1/parroquias/" + this.state.empleado.Direccion)
          .then(response => {
            this.setState({ direccion: response.data.lugar });
          })
          .then(response => console.log(this.state.direccion))
          .catch(function(error) {
            console.log(error.response);
          });

    }

    handleFormSubmit = (event, requestType, empleadoID) => {
        event.preventDefault();
        const PNombre = event.target.elements.PNombre.value;
        const SNombre = event.target.elements.SNombre.value;
        const PApellido = event.target.elements.PApellido.value;
        const SApellido = event.target.elements.SApellido.value;
        const Email_P = event.target.elements.Email_P.value;
        const Email_E = event.target.elements.Email_E.value;
        const Fecha_N = event.target.elements.Fecha_N.value;
        const Cedula = event.target.elements.Cedula.value;
        const Edo_C = event.target.elements.Edo_C.value;
        const Profesion = event.target.elements.Profesion.value;
        const Num_h = parseInt(event.target.elements.Num_h.value);
        const Salario = parseFloat(event.target.elements.Salario.value);
        const Username = event.target.elements.Username.value;
        const Password = event.target.elements.Password.value;

        if (requestType === "put") {
            let datas = JSON.stringify({
              p_nombre: PNombre,
              s_nombre: SNombre,
              p_apelldio: PApellido,
              s_apelldio: SApellido,
              cedula: Cedula,
              email_e: Email_E,
              email_p: Email_P,
              fecha_n: Fecha_N,
              edo_c: Edo_C,
              profesion: Profesion,
              num_h: Num_h,
              salario: Salario,
              fk_lugar: 1,
              username: Username,
              password: Password
            });

            //console.log(datas);

            axios.put(`http://localhost:3001/api/v1/empleado/${empleadoID}`, datas,
                {
                    headers: {
                        Authorization:
                        "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE1NDQzNjM4NjcsIm5iZiI6MTU0NDM2Mzg2NywianRpIjoiOTRmYzE0ZTktMTU5OS00ZDdhLWI4OTUtOTExYThhMTU4OGU0IiwiZXhwIjoxNTQ0NDA4ODY3LCJpZGVudGl0eSI6ImhpdDIiLCJmcmVzaCI6ZmFsc2UsInR5cGUiOiJhY2Nlc3MifQ.P_cVpJ7pCuATRBE55EtdZOSFEzgrz0wu5Cm5oEaHgmQ",
                        "Content-Type": "application/json"
                    }
                }
            )
                .then(response => console.log(response))
                .catch(function (error) {
                    console.log(error.response);
                });
        }

        axios.get("http://localhost:3001/api/v1/empleado/" + this.state.empleadoID, {
            headers: {
                Authorization:
                "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE1NDQzNjM4NjcsIm5iZiI6MTU0NDM2Mzg2NywianRpIjoiOTRmYzE0ZTktMTU5OS00ZDdhLWI4OTUtOTExYThhMTU4OGU0IiwiZXhwIjoxNTQ0NDA4ODY3LCJpZGVudGl0eSI6ImhpdDIiLCJmcmVzaCI6ZmFsc2UsInR5cGUiOiJhY2Nlc3MifQ.P_cVpJ7pCuATRBE55EtdZOSFEzgrz0wu5Cm5oEaHgmQ",
                "Content-Type": "application/json"
            }
        }).then(response => {
            this.setState({ empleado: response.data.empleado });
            // console.log(this.state.cliente);
        });

        axios.get("http://127.0.0.1:8000/api/v1/parroquias/" + this.state.empleado.Direccion)
            .then(response => {
                this.setState({ direccion: response.data.lugar });
            })
            .then(response => console.log(this.state.direccion))
            .catch(function (error) {
                console.log(error.response);
            });
    } 

    render(){
        var Edo_Civil = "";
        if (this.state.empleado.edo_c === "v") {
           Edo_Civil = "Viudo";
        } else if (this.state.empleado.edo_c === "s") {
            Edo_Civil = "Soltero";
        } else if (this.state.empleado.edo_c === "c") {
            Edo_Civil = "Casado";
        } else {
            Edo_Civil = "Divorciado";
        }
        return <div className="wrapper">
            <Sidemenu />
            <div className="container-fluid m-0 p-0">
              {/* <MenuAdmin/> */}

              <div className="m-3 w-100">
                <h2 className="text-center m-3"> SisLogUCAB Empleado { this.state.empleado.id} Info </h2>

                <table className="table table-hover w-100">
                  <thead className="thead-dark">
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">Nombres</th>
                      <th scope="col">Apellidos</th>
                      <th scope="col">Cedula</th>
                      <th scope="col">Email Personal</th>
                      <th scope="col">Email Trabajo</th>
                      <th scope="col">Fecha Nacimiento</th>
                      <th scope="col">Edo. Civil</th>
                      <th scope="col">Profesion</th>
                      <th scope="col">N* Hijos</th>
                      <th scope="col">Salario</th>
                      <th scope="col">Direccion</th>
                      <th scope="col">Usuario</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="text-center">
                        {this.state.empleado.p_nombre} {this.state.empleado.p_nombre}
                      </td>
                      <td className="text-center">
                        {this.state.empleado.p_apellido} {this.state.empleado.p_apellido}
                      </td>
                      <td className="text-center">
                        {this.state.empleado.cedula}
                      </td>
                      <td className="text-center">
                        {this.state.empleado.email_p}
                      </td>
                      <td className="text-center">
                        {this.state.empleado.email_e}
                      </td>
                      <td className="text-center">
                        {this.state.empleado.fecha_n}
                      </td>
                      <td className="text-center"> {Edo_Civil} </td>
                      <td className="text-center">
                        {this.state.empleado.profesion}
                      </td>
                      <td className="text-center">
                        {this.state.empleado.num_h}
                      </td>
                      <td className="text-center">
                        {this.state.empleado.salario}
                      </td>
                      <td className="text-center">
                        {this.state.Direccion.nombre}
                      </td>
                      <td className="text-center">
                        {this.state.empleado.username}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <br />

              <div className="m-3">
                <div>
                  <form onSubmit={event => this.handleFormSubmit(event, "put", this.state.empleadoID)}>
                    <div className="form-row">
                      <div className="form-group col-md-6">
                        <label htmlFor="Username">Username</label>
                        <input type="text" name="Username" className="form-control" id="inputEmail4" placeholder="Username" />
                      </div>
                      <div className="form-group col-md-6">
                        <label htmlFor="Password">Password</label>
                        <input type="email" name="Password" className="form-control" id="inputPassword4" placeholder="Password" />
                      </div>
                    </div>
                    <div className="form-row">
                      <div className="form-group col-md-4">
                        <label htmlFor="PNombre">Primer Nombre</label>
                        <input type="text" name="PNombre" className="form-control" id="inputCity" />
                      </div>
                      <div className="form-group col-md-4">
                        <label htmlFor="SNombre">Segundo Nombre</label>
                        <input type="text" name="SNombre" className="form-control" id="inputCity" />
                      </div>
                      <div className="form-group col-md-4">
                        <label htmlFor="PApellido">
                          Primer Apellido
                        </label>
                        <input type="text" name="PApellido" className="form-control" id="inputCity" />
                      </div>
                    </div>
                    <div className="form-row">
                      <div className="form-group col-md-4">
                        <label htmlFor="SApellido">
                          Segundo Apellido
                        </label>
                        <input type="text" name="SApellido" className="form-control" id="inputCity" />
                      </div>
                      <div className="form-group col-md-4">
                        <label htmlFor="Cedula">Cedula</label>
                        <input type="text" name="Cedula" className="form-control" id="inputCity" />
                      </div>
                      <div className="form-group col-md-4">
                        <label htmlFor="Email_P">Email Personal</label>
                        <input type="text" name="Email_P" className="form-control" id="inputCity" />
                      </div>
                    </div>
                    <div className="form-row">
                      <div className="form-group col-md-3">
                        <label htmlFor="Email_E">
                          Email Empresarial
                        </label>
                        <input type="text" name="Email_E" className="form-control" id="inputCity" />
                      </div>
                      <div className="form-group col-md-3">
                        <label htmlFor="Fecha_N">
                          Fecha Nacimiento
                        </label>
                        <input type="date" name="Fecha_N" className="form-control" id="inputCity" />
                      </div>
                      <div class="form-group col-md-3">
                        <label htmlFor="Edo_C">Estado Civil</label>
                        <select id="inputState" class="form-control" name="Edo_C">
                          <option >Choose...</option>
                          <option value="c">Casado</option>
                          <option value="d">Divorciado</option>
                          <option value="s">Soltero</option>
                          <option value="v">Viudo</option>
                        </select>
                      </div>
                      <div className="form-group col-md-3">
                        <label htmlFor="Profesion">Profesion</label>
                        <input type="date" name="Profesion" className="form-control" id="inputCity" />
                      </div>
                    </div>
                    <div className="form-row">
                      <div className="form-group col-md-2">
                        <label htmlFor="Num_h">Numero de Hijos</label>
                        <input type="text" name="Num_h" className="form-control" id="inputCity" />
                      </div>
                      <div className="form-group col-md-2">
                        <label htmlFor="Salario">
                          Salario
                        </label>
                        <input type="date" name="Salario" className="form-control" id="inputCity" />
                      </div>
                    </div>

                    <button type="submit" className="btn btn-primary" htmlType="submit">
                      Update
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>;
    }
}