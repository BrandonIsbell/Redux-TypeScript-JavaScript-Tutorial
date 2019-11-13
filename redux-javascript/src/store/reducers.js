import { API_SUCCESS, API_FAILURE } from "./myActionTypes";

const initialState = {
  successfulRequests: 0,
  unSuccessfulRequests: 0,
  jokes: []
};

export function jokesReducer(state = initialState, action) {
  //successful action called
  if (action.type === API_SUCCESS) {
    let totalSuccess = state.successfulRequests + action.number;
    return {
      ...state,
      successfulRequests: totalSuccess,
      jokes: [...state.jokes, action.joke]
    };
  }
  //failure action called
  else if (action.type === API_FAILURE) {
    let totalFailures = state.unSuccessfulRequests + action.number;
    return { ...state, unSuccessfulRequests: totalFailures };
  }
  return state;
}
