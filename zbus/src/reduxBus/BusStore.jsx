import { createStore, applyMiddleware } from "redux";
import { makePortReducer } from "./reducers";
import thunk from "redux-thunk";

export const store = createStore(makePortReducer, applyMiddleware(thunk));
