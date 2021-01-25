import { combineReducers, createStore } from "redux";
import loginReducer from "./loginReducer";
import searchReducer from "./searchReducer";

const reducers = combineReducers({
  pageLogin: loginReducer,
  pageSearchFlights: searchReducer,
});

const store = createStore(reducers);

export default store;
