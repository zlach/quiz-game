import axios from 'axios';
import {
    GET_GAMES,
    GAMES_ERROR
} from '../actions/types';
// import { setAlert } from './alert';
import setAuthToken from '../utils/setAuthToken';

// Load user
export const getGames = () => async dispatch => {
    if (localStorage.token) {
        setAuthToken(localStorage.token);
        try {
            const res = await axios.get('/api/games');
            dispatch({
                type: GET_GAMES,
                payload: res.data
            });
        } catch (err) {
            dispatch({
                type: GAMES_ERROR
            });
        }
    }
}

export const postNewGame = (formData) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }
    let body = JSON.stringify(formData);
    try {
        const res = await axios.post('/api/games', body, config);
        dispatch({
            type: GET_GAMES,
            payload: res.data
        });
    } catch (err) {
        console.error(err.message)
    }

}