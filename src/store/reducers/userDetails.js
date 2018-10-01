import * as actionTypes from "../actions";

const initialState = {
    loading : false,
    details : {}
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.RECEIVE_USER_DETAILS:
            return {
                loading: false,
                details: action.payload
            };
        case actionTypes.LOADING:
            return {
                ...state,
                loading: true
            }
        default:
            return state;
    }
}

export default reducer;