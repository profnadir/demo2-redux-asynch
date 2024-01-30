import { FETCH_USERS_FAILURE, FETCH_USERS_REQUST, FETCH_USERS_SUCCESS } from "./actionsTypes";


const initialState = {
    isLoading : false,
    users : [],
    error : ''
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USERS_REQUST:
      return {
        isLoading : true,
        users : [],
        error : ''
      };

    case FETCH_USERS_SUCCESS:
      return {
        isLoading : false,
        users : action.payload.users,
        error : ''
      };

    case FETCH_USERS_FAILURE:
      return {
        isLoading : false,
        users : [],
        error : action.payload.error
      };

    default:
      return state
  }
};

export default reducer
