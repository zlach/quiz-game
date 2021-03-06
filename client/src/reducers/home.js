import {
    GET_GAMES,
    GAMES_ERROR
} from '../actions/types';

const initialState = {
    games: [],
    loading: true,
    error: {}
}

export default function home(state = initialState, action){
    const {type, payload} = action;
    switch(type){
        case GET_GAMES:
            return {
                ...state,
                games: payload,
                loading: false
            };
        case GAMES_ERROR:
            return {
                ...state,
                error: payload,
                loading: false
            };
        default:
            return state;
    }
}