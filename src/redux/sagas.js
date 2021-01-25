import { call, put, takeEvery } from "redux-saga/effects";
import { quotesFetchFailedAC, quotesFetchSucceededAC } from "./searchReducer";

const FETCH_QUOTES = "FETCH_QUOTES";

const fetchQuotesAC = (data) => {
  return {
    type: FETCH_QUOTES,
    data,
  };
};

function* fetchQuotes(action) {
  try {
    const { date, departureAirport, arrivalAirport } = action.data;
    const day = ("0" + date.getDate()).slice(-2);
    const month = ("0" + date.getMonth() + 1).slice(-2);
    const year = date.getFullYear();
    const baseUrl = "https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com";
    const relativeUrl = "apiservices/browsequotes/v1.0/US/RUB/en-US";
    const data = yield call(() => {
      return fetch(
        `${baseUrl}/${relativeUrl}/${departureAirport}-sky/${arrivalAirport}-sky/${year}-${month}-${day}`,
        {
          headers: {
            "Content-Type": "application/json",
            "x-rapidapi-key": "c40aedf4a1msh7dcf39a26f3410fp113695jsn074711d99e11",
            "x-rapidapi-host": "skyscanner-skyscanner-flight-search-v1.p.rapidapi.com",
          },
        },
      ).then(res => res.json());
    });

    yield put(quotesFetchSucceededAC(data));
  } catch (error) {
    yield put(quotesFetchFailedAC(error));
  }
}

function* watchFetchQuotes() {
  yield takeEvery(FETCH_QUOTES, fetchQuotes);
}

export default watchFetchQuotes;

export {
  fetchQuotesAC,
};
