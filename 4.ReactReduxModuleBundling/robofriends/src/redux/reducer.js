import {SET_SEARCH_TEXT_FIELD, REQUEST_ROBOTS_ERROR, REQUEST_ROBOTS_SUCCESS, REQUEST_ROBOTS_PENDING} from "./actions";


const initialState = {
    searchFelid: ''
}


export const searchFieldReducer = (state = initialState, action = {}) => {
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

const initialRobotsState = {
    isPending: false,
    robots: [],
    error: ''
}

export const robotsReducer = (state = initialRobotsState, action = {}) => {
    switch (action.type) {
        case REQUEST_ROBOTS_PENDING:
            return{
                ...state,
                isPending: true
            }

        case REQUEST_ROBOTS_SUCCESS:
            return {
                ...state,
                robots: action.payload,
                isPending: false
            }
        case REQUEST_ROBOTS_ERROR:
            return {
                ...state,
                error: action.payload,
                isPending: false
            }
        default:
            return state
    }

}