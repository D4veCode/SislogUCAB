import React, { Component } from 'react';
import Sidemenu from '../../containers/Sidemenu.jsx';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../../css/account.css';
import ReactTable from 'react-table';
import "react-table/react-table.css";

export default class Rutas extends Component {
    constructor(props) {
        super(props);
        this.state = {
            rutas: [],
            sucursales:[],
            destinos:[],
            dest : {},
            met_trans:[]
        }
    }
    componentDidMount() {
        axios.get("http://127.0.0.1:3001/api/v1/rutas", {
            headers: {
                Authorization:
                "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE1NDQ2NTcwMjYsIm5iZiI6MTU0NDY1NzAyNiwianRpIjoiYTNhOTM3N2QtOTVkYS00YTc3LTkyOGItOWMyYzhjZDY3OGUxIiwiZXhwIjoxNTQ1OTUzMDI2LCJpZGVudGl0eSI6InJhbW9uMyIsImZyZXNoIjpmYWxzZSwidHlwZSI6ImFjY2VzcyJ9.X80zuLw7bUH3V1PEwbteG6RARR1NZYcJJsMLTtDLcj4",
                "Content-Type": "application/json"
            }
        }).then(response => {
            this.setState({ rutas: response.data.rutas });
            console.log(this.state.rutas);
        }).catch(function (error) {
            console.log(error.response);
        });

        axios.get("http://127.0.0.1:3001/api/v1/sucursales", {
            headers: {
                Authorization:
                    "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE1NDQ2NTcwMjYsIm5iZiI6MTU0NDY1NzAyNiwianRpIjoiYTNhOTM3N2QtOTVkYS00YTc3LTkyOGItOWMyYzhjZDY3OGUxIiwiZXhwIjoxNTQ1OTUzMDI2LCJpZGVudGl0eSI6InJhbW9uMyIsImZyZXNoIjpmYWxzZSwidHlwZSI6ImFjY2VzcyJ9.X80zuLw7bUH3V1PEwbteG6RARR1NZYcJJsMLTtDLcj4",
                "Content-Type": "application/json"
            }
        }).then(response => {
            this.setState({ sucursales: response.data.sucursales });
            console.log(this.state.sucursales);
        }).catch(function (error) {
            console.log(error.response);
        });

        axios.get("http://127.0.0.1:3001/api/v1/met_trans", {
            headers: {
                Authorization:
                "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE1NDQ2NTcwMjYsIm5iZiI6MTU0NDY1NzAyNiwianRpIjoiYTNhOTM3N2QtOTVkYS00YTc3LTkyOGItOWMyYzhjZDY3OGUxIiwiZXhwIjoxNTQ1OTUzMDI2LCJpZGVudGl0eSI6InJhbW9uMyIsImZyZXNoIjpmYWxzZSwidHlwZSI6ImFjY2VzcyJ9.X80zuLw7bUH3V1PEwbteG6RARR1NZYcJJsMLTtDLcj4",
                "Content-Type": "application/json"
            }
        }).then(response => {
            this.setState({ met_trans: response.data.m_trans });
            console.log(this.state.met_trans);
        }).catch(function (error) {
            console.log(error.response);
        });
    }

    handleFormSubmit = (event) => {
        event.preventDefault();
        const Suc_Origen = parseInt(event.target.elements.Origen.value);
        const Suc_Dest = parseInt(event.target.elements.Destino.value);
        const M_Trans = parseInt(event.target.elements.M_Trans.value);
        const Tiempo = parseInt(event.target.elements.Tiempo.value);

        let datas = JSON.stringify({
            origen: Suc_Origen,
            destino: Suc_Dest,
            m_trans: M_Trans,
            tiempo:Tiempo
        })

        console.log(datas);

        axios.post('http://localhost:3001/api/v1/rutas', datas, {
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
    onGetDestinos() {
        console.log(this.refs.Origen.value)
        axios.get('http://localhost:3001/api/v1/sucursales',{
            headers: {
                'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE1NDQ2NTcwMjYsIm5iZiI6MTU0NDY1NzAyNiwianRpIjoiYTNhOTM3N2QtOTVkYS00YTc3LTkyOGItOWMyYzhjZDY3OGUxIiwiZXhwIjoxNTQ1OTUzMDI2LCJpZGVudGl0eSI6InJhbW9uMyIsImZyZXNoIjpmYWxzZSwidHlwZSI6ImFjY2VzcyJ9.X80zuLw7bUH3V1PEwbteG6RARR1NZYcJJsMLTtDLcj4',
                'Content-Type': 'application/json'
            }
        }).then(response => {
            this.setState({ destinos: response.data.sucursales });
            console.log(this.state.destinos)
        }).catch(function (error) {
            console.log(error.response);
        });

        axios.get('http://localhost:3001/api/v1/sucursal/' + this.refs.Origen.value, {
            headers: {
                'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE1NDQ2NTcwMjYsIm5iZiI6MTU0NDY1NzAyNiwianRpIjoiYTNhOTM3N2QtOTVkYS00YTc3LTkyOGItOWMyYzhjZDY3OGUxIiwiZXhwIjoxNTQ1OTUzMDI2LCJpZGVudGl0eSI6InJhbW9uMyIsImZyZXNoIjpmYWxzZSwidHlwZSI6ImFjY2VzcyJ9.X80zuLw7bUH3V1PEwbteG6RARR1NZYcJJsMLTtDLcj4',
                'Content-Type': 'application/json'
            }
        }).then(response => {
            this.setState({ dest: response.data.sucursal });
            console.log(this.state.dest)
        }).catch(function (error) {
            console.log(error.response);
        });
    }
    render() {
        const columns = [{
            Header: '#',
            Cell: props => {
                return (
                    <Link to={{
                        pathname: "/admin/ruta/" + props.original.id,
                        state: {
                            rutaID: props.original.id,
                        }
                    }} className="btn btn-info">{props.original.id}</Link>
                )
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
            Header: 'Sucursal Origen',
            accessor: 'suc_origen',
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
            Header: 'Sucursal Destino',
            accessor: 'suc_dest',
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
            Header: 'Tipo Transporte',
            accessor: 'tipo_trans',
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
            Header: 'Duracion',
            accessor: 'tiempo',
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
            Header: 'Action',
            Cell: props => {
                return (
                    <button className="btn btn-danger"
                        onClick={() => {
                            axios.delete('http://localhost:3001/api/v1/ruta/' + props.original.id, {
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
        var sucursales = this.state.sucursales.map(function (av) {
            return <option value={av.cod} key={av.cod}> {av.nombre} </option>
        })
        var transporte = this.state.met_trans.map(function (trans) {
            return <option value={trans.id} key={trans.cod}> {trans.tipo} </option>
        })
        var prueba = this.state.dest.cod;
        var destino = this.state.destinos.map(function (des) {
            if (des.cod !== prueba) {
                return <option value={des.cod} key={des.cod}> {des.nombre} </option>
            }
        })
        return <div className="wrapper" keywords="clientes">
            <Sidemenu />

            <div className="container-fluid m-0 p-0">
              {/* <MenuAdmin/> */}

              <div className="m-2 w-100">
                <h2 className="text-center">SisLogUCAB Rutas DataTable</h2>

                <ReactTable 
                    className="mr-4" 
                    columns={columns} 
                    data={this.state.rutas} 
                    defaultPageSize={10} 
                    filterable={false} 
                    noDataText="No Posee Registro Alguno!" 
                    showPageSizeOptions={false} />
              </div>

              <div className="m-3">
                <form onSubmit={event => this.handleFormSubmit(event)}>
                  <div className="form-row">
                    <div className="form-group col-md-3">
                      <label htmlFor="Origen">Sucursal Origen</label>
                      <select ref="Origen" className="form-control" name="Origen" onChange={(e) => { this.onGetDestinos(); }}>
                        <option>Seleccione...</option>
                        {sucursales}
                      </select>
                    </div>
                    <div className="form-group col-md-3">
                      <label htmlFor="Destino">Sucursal Destino</label>
                      <select className="form-control" name="Destino">
                        <option>Seleccione...</option>
                        {destino}
                      </select>
                    </div>
                    <div className="form-group col-md-3">
                      <label htmlFor="M_Trans"> Metodo Transporte</label>
                      <select className="form-control" name="M_Trans">
                        <option>Seleccione...</option>
                        {transporte}
                      </select>
                    </div>
                    <div className="form-group col-md-3">
                        <label htmlFor="Tiempo"> Tiempo Envio</label>
                        <input type="number" name="Tiempo" className="form-control"/>
                    </div>
                  </div>

                  <button type="submit" className="btn btn-primary">
                    Create
                  </button>
                </form>
              </div>
            </div>
          </div>;
    }
}