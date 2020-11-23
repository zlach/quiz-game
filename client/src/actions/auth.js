import axios from 'axios';
import {
    REGISTER_SUCCESS,
    REGISTER_FAIL
} from '../actions/types';
import {setAlert} from './alert';

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
    } catch (err) {
        const errType = err.response.data.type;
        if (errType) {
            dispatch(setAlert(errType, 'red-alert'))
        }
        dispatch({
            type: REGISTER_FAIL
        });
    }
}