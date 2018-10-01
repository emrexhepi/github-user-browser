import * as actionTypes from "../actions";

const initialState = {
    loading : false,
    users : [],
    loadingMore : false,
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.RECEIVE_USERS:
            return {
                ...state,
                loading: false,
                users: state.users.concat(action.payload)
            };
        case actionTypes.LOADING:
            return {
                ...state,
                loading: action.loading
            }
        case actionTypes.LOADING_MORE:
            return {
                ...state,
                loadingMore: action.payload
            }
        default:
            return state;
    }
}

export default reducer;