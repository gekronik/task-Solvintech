import { usersAPI } from "../../api/users-api.js";


export const REQUEST_USERS = 'REQUEST_USERS'
export const SET_LOADING_STATE = 'SET_LOADING_STATE'
export const REQUEST_USERS_ERROR = 'REQUEST_USERS_ERROR'

export const requestUsers = (users) => {
    return {
        type: REQUEST_USERS,
        payload: users
    }
}


export const setLoadingState = (isLoading) => {
    return {
        type: SET_LOADING_STATE,
        payload: isLoading
    }
}
export const requestUsersError = (error) => {
    return {
        type: REQUEST_USERS_ERROR,
        payload: error
    }


}


export const fetchUsers = () => async (dispatch) => {

    try {
        dispatch(setLoadingState(true))
        const response = await usersAPI.getUsers()
        dispatch(requestUsers(response.data))
    }   catch (error) {
        dispatch(requestUsersError(error.message))
    }   finally {
        dispatch(setLoadingState(false))
    }

}