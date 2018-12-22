import React, { Component } from 'react';
import axios from 'axios';

export default class CreateEmpleado extends Component {
    handleFormSubmit = (event) => {
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

        axios.post('http://127.0.0.1:3001/api/v1/empleado/registro', datas, {
            headers: {
                'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE1NDQyMzE4NzYsIm5iZiI6MTU0NDIzMTg3NiwianRpIjoiNDgxZTU3ZjMtNWU2Yy00NzViLTlkMDUtM2ZmMTlmZmE3OWQ0IiwiZXhwIjoxNTQ0Mjc2ODc2LCJpZGVudGl0eSI6ImhpdCIsImZyZXNoIjpmYWxzZSwidHlwZSI6ImFjY2VzcyJ9.eCmzEYLPxj084PRBEgAvRbLzGlT2RbnAB8EtYvOUL9g',
                'Content-Type': 'application/json'
            }
        })
        .then(response => console.log(response))
        .catch(function (error) {
            console.log(error.response);
        });
       
    } 
    render() {
        return (
            <div className="wrapper" keywords="registro empleados">
                <div className="m-2 w-100">
                    <h2 className="text-center"> SisLogUCAB Registrar Empleado</h2>
                    <br />

                    <div className="m-3 w-100">

                        <form onSubmit={event => this.handleFormSubmit(event)}>
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

                            <button type="submit" className="btn btn-primary"> Registro </button>
                        </form>

                    </div>
                </div>
            </div>
        );
    }
}