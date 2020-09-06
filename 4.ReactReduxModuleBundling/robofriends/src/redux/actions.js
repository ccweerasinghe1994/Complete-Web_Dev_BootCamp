export const SET_SEARCH_TEXT_FIELD = 'SET_SEARCH_TEXT_FIELD';

export const REQUEST_ROBOTS_PENDING = 'REQUEST_ROBOTS_PENDING';
export const REQUEST_ROBOTS_SUCCESS = 'REQUEST_ROBOTS_SUCCESS';
export const REQUEST_ROBOTS_ERROR = 'REQUEST_ROBOTS_ERROR';

export const setSearchField = (text) => ({
    type: SET_SEARCH_TEXT_FIELD,
    payload: text
})

export const requestRobots = () => (dispatch) => {
    dispatch({
        type: REQUEST_ROBOTS_PENDING
    });
    fetch("https://jsonplaceholder.typicode.com/users",{})
        .then((response) => response.json())
        .then(data => dispatch({
                type: REQUEST_ROBOTS_SUCCESS,
                payload: data
            })
        ).catch(error => dispatch({
        type: REQUEST_ROBOTS_ERROR,
        payload: error
    }))
}