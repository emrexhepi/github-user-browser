import reducer from './userDetails';
import * as actionTypes from "../actions";

describe('[userDetails-reducer]',()=>{

    it('has a default state', ()=>{
        const action = {
            type: null,
        }
        expect(reducer(undefined, action)).toEqual({
            loading : false,
            details : {}
        });
    });

    it('changes loading to true', ()=>{
        const action = {
            type: actionTypes.LOADING,
            loading: true
        }
        expect(reducer(undefined, action)).toEqual({
            loading : true,
            details : {}
        });
    });

    it('updates details', ()=>{
        const action = {
            type: actionTypes.RECEIVE_USER_DETAILS,
            payload: {
                detail_1 : "detail_1",
                detail_2 : "detail_2",
                detail_3 : "detail_3",
            }
        }
        expect(reducer(undefined, action)).toEqual({
            loading : false,
            details : {
                detail_1 : "detail_1",
                detail_2 : "detail_2",
                detail_3 : "detail_3",
            }
        });
    });

})