import { createStore, compose, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { jokesReducer } from "./reducers";

const rootReducer = combineReducers({
  jokes: jokesReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function configureStore() {
  return createStore(
    rootReducer,
    compose(applyMiddleware(thunk), composeEnhancers())
  );
}
