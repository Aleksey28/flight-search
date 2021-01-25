import { connect } from "react-redux";
import { addToFavoritesAC, deleteFromFavoritesAC, selectDateDepartureAC } from "../../redux/searchReducer";
import SearchFlights from "./SearchFlights";

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
  };
};

const SearchFlightsContainer = connect(mapStateToProps, mapDispatchToProps)(SearchFlights);

export default SearchFlightsContainer;
