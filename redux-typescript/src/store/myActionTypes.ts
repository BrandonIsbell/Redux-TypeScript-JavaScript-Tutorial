import { Joke } from "./myTypes";

export const API_SUCCESS = "API_SUCCESS";
export const API_FAILURE = "API_FAILURE";

interface GetJokeSuccessAction {
    type: typeof API_SUCCESS,
    joke: Joke,
    number: number
};

interface GetJokeFailureAction {
    type: typeof API_FAILURE,
    number: number
};

export type JokeActionTypes = GetJokeSuccessAction | GetJokeFailureAction;