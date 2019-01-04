import axios from 'axios'
import * as actionTypes from './actionTypes.jsx';

export const authStart = () => {
    return {
        type: actionTypes.AUTH_START
    }
}

export const authSuccess = token => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        token: token
    }
}

export const authFail = error => {
    return{
        type: actionTypes.AUTH_FAIL,
        error: error
    }
}

export const logout = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('expirationDate');
    return {
        type: actionTypes.AUTH_LOGOUT
    }
}

export const checkAuthTimeout = expirationTime => {
     return dispatch =>  {
        setTimeout(() => {
            dispatch(logout())
        }, expirationTime * 1000);
     }
}

export const authLogin = (data) => {
    return dispatch => {
        dispatch(authStart());
        axios.post("http://127.0.0.1:3001/api/v1/cliente/login",{
            data
        }).then(response => {
            const token = response.data.token;
            const expirationDate = new Date(new Date().getTime() + 3600 * 1000);
            localStorage.setItem('token', token);
            localStorage.setItem('expirationDate', expirationDate);
            dispatch(authSuccess(token));
            dispatch(checkAuthTimeout(3600));
            this.props.history.push("/");
        }).catch(error => {
            dispatch(authFail(error))
            console.log(error.response)
        })


    }
}

export const authSingup = (username, email ,password) => {
    return dispatch => {
        dispatch(authStart());
        axios.post("http://127.0.0.1:3001/api/v1/cliente/registro", {
            username: username,
            password: password,
            email: email
        }).then(response => {
            const token = response.data.key;
            const expirationDate = new Date(new Date().getTime() + 3600 * 1000);
            localStorage.setItem('token', token);
            localStorage.setItem('expirationDate', expirationDate);
            dispatch(authSuccess(token));
            dispatch(checkAuthTimeout(3600));
        }).catch(error => {
            dispatch(authFail(error))
        })
    }
}

export const authCheckState = () => {
    return dispatch => {
        const token = localStorage.getItem('token');
        if(token === undefined){
            dispatch(logout());
        }else {
            const expirationDate = new Date(localStorage.getItem('expirationDate'));
            if (expirationDate <= new Date() ){
                dispatch(logout());
            }else {
                dispatch(authSuccess(token));
                dispatch(checkAuthTimeout( (expirationDate.getTime() - new Date().getTime()) / 1000 ))
            }
        }
    }
}

