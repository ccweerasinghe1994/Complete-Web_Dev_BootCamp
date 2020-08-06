import {SET_SEARCH_TEXT_FIELD} from "./actions";


const initialState = {
    searchFelid: ''
}


export const reducer = (state=initialState,action={})=>{
    switch (action.type) {
        case SET_SEARCH_TEXT_FIELD:
            return {
                ...state,
                searchFelid: action.payload
            }
        default:
            return state
    }
}