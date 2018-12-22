import React, { Component } from 'react';
import axios from 'axios';
import '../../css/account.css';

export default class EmpleadoDetail extends Component{
    constructor(props){
        super(props)
        this.state = { 
            empleado: {},
            empleadoID: this.props.location.state.empleadoID,
            empleados:[],
            estados: [],
            municipios: [],
            parroquias: []
        } 
    }
    componentDidMount(){
      axios.get("http://127.0.0.1:3001/api/v1/empleado/" + this.state.empleadoID, {
        headers: {
          Authorization:
            "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE1NDQ2NTcwMjYsIm5iZiI6MTU0NDY1NzAyNiwianRpIjoiYTNhOTM3N2QtOTVkYS00YTc3LTkyOGItOWMyYzhjZDY3OGUxIiwiZXhwIjoxNTQ1OTUzMDI2LCJpZGVudGl0eSI6InJhbW9uMyIsImZyZXNoIjpmYWxzZSwidHlwZSI6ImFjY2VzcyJ9.X80zuLw7bUH3V1PEwbteG6RARR1NZYcJJsMLTtDLcj4",
          "Content-Type": "application/json"
        }
      })
        .then(response =>{
            this.setState({empleado: response.data.empleado})
        }) 

      axios.get("http://127.0.0.1:3001/api/v1/estados", {
        headers: {
          Authorization:
            "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE1NDQ2NTcwMjYsIm5iZiI6MTU0NDY1NzAyNiwianRpIjoiYTNhOTM3N2QtOTVkYS00YTc3LTkyOGItOWMyYzhjZDY3OGUxIiwiZXhwIjoxNTQ1OTUzMDI2LCJpZGVudGl0eSI6InJhbW9uMyIsImZyZXNoIjpmYWxzZSwidHlwZSI6ImFjY2VzcyJ9.X80zuLw7bUH3V1PEwbteG6RARR1NZYcJJsMLTtDLcj4",
          "Content-Type": "application/json"
        }
      }).then(response => {
        this.setState({ estados: response.data.lugar });
        console.log(this.state.estados)
      }).catch(function (error) {
        console.log(error.response);
      });

      axios.get("http://127.0.0.1:3001/api/v1/empleados", {
          headers: {
            Authorization:
            "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE1NDQ2NTcwMjYsIm5iZiI6MTU0NDY1NzAyNiwianRpIjoiYTNhOTM3N2QtOTVkYS00YTc3LTkyOGItOWMyYzhjZDY3OGUxIiwiZXhwIjoxNTQ1OTUzMDI2LCJpZGVudGl0eSI6InJhbW9uMyIsImZyZXNoIjpmYWxzZSwidHlwZSI6ImFjY2VzcyJ9.X80zuLw7bUH3V1PEwbteG6RARR1NZYcJJsMLTtDLcj4",
            "Content-Type": "application/json"
          }
        })
        .then(response => {
          this.setState({ empleados: response.data.empleados });
          console.log(this.state.empleados);
        })
        .catch(function (error) {
          console.log(error.response);
        });  

    }

  onGetMunicipios() {
    console.log(this.refs.Estados.value);
    axios.get('http://localhost:3001/api/v1/municipios/' + this.refs.Estados.value, {
      headers: {
        'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE1NDQ2NTcwMjYsIm5iZiI6MTU0NDY1NzAyNiwianRpIjoiYTNhOTM3N2QtOTVkYS00YTc3LTkyOGItOWMyYzhjZDY3OGUxIiwiZXhwIjoxNTQ1OTUzMDI2LCJpZGVudGl0eSI6InJhbW9uMyIsImZyZXNoIjpmYWxzZSwidHlwZSI6ImFjY2VzcyJ9.X80zuLw7bUH3V1PEwbteG6RARR1NZYcJJsMLTtDLcj4',
        'Content-Type': 'application/json'
      }
    }).then(response => {
      this.setState({ municipios: response.data.lugar });
      console.log(this.state.municipios)
    }).catch(function (error) {
      console.log(error.response);
    });
  }

  onGetParroquias() {
    console.log(this.refs.Municipios.value);
    axios.get('http://localhost:3001/api/v1/parroquias/' + this.refs.Municipios.value, {
      headers: {
        'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE1NDQ2NTcwMjYsIm5iZiI6MTU0NDY1NzAyNiwianRpIjoiYTNhOTM3N2QtOTVkYS00YTc3LTkyOGItOWMyYzhjZDY3OGUxIiwiZXhwIjoxNTQ1OTUzMDI2LCJpZGVudGl0eSI6InJhbW9uMyIsImZyZXNoIjpmYWxzZSwidHlwZSI6ImFjY2VzcyJ9.X80zuLw7bUH3V1PEwbteG6RARR1NZYcJJsMLTtDLcj4',
        'Content-Type': 'application/json'
      }
    }).then(response => {
      this.setState({ parroquias: response.data.lugar });
      console.log(this.state.parroquias)
    }).catch(function (error) {
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
        const Username = event.target.elements.Username.value;
        const Password = event.target.elements.Password.value;
        const Fk_Lugar = parseInt(event.target.elements.Parroquias.value);
        const Fk_Emp = parseInt(event.target.elements.jefes.value);
       const Nivel_ACD = event.target.elements.Nivel_ACD.value;

        if (requestType === "put") {
            let datas = JSON.stringify({
              p_nombre: PNombre,
              s_nombre: SNombre,
              p_apellido: PApellido,
              s_apellido: SApellido,
              cedula: Cedula,
              email_e: Email_E,
              email_p: Email_P,
              fecha_n: Fecha_N,
              edo_c: Edo_C,
              profesion: Profesion,
              num_h: Num_h,
              nivel_acd: Nivel_ACD,
              fk_lugar: Fk_Lugar,
              fk_emp: Fk_Emp,
              username: Username,
              password: Password
            });

            console.log(datas);

            axios.put(`http://localhost:3001/api/v1/empleado/${empleadoID}`, datas,
                {
                    headers: {
                        Authorization:
                        "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE1NDQ2NTcwMjYsIm5iZiI6MTU0NDY1NzAyNiwianRpIjoiYTNhOTM3N2QtOTVkYS00YTc3LTkyOGItOWMyYzhjZDY3OGUxIiwiZXhwIjoxNTQ1OTUzMDI2LCJpZGVudGl0eSI6InJhbW9uMyIsImZyZXNoIjpmYWxzZSwidHlwZSI6ImFjY2VzcyJ9.X80zuLw7bUH3V1PEwbteG6RARR1NZYcJJsMLTtDLcj4",
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
                "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE1NDQ2NTcwMjYsIm5iZiI6MTU0NDY1NzAyNiwianRpIjoiYTNhOTM3N2QtOTVkYS00YTc3LTkyOGItOWMyYzhjZDY3OGUxIiwiZXhwIjoxNTQ1OTUzMDI2LCJpZGVudGl0eSI6InJhbW9uMyIsImZyZXNoIjpmYWxzZSwidHlwZSI6ImFjY2VzcyJ9.X80zuLw7bUH3V1PEwbteG6RARR1NZYcJJsMLTtDLcj4",
                "Content-Type": "application/json"
            }
        }).then(response => {
            this.setState({ empleado: response.data.empleado });
            // console.log(this.state.cliente);
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
        } else if (this.state.empleado.edo_c === "d"){
            Edo_Civil = "Divorciado";
        }

        var Est = this.state.estados.map(function (estado) {
            return <option value={estado.id} key={`option_${estado.id}`} > {estado.nombre} </option>
        });
        var Municipios = this.state.municipios.map(function (muni) {
            return <option value={muni.id} key={`option_${muni.id}`}> {muni.nombre}</option>
        });
        var Parroquias = this.state.parroquias.map(function (parro) {
            return <option value={parro.id} key={`option_${parro.id}`}> {parro.nombre}</option>
        });
         var jefes = this.state.empleados.map(function (jefe){
            if (jefe.fk_emp != null){
                return <option value={jefe.fk_emp} key={jefe.id}> {jefe.fk_emp} </option>
            }
        })
        return (
          <div className="m-3 w-100">
            <h2 className="text-center m-3"> SisLogUCAB Empleado { this.state.empleado.id} Info </h2>

                <table className="table table-hover w-100 mr-3">
                  <thead className="thead-dark">
                    <tr>
                      <th scope="col" className="text-center">Usuario</th>
                      <th scope="col" className="text-center">Nombres</th>
                      <th scope="col" className="text-center">Apellidos</th>
                      <th scope="col" className="text-center">Cedula</th>
                      <th scope="col" className="text-center">Email Personal</th>
                      <th scope="col" className="text-center">Email Trabajo</th>
                      <th scope="col" className="text-center">Fecha Nacimiento</th>
                      <th scope="col" className="text-center">Edo. Civil</th>
                      <th scope="col" className="text-center">Nivel Acad.</th>
                      <th scope="col" className="text-center">Profesion</th>
                      <th scope="col" className="text-center">N* Hijos</th>
                      <th scope="col" className="text-center">Direccion</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="text-center">{this.state.empleado.username}</td>
                      <td className="text-center">
                        {this.state.empleado.p_nombre} {this.state.empleado.s_nombre}
                      </td>
                      <td className="text-center">
                        {this.state.empleado.p_apellido} {this.state.empleado.s_apellido}
                      </td>
                      <td className="text-center">{this.state.empleado.cedula}</td>
                      <td className="text-center">{this.state.empleado.email_p}</td>
                      <td className="text-center">{this.state.empleado.email_e}</td>
                      <td className="text-center">{this.state.empleado.fecha_n}</td>
                      <td className="text-center"> {Edo_Civil} </td>
                      <td className="text-center">{this.state.empleado.nivel_acd}</td>
                      <td className="text-center">{this.state.empleado.profesion}</td>
                      <td className="text-center">{this.state.empleado.num_h}</td>
                      <td className="text-center">{this.state.empleado.direccion}</td>
                    </tr>
                  </tbody>
                </table>
              <br/>

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
                      <input type="password" name="Password" className="form-control" id="inputPassword4" placeholder="Password" />
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-group col-md-4">
                      <label htmlFor="PNombre">Primer Nombre</label>
                      <input type="text" name="PNombre" className="form-control"  />
                    </div>
                    <div className="form-group col-md-4">
                      <label htmlFor="SNombre">Segundo Nombre</label>
                      <input type="text" name="SNombre" className="form-control"  />
                    </div>
                    <div className="form-group col-md-4">
                      <label htmlFor="PApellido">
                        Primer Apellido
                                    </label>
                      <input type="text" name="PApellido" className="form-control"  />
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-group col-md-4">
                      <label htmlFor="SApellido">
                        Segundo Apellido
                                    </label>
                      <input type="text" name="SApellido" className="form-control"  />
                    </div>
                    <div className="form-group col-md-4">
                      <label htmlFor="Cedula">Cedula</label>
                      <input type="text" name="Cedula" className="form-control"  />
                    </div>
                    <div className="form-group col-md-4">
                      <label htmlFor="Email_P">Email Personal</label>
                      <input type="email" name="Email_P" className="form-control"  />
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-group col-md-4">
                      <label htmlFor="Email_E">
                        Email Empresarial
                                    </label>
                      <input type="email" name="Email_E" className="form-control"  />
                    </div>
                    <div className="form-group col-md-4">
                      <label htmlFor="Fecha_N">
                        Fecha Nacimiento
                                    </label>
                      <input type="date" name="Fecha_N" className="form-control"  />
                    </div>
                    <div className="form-group col-md-4">
                      <label htmlFor="Edo_C">Estado Civil</label>
                      <select  className="form-control" name="Edo_C">
                        <option >Choose...</option>
                        <option value="c">Casado</option>
                        <option value="d">Divorciado</option>
                        <option value="s">Soltero</option>
                        <option value="v">Viudo</option>
                      </select>
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-group col-md-4">
                      <label htmlform="estados">Estados</label>
                      <select ref="Estados" className="form-control" name="Estados" onChange={(e) => { this.onGetMunicipios(); }}>
                        <option readOnly>Seleccione...</option>
                        {Est}
                      </select>
                    </div>
                    <div className="form-group col-md-4">
                      <label htmlform="municipios">Municipios</label>
                      <select ref="Municipios" className="form-control" name="Municipios" onChange={(e) => { this.onGetParroquias(); }}>
                        <option readOnly>Seleccione...</option>
                        {Municipios}
                      </select>
                    </div>
                    <div className="form-group col-md-4">
                      <label htmlform="parroquias">Parroquias</label>
                      <select className="form-control" name="Parroquias">
                        <option readOnly>Seleccione...</option>
                        {Parroquias}
                      </select>
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-group col-md-3">
                      <label htmlFor="Num_h">Numero de Hijos</label>
                      <input type="text" name="Num_h" className="form-control"  />
                    </div>
                    <div className="form-group col-md-3">
                      <label htmlFor="jefes">Jefes</label>
                      <select  className="form-control" name="jefes">
                        <option >Choose...</option>
                        {jefes}
                      </select>
                    </div>
                    <div className="form-group col-md-3">
                      <label htmlFor="Profesion">Profesion</label>
                      <input type="text" name="Profesion" className="form-control"  />
                    </div>
                    <div className="form-group col-md-3">
                      <label htmlFor="Nivel_ACD">Nivel Academico</label>
                      <input type="text" name="Nivel_ACD" className="form-control" />
                    </div>
                  </div>

                    <button type="submit" className="btn btn-primary">
                      Update
                    </button>
                  </form>
                </div>
              </div>
          </div>
        );
    }
}