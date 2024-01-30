import axios from "axios"
import { FETCH_USERS_FAILURE, FETCH_USERS_REQUST, FETCH_USERS_SUCCESS } from "./actionsTypes"

export const fetchUsersRequest = () => {
    return {
        type: FETCH_USERS_REQUST
    }
}

export const fetchUsersSuccess = (users) => {
    return {
        type : FETCH_USERS_SUCCESS,
        payload : {
            users : users
        }
    }
}

export const fetchUsersFailure = (error) => {
    return {
        type : FETCH_USERS_FAILURE,
        payload : {
            error : error
        }
    }
}

export const fetchUsers = () => {
    return function(dispatch,getState){
        dispatch(fetchUsersRequest())

        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(response => dispatch(fetchUsersSuccess(response.data)))
        .catch(error => dispatch(fetchUsersFailure(error.message)))
    }
}