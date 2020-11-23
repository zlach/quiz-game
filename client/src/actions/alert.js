// import { v4 as uuidv4 } from 'uuid';
import { SET_ALERT, REMOVE_ALERT } from './types';

export const setAlert = (errType) => dispatch => {
    dispatch({
        type: SET_ALERT,
        payload: { errType }
    })
}

export const removeAlert = () => dispatch =>{
    dispatch({
        type: REMOVE_ALERT
    })
}