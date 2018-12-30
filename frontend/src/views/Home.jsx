import React, { Component } from 'react';
import Menu from '../components/Menu.jsx';
import { connect } from 'react-redux';
import * as actions from '../store/actions/auth.jsx';

class Home extends Component {
    componentDidMount() {
        this.props.onTryAutoSignup();
    }
    render() {
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

const mapStateProps = state => {
    return {
        isAuthenticated: state.token !== null
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onTryAutoSignup: () => dispatch(actions.authCheckState())
    }
}

export default connect(mapStateProps, mapDispatchToProps)(Home);