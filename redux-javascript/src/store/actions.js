//imports
import { API_SUCCESS, API_FAILURE } from "./myActionTypes";
import * as apiService from "../services/apiService";

//Actions that change the state
export function successfulApiCall(joke) {
  return {
    type: API_SUCCESS,
    joke: joke,
    number: 1
  };
}

export function failedApiCall() {
  return {
    type: API_FAILURE,
    number: 1
  };
}

//Thunk Action that calls the apiService and dispatches
//relevant action.
export function fetchJoke() {
  return function(dispatch) {
    return apiService
      .getJoke()
      .then(result => dispatch(successfulApiCall(result)))
      .catch(e=>dispatch(failedApiCall()));
  };
}