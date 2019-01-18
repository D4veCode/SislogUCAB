import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from "react-redux";
import * as actions from "../../store/actions/auth.jsx";

class Sidemenu extends Component {
    onRefrescar(e) {
        window.location.reload();
    }
    onLogout() {
        this.props.logout();

        //console.log(this.props);

        //console.log('entre al if');
        this.props.history.push('/');
    }
    render() {
        return <nav id="sidebar">
            <div className="sidebar-header">
                <h3>SisLogUCAB</h3>
                <br />
                <h3>Usuario: <strong>{localStorage.getItem("username")}</strong></h3>
                <br/>
                <h3 className="text-center">Reportes</h3>
            </div>

            <ul className="list-unstyled components">
                <li className="active">
                    <Link to="/admin/reporteuno">Reporte 1</Link>
                </li>
                <li className="active">
                    <Link to="/admin/reportedos">Reporte 2</Link>
                </li>
                <li className="active">
                    <Link to="/admin/reportetres">Reporte 3</Link>
                </li>
                <li className="active">
                    <Link to="/admin/reportecuatro">Reporte 4</Link>
                </li>
                <li className="active">
                    <Link to="/admin/reportecinco">Reporte 5</Link>
                </li>
                <li className="active">
                    <Link to="/admin/reporteseis">Reporte 6</Link>
                </li>
                <li className="active">
                    <Link to="/admin/reportesiete">Reporte 7</Link>
                </li>
                <li className="active">
                    <Link to="/admin/reporteocho">Reporte 8</Link>
                </li>
                <li className="active">
                    <Link to="/admin/reportenueve">Reporte 9</Link>
                </li>
                <li className="active">
                    <Link to="/admin/reportediez">Reporte 10</Link>
                </li>
                <li className="active">
                    <Link to="/admin/reporteonce">Reporte 11</Link>
                </li>
                <li className="active">
                    <Link to="/admin/reportedoce">Reporte 12</Link>
                </li>
                <li className="active">
                    <Link to="/admin/reportetrece">Reporte 13</Link>
                </li>
                <li className="active">
                    <Link to="/admin/reportecatorce">Reporte 14</Link>
                </li>
                <li className="active">
                    <Link to="/admin/reportequince">Reporte 15</Link>
                </li>
                <li className="active">
                    <Link to="/admin/reportedieciseis">Reporte 16</Link>
                </li>
                <li className="active">
                    <Link to="/admin/reportediecisiete">Reporte 17</Link>
                </li>
                <li className="active">
                    <Link to="/admin/reportedieciocho">Reporte 18</Link>
                </li>
                <li className="active">
                    <Link to="/admin/reportediecinueve">Reporte 19</Link>
                </li>
                <li className="active">
                    <Link to="/admin/reporteveinte">Reporte 20</Link>
                </li>
                <li className="active">
                    <Link to="/admin/reporteveintiuno">Reporte 21</Link>
                </li>
                <li className="active">
                    <Link to="/admin/reporteveintidos">Reporte 22</Link>
                </li>
                <li className="active">
                    <Link to="/admin/reporteveintitres">Reporte 23</Link>
                </li>
                <li className="active">
                    <Link to="/admin/reporteveinticuatro">Reporte 24</Link>
                </li>
                <li className="active">
                    <Link to="/admin/reporteveinticinco">Reporte 25</Link>
                </li>
                <li className="active">
                    <Link to="/admin/reporteveintiseis">Reporte 26</Link>
                </li>
                <li className="active">
                    <Link to="/admin/reporteveintisiete">Reporte 27</Link>
                </li>
                <li className="active">
                    <Link to="/admin/reporteveintiocho">Reporte 28</Link>
                </li>
                <li className="active">
                    <Link to="/admin/reporteveintinueve">Reporte 29</Link>
                </li>
                <li className="active">
                    <Link to="/admin/reportetreinta">Reporte 30</Link>
                </li>
               
                <li className="active">
                    <Link to="/admin" onClick={e => this.onRefrescar(e)}>Regresar</Link>
                </li>
                <br />

                <li className="active">
                    <button onClick={e => this.onLogout(e)}>
                        Cerrar Sesion
                </button>
                </li>

            </ul>
        </nav>;
    }
}

const mapDispatchToProps = dispatch => {
    return {
        logout: () => dispatch(actions.logout())
    }
}

export default connect(null, mapDispatchToProps)(Sidemenu);