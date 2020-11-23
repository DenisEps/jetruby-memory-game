import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";

import { gameReducer } from "./reducer";

const middlewares = [thunk];

if (process.env.NODE_ENV === "development") {
  middlewares.push(logger);
}

const preloadedState = window.localStorage.getItem("redux") ?? "{}";

const store = createStore(
  combineReducers({
    game: gameReducer
  }),
  JSON.parse(preloadedState),
  applyMiddleware(...middlewares)
);

// store.subscribe(() => {
//   window.localStorage.setItem("redux", JSON.stringify(store.getState()));
// });

export default store;
