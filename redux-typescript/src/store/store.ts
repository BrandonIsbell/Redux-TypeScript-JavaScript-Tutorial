import { createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { combineReducers } from "redux";
import { jokesReducer } from "./reducers";

const rootReducer = combineReducers({
  jokes: jokesReducer
});

export type State = ReturnType<typeof rootReducer>;

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function configureStore() {
  return createStore(
    rootReducer,
    compose(applyMiddleware(thunk), composeEnhancers())
  );
}
