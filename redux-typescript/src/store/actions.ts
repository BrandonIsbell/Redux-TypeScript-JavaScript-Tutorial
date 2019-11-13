import { JokeActionTypes, API_SUCCESS, API_FAILURE } from "./myActionTypes";
import { Joke } from "./myTypes";
import { ThunkAction } from "redux-thunk";
import { State } from "./store";
import { Action } from "redux";
import * as apiService from "../services/apiService";

export function successfulApiCall(joke: Joke): JokeActionTypes {
  return {
    type: API_SUCCESS,
    joke: joke,
    number: 1
  };
}

export function failedApiCall(): JokeActionTypes {
  return {
    type: API_FAILURE,
    number: 1
  };
}

export function fetchJoke(): ThunkAction<void, State, null, Action<string>> {
  return function(dispatch) {
    return apiService
      .getJoke()
      .then(result => dispatch(successfulApiCall(result)))
      .catch(e=>dispatch(failedApiCall()));
  };
}
