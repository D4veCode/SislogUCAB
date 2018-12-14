import React, { Component } from 'react';
import Sidemenu from '../../containers/Sidemenu';
import {Link} from 'react-router-dom';
import axios from 'axios';
import '../../css/account.css';
import ReactTable from 'react-table';
import "react-table/react-table.css";

export default class Sucursal extends Component{
    constructor(props){
        super(props)
        this.state = {
            sucursales : [],
            estados: [],
            municipios: [],
            parroquias: []
        } 
    }
    componentDidMount(){
        axios.get("http://127.0.0.1:3001/api/v1/sucursales", {
            headers: {
                Authorization:
                "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE1NDQ2NTcwMjYsIm5iZiI6MTU0NDY1NzAyNiwianRpIjoiYTNhOTM3N2QtOTVkYS00YTc3LTkyOGItOWMyYzhjZDY3OGUxIiwiZXhwIjoxNTQ1OTUzMDI2LCJpZGVudGl0eSI6InJhbW9uMyIsImZyZXNoIjpmYWxzZSwidHlwZSI6ImFjY2VzcyJ9.X80zuLw7bUH3V1PEwbteG6RARR1NZYcJJsMLTtDLcj4",
                "Content-Type": "application/json"
            }
          })
          .then(response => {
            this.setState({ sucursales: response.data.sucursales });
          })
          .catch(function(error) {
            console.log(error.response);
          }); 
          
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
    }
    handleFormSubmit = (event) => {
        event.preventDefault();
        const Nombre = event.target.elements.Nombre.value;
        const Email = event.target.elements.Email.value;
        const Cap_M2 = parseInt(event.target.elements.Cap_M2.value);
        const Cap_Alm = parseInt(event.target.elements.Cap_Alm.value);
        const Tamaño_D = parseInt(event.target.elements.Tamaño_D.value);
        const Fk_Lugar = parseInt(event.target.elements.Municipios.value);
    

        let data = JSON.stringify({
            nombre: Nombre,
            email: Email,
            cap_m2: Cap_M2,
            cap_alm: Cap_Alm,
            tamano_d: Tamaño_D,
            fk_lugar: Fk_Lugar,
        })

        console.log(data)

        axios.post("http://127.0.0.1:3001/api/v1/sucursales", data, {
            headers: {
                Authorization:
                "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE1NDQ2NTcwMjYsIm5iZiI6MTU0NDY1NzAyNiwianRpIjoiYTNhOTM3N2QtOTVkYS00YTc3LTkyOGItOWMyYzhjZDY3OGUxIiwiZXhwIjoxNTQ1OTUzMDI2LCJpZGVudGl0eSI6InJhbW9uMyIsImZyZXNoIjpmYWxzZSwidHlwZSI6ImFjY2VzcyJ9.X80zuLw7bUH3V1PEwbteG6RARR1NZYcJJsMLTtDLcj4",
                "Content-Type": "application/json"
            }
        })
            .then(response => console.log(response))
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

    render(){
        const columns = [{
            Header: '#',
            Cell: props => {
                return (
                    <Link to={{
                        pathname: "/admin/sucursal/" + props.original.cod,
                        state: {
                            sucursalID: props.original.cod,
                        }
                    }} className="btn btn-info">{props.original.cod}</Link>
                )
            },
            headerStyle: {
                background: "black",
                color: 'white',
            },
            width: 50,
            maxWidth: 50,
            minWidth: 50,
        },
        {
            Header: 'Nombre',
            accessor: 'nombre',
            sortable: false,
            style: {
                textAlign: "center"
            },
            headerStyle: {
                background: "black",
                color: 'white',
            },
            width: 100,
            maxWidth: 100,
            minWidth: 100,
        },
        {
            Header: 'Capacidad M2',
            accessor: 'cap_m2',
            sortable: false,
            style: {
                textAlign: "center"
            },
            headerStyle: {
                background: "black",
                color: 'white',
            },
            width: 150,
            maxWidth: 150,
            minWidth: 150,
        },
        {
            Header: 'Capacidad Almacenamiento',
            accessor: 'cap_alm',
            sortable: false,
            style: {
                textAlign: "center"
            },
            headerStyle: {
                background: "black",
                color: 'white',
            },
            width: 250,
            maxWidth: 250,
            minWidth: 250,
        },
        {
            Header: 'Email',
            accessor: 'email',
            sortable: false,
            style: {
                textAlign: "center"
            },
            headerStyle: {
                background: "black",
                color: 'white',
            },
            width: 225,
            maxWidth: 225,
            minWidth: 225,
        },
        {
            Header: 'Tamaño',
            accessor: 'tamaño_d',
            sortable: false,
            style: {
                textAlign: "center"
            },
            headerStyle: {
                background: "black",
                color: 'white',
            },
            width: 110,
            maxWidth: 110,
            minWidth: 110,
        },
        {
            Header: 'Ubicacion',
            accessor: 'fk_lugar',
            headerStyle: {
                background: "black",
                color: 'white',
            },
            sortable: false,
            style: {
                textAlign: "center"
            },
            width: 110,
            maxWidth: 110,
            minWidth: 110,
        },
        {
            Header: 'Action',
            Cell: props => {
                return (
                    <button className="btn btn-danger"
                        onClick={() => {
                            axios.delete('http://localhost:3001/api/v1/sucursal/' + props.original.cod,
                                {
                                    headers: {
                                        Authorization: "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE1NDQ2NTcwMjYsIm5iZiI6MTU0NDY1NzAyNiwianRpIjoiYTNhOTM3N2QtOTVkYS00YTc3LTkyOGItOWMyYzhjZDY3OGUxIiwiZXhwIjoxNTQ1OTUzMDI2LCJpZGVudGl0eSI6InJhbW9uMyIsImZyZXNoIjpmYWxzZSwidHlwZSI6ImFjY2VzcyJ9.X80zuLw7bUH3V1PEwbteG6RARR1NZYcJJsMLTtDLcj4",
                                        "Content-Type": "application/json"
                                    }
                                }
                            ).then(response => {
                               console.log(response.data)
                            })
                                .catch(function (error) {
                                    console.log(error.response);
                                });
                        }}
                    >Delete</button>
                )
            },
            headerStyle: {
                background: "black",
                color: 'white',
            },
            width: 90,
            maxWidth: 90,
            minWidth: 90,
        }]
        var Est = this.state.estados.map(function (estado) {
            return <option value={estado.id} key={`option_${estado.id}`} > {estado.nombre} </option>
        });
        var Municipios = this.state.municipios.map(function (muni) {
            return <option value={muni.id} key={`option_${muni.id}`}> {muni.nombre}</option>
        });
        var Parroquias = this.state.parroquias.map(function (parro) {
            return <option value={parro.id} key={`option_${parro.id}`}> {parro.nombre}</option>
        });
        return(
            <div className="wrapper">
            <Sidemenu/>
            
            <div className="container-fluid m-0 p-0">
                {/* <MenuAdmin/> */}
            
            
            <div className="m-3 w-100">
                <h2 className="text-center m-3"> SisLogUCAB Sucursal DataTable</h2>
            
                <ReactTable className="mr-3"
                    columns={columns}
                    data={this.state.sucursales}
                    defaultPageSize={5}
                    filterable={false}
                    noDataText="No Posee Registro Alguno!"
                    showPageSizeOptions={false}
                ></ReactTable>

            </div>

                <div>
                    <form onSubmit={(event) => this.handleFormSubmit(event)}>
                            <div className="form-row">
                                <div className="form-group col-md-6">
                                    <label htmlFor="nombre">Nombre</label>
                                    <input type="text" name="Nombre" className="form-control" id="inputEmail4" placeholder="Nombre Sucursal" />
                                </div>
                                <div className="form-group col-md-6">
                                    <label htmlFor="email">Email</label>
                                    <input type="email" name="Email" className="form-control" id="inputPassword4" placeholder="Email" />
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
                                <div className="form-group col-md-4">
                                    <label htmlFor="Cap_M2">Capacidad Metros Cuadrados</label>
                                    <input type="text" name="Cap_M2" className="form-control" id="inputCity" />
                                </div>
                                <div className="form-group col-md-4">
                                    <label htmlFor="Cap_Alm">Capacidad de Almacenamiento</label>
                                    <input type="text" name="Cap_Alm" className="form-control" id="inputCity" />
                                </div>
                                <div className="form-group col-md-4">
                                    <label htmlFor="Tamaño_D">Tamaño de Almacenamiento</label>
                                    <input type="text" name="Tamaño_D" className="form-control" id="inputCity" />
                                </div>
                            </div>
                            <button type="submit" className="btn btn-primary">Registro</button>
                        </form>
                </div>
        
            </div>
        </div>
        );
    }
}