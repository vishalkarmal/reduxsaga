import * as ActionTypes from "./ActionType";

export const getUserData = () => ({
  type: ActionTypes.GET_USER_DATA,
});

export const getUserDataSuccess = () => ({
  type: ActionTypes.GET_USER_DATA_SUCCESS,
});

export const getUserDataError = () => ({
  type: ActionTypes.GET_USER_DATA_ERROR,
});
