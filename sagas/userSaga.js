// Imports: Dependencies
import { takeLatest, put, call } from "redux-saga/effects";
import * as ActionType from "../actions/ActionType";
// Increase Counter Async
function* getUserDataAsync() {
  const response = yield call(
    fetch,
    "http://dummy.restapiexample.com/api/v1/employee/1"
  );
  const responseBody = yield response.json();
  try {
    // Dispatch Action To Redux Store
    yield put({ type: ActionType.GET_USER_DATA_SUCCESS, responseBody });
  } catch (error) {
    // Dispatch Error
    yield put({ type: ActionType.GET_USER_DATA_ERROR, error });
  }
}

// Generator: Watch Increase Counter
export function* watchUserData() {
  // Take Last Action
  yield takeLatest(ActionType.GET_USER_DATA, getUserDataAsync);
}
