import * as ActionType from "../actions/ActionType";

// Initial State
const initialState = {
  userData: {}
};

// Redux: User Reducer
const userReducer = (state = initialState, action) => {
  console.log("userReducer : " + JSON.stringify(action));
  switch (action.type) {
    case ActionType.GET_USER_DATA: {
      return {
        ...state,
        userData: null,
        isFetching: true
      };
    }
    case ActionType.GET_USER_DATA_SUCCESS: {
      return {
        ...state,
        userData: action.responseBody,
        isFetching: false
      };
    }
    case ActionType.GET_USER_DATA_ERROR: {
      return {
        ...state,
        error: action.error,
        isFetching: false
      };
    }
    default: {
      return state;
    }
  }
};

// Exports
export default userReducer;
