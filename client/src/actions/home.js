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