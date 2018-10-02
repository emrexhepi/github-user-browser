import axios from 'axios';

export const RECEIVE_USERS = "RECEIVE_USERS";
export const RECEIVE_USER_DETAILS = "USER_DETAILS";
export const LOADING = "LOADING";
export const LOADING_MORE = "LOADING_MORE";

const apiUrl = 'https://api.github.com/users'

export const receiveUserDetails = (id, dispatch) => {

    dispatch({
        type: LOADING,
        payload: true
    })

    const url = `${apiUrl}/${id}`;
    
    axios.get(url).then((response)=>{
        dispatch({
            type: RECEIVE_USER_DETAILS,
            payload: response.data
        })
    }).catch((error)=> {
        throw(error);
    });
}

export const receiveUsers = (dispatch) => {
    dispatch({
        type: LOADING,
        loading: true
    });
    
    const url = `${apiUrl}?since=0&per_page=12`;
    axios.get(url).then((response)=>{
        dispatch({
            type: RECEIVE_USERS,
            payload: response.data
        })
    }).catch((error)=> {
        throw(error);
    });
}


export const receiveMoreUsers = (dispatch, currentUsersLength) => {
    dispatch({
        type: LOADING_MORE,
        payload: true
    });

    const since = currentUsersLength - 1;
    const url = `${apiUrl}?since=${since}0&per_page=12`;

    axios.get(url).then((response)=>{

        dispatch({
            type: RECEIVE_USERS,
            payload: response.data
        })

        dispatch({
            type: LOADING_MORE,
            payload: false
        });
    }).catch((error)=> {
        throw(error);
    });
}