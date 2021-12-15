import { createStore, compose, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import reducers from "./reducers";
import initialState from "./initialState";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
	reducers,
	initialState,
	composeEnhancers(applyMiddleware(thunkMiddleware))
);

export default store;
