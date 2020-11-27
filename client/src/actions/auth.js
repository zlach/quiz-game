import axios from 'axios';
import {
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    USER_LOADED,
    AUTH_ERROR,
    LOGIN_FAIL,
    LOGIN_SUCCESS,
    LOGOUT
} from '../actions/types';
import { setAlert } from './alert';
import setAuthToken from '../utils/setAuthToken';

// Load user
export const loadUser = () => async dispatch => {
    if (localStorage.token) {
        setAuthToken(localStorage.token);
        try {
            const res = await axios.get('/api/auth');
            dispatch({
                type: USER_LOADED,
                payload: res.data
            });
        } catch (err) {
            const errType = err.response.data.type;
            dispatch({
                type: AUTH_ERROR,
                payload: errType
            });
        }
    }
}

// register user
export const register = ({ code, email, password }) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }
    const body = JSON.stringify({ code, email, password });

    try {
        const res = await axios.post('/api/managers', body, config);

        dispatch({
            type: REGISTER_SUCCESS,
            payload: res.data
        });
        dispatch(loadUser());
    } catch (err) {
        const errType = err.response.data.type;
        if (errType) {
            dispatch(setAlert(errType))
        }
        dispatch({
            type: REGISTER_FAIL
        });
    }
}

// log in user
export const login = (email, password) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }
    const body = JSON.stringify({ email, password });

    try {
        const res = await axios.post('/api/auth', body, config);

        dispatch({
            type: LOGIN_SUCCESS,
            payload: res.data
        });
        dispatch(loadUser());
    } catch (err) {
        const errType = err.response.data.type;
        if (errType) {
            dispatch(setAlert(errType))
        }
        dispatch({
            type: LOGIN_FAIL
        });
    }
}

// logout
export const logout = () => dispatch => {
    dispatch({ type: LOGOUT });
}