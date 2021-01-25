import { applyMiddleware, combineReducers, createStore } from "redux";
import loginReducer from "./loginReducer";
import searchReducer from "./searchReducer";
import createSagaMiddleware from "redux-saga";
import watchFetchQuotes from "./sagas";

const reducers = combineReducers({
  pageLogin: loginReducer,
  pageSearchFlights: searchReducer,
});

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  reducers,
  applyMiddleware(sagaMiddleware),
);

sagaMiddleware.run(watchFetchQuotes);

export default store;
