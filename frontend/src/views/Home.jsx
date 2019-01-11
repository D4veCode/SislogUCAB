import React, { Component } from 'react';
import Menu from '../components/Menu.jsx';
import { connect } from 'react-redux';

class Home extends Component {

    render() {
        console.log(this.props);
        return (
            <div>
                <Menu {...this.props}/>
                <section className="banner-area" id="home">
                    <div className="container">
                        <div className="row fullscreen d-flex align-items-center justify-content-center">
                            <div className="banner-content col-lg-7">
                                <h1>
                                    Bienvenido SisLogUCAB
							</h1>
                                <p className="pt-20 pb-20">
                                    Puerta a Puerta
							</p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        isAuthenticated: state.token !== null,
        rol: state.rol !== null,
        user: state.rol !== null
    }
}

export default connect(mapStateToProps)(Home);