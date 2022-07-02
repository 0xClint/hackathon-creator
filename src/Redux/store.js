import { combineReducers, createStore } from "redux";
import { FormReducer } from "./reducers";

const reducer = combineReducers({
  challenges: FormReducer,
});

const initialState = {};

const store = createStore(reducer, initialState);

export default store;
