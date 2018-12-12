import React, { Component } from 'react';
import Sidemenu from '../../containers/Sidemenu.jsx';
//import MenuAdmin from '../../containers/MenuAdmin';
import axios from 'axios';
import '../../css/account.css';
import ReactTable from 'react-table';
import "react-table/react-table.css";

export default class Usuarios extends Component{
    constructor(props) {
        super(props);
        this.state = {
            users: []
        }
    }
    componentDidMount() {
        axios.get("http://127.0.0.1:3001/api/v1/users", {
            headers: {
                Authorization:
                "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE1NDQ1NDg3MDUsIm5iZiI6MTU0NDU0ODcwNSwianRpIjoiNzM3ZTdlZjEtZDAyOS00NzliLWJhNmQtY2YxMGQwYjQwMTY0IiwiZXhwIjoxNTQ0NTkzNzA1LCJpZGVudGl0eSI6ImlzYWFjIiwiZnJlc2giOmZhbHNlLCJ0eXBlIjoiYWNjZXNzIn0.kWtFuLIo0XHBdbrQffgXesHm7XLaheWJLcgHPYN3BlY",
                "Content-Type": "application/json"
            }
        }).then(response => {
            this.setState({ users: response.data.users });
            console.log(this.state.users);
        }).catch(function (error) {
            console.log(error.response);
        });
    }
    render(){
        const columns = [{
            Header: '#',
            Cell: props => {
                return (
                    <button  className="btn btn-info">{props.original.id}</button>
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
            Header: 'Username',
            accessor: 'username',
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
            Header: 'Rol',
            accessor: 'fk_rol',
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
        ]
        return(
            <div className="wrapper" keywords="clientes">
                <Sidemenu />

                <div className="container-fluid m-0 p-0">
                    {/* <MenuAdmin/> */}

                    <div className="m-2 w-100">
                        <h2 className="text-center"> SisLogUCAB Usuarios DataTable</h2>

                        <ReactTable className="mr-4"
                            columns={columns}
                            data={this.state.users}
                            defaultPageSize={10}
                            filterable={false}
                            noDataText="No Posee Registro Alguno!"
                            showPageSizeOptions={false}
                        ></ReactTable>
                    </div>

                </div>
            </div>
        );
    }
}