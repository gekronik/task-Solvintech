import {
    REQUEST_USERS, REQUEST_USERS_ERROR,
    SET_LOADING_STATE,
} from "../actions/users-actions.js";


const initialState = {
    users: [],
    isLoading: false,
    error: null
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case REQUEST_USERS:
            return {
                ...state,
                users: [...state.users, ...action.payload],
            }
        case SET_LOADING_STATE:
            return {
                ...state,
                isLoading: action.payload
            }
        case REQUEST_USERS_ERROR:
            return {
                ...state,
                isLoading: false,
                error: action.payload

            }
        default:
            return state
    }
}

export default usersReducer
