import { JokeState } from "./myTypes";
import { API_SUCCESS, API_FAILURE, JokeActionTypes } from "./myActionTypes";

const initialState: JokeState = {
  successfulRequests: 0,
  unSuccessfulRequests: 0,
  jokes: []
};

export function jokesReducer(state = initialState, action: JokeActionTypes) {
  if (action.type === API_SUCCESS) {
    let totalSuccess = state.successfulRequests + action.number;
    return {
      ...state,
      successfulRequests: totalSuccess,
      jokes: [ ...state.jokes , action.joke]
    };
  } else if (action.type === API_FAILURE) {
    let totalFailures = state.unSuccessfulRequests + action.number;
    return { ...state, unSuccessfulRequests: totalFailures };
  }
  return state;
}
