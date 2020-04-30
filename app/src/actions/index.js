import axios from 'axios';

export const FETCHING_CLIENT_IP_START = 'FETCHING_CLIENT_IP_START';
export const FETCHING_CLIENT_IP_SUCCESS = 'FETCHING_CLIENT_IP_SUCCESS';
export const FETCHING_CLIENT_IP_FAILURE = 'FETCHING_CLIENT_IP_FAILURE';

export const getClientIP = () => dispatch => {
    dispatch({
        type: FETCHING_CLIENT_IP_START
    });

    axios
        .get('https://api.kwelo.com/v1/network/ip-address/my?format=json')
        .then(response => {
            console.log(response);
            dispatch({
                type: FETCHING_CLIENT_IP_SUCCESS,
                payload: response.data.data.ip_address
            });
        })
        .catch(error => {
            console.log(error);
            dispatch({
                type: FETCHING_CLIENT_IP_FAILURE,
                payload: `${error.statusText} with response code ${error.status}`
            });
        });
}