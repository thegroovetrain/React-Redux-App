import {
    FETCHING_CLIENT_IP_START,
    FETCHING_CLIENT_IP_SUCCESS,
    FETCHING_CLIENT_IP_FAILURE
} from '../actions';

const initialState = {
    clientIP: '0.0.0.0',
    fetchComplete: false,
    isFetching: false,
    error: ''
}

export const reducer = (state = initialState, action) => {

    switch (action.type) {

        case FETCHING_CLIENT_IP_START:
            return {
                ...state,
                isFetching: true
            };

        case FETCHING_CLIENT_IP_SUCCESS:
            return {
                ...state,
                fetchComplete: true,
                isFetching: false,
                clientIP: action.payload
            };

        case FETCHING_CLIENT_IP_FAILURE:
            return {
                ...state,
                isFetching: false,
                error: action.payload
            };

        default:
            return state;

    }

}