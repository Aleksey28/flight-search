import { connect } from "react-redux";
import { addToFavoritesAC, deleteFromFavoritesAC, selectDateDepartureAC } from "../../redux/searchReducer";
import SearchFlights from "./SearchFlights";
import { fetchQuotesAC } from "../../redux/sagas";

const mapStateToProps = (state) => {
  return {
    pageSearchFlights: state.pageSearchFlights,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    selectDateDeparture: (value) => {
      dispatch(selectDateDepartureAC(value));
    },
    addToFavorites: (flightId) => {
      dispatch(addToFavoritesAC(flightId));
    },
    deleteFromFavorites: (flightId) => {
      dispatch(deleteFromFavoritesAC(flightId));
    },
    fetchQuotes: (date) => {
      dispatch(fetchQuotesAC(date))
    }
  };
};

const SearchFlightsContainer = connect(mapStateToProps, mapDispatchToProps)(SearchFlights);

export default SearchFlightsContainer;
