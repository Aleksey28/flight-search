import { combineReducers, createStore } from "redux";
import loginReducer from "./loginReducer";

const reducers = combineReducers({
  pageLogin: loginReducer,
});

const store = createStore(reducers);

export default store;
