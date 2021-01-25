import place1 from "../images/Place1.jpg";
import place2 from "../images/Place2.jpg";
import place3 from "../images/Place3.jpg";
import place4 from "../images/Place4.jpg";
import plane from "../images/plane.svg";

const SELECT_DATE_DEPARTURE = "SELECT_DATE_DEPARTURE";
const ADD_TO_FAVORITES = "ADD_TO_FAVORITES";
const DELETE_FROM_FAVORITES = "DELETE_TO_FAVORITES";
const QUOTES_FETCH_SUCCEEDED = "QUOTES_FETCH_SUCCEEDED";
const QUOTES_FETCH_FAILED = "QUOTES_FETCH_FAILED";

const initialState = {
  departureAirport: "SVO",
  arrivalAirport: "JFK",
  departureDate: new Date(),
  pictures: [
    {
      id: 1,
      url: place1,
    },
    {
      id: 2,
      url: place2,
    },
    {
      id: 3,
      url: place3,
    },
    {
      id: 4,
      url: place4,
    },
    {
      id: 5,
      url: place2,
    },
  ],
  flights: [],
};

const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case SELECT_DATE_DEPARTURE:
      return {
        ...state,
        departureDate: action.date,
      };
    case ADD_TO_FAVORITES:
      return {
        ...state,
        flights: state.flights.map(f => f.id === action.flightId ? { ...f, favorite: true } : f),
      };
    case DELETE_FROM_FAVORITES:
      return {
        ...state,
        flights: state.flights.map(f => f.id === action.flightId ? { ...f, favorite: false } : f),
      };
    case QUOTES_FETCH_SUCCEEDED:
      return {
        ...state,
        flights: action.data.Quotes.map(q => {
          const departureAirport = action.data.Places.find(p => q.OutboundLeg.OriginId === p.PlaceId);
          const arrivalAirport = action.data.Places.find(p => q.OutboundLeg.DestinationId === p.PlaceId);
          const airlineCompany = action.data.Carriers.find(c => q.OutboundLeg.CarrierIds[0] === c.CarrierId);
          const currency = action.data.Currencies[0];
          return {
            id: q.QuoteId,
            picture: plane,
            departureAirport: departureAirport.IataCode,
            departureAirportName: departureAirport.CityName,
            arrivalAirport: arrivalAirport.IataCode,
            arrivalAirportName: arrivalAirport.CityName,
            departureDate: new Date(q.QuoteDateTime),
            duration: 10000,
            airlineCompany: airlineCompany.Name,
            price: q.MinPrice,
            currency: currency.Symbol,
            favorite: false,
          };
        }),
      };
    case QUOTES_FETCH_FAILED:
      return {
        ...state,
        flights: [],
      };
    default:
      return state;
  }
};

const selectDateDepartureAC = (date) => ({
  type: SELECT_DATE_DEPARTURE,
  date,
});

const addToFavoritesAC = (flightId) => ({
  type: ADD_TO_FAVORITES,
  flightId,
});

const deleteFromFavoritesAC = (flightId) => ({
  type: DELETE_FROM_FAVORITES,
  flightId,
});

const quotesFetchSucceededAC = (data) => ({
  type: QUOTES_FETCH_SUCCEEDED,
  data,
});

const quotesFetchFailedAC = (error) => ({
  type: QUOTES_FETCH_FAILED,
  error,
});

export default searchReducer;

export {
  selectDateDepartureAC,
  addToFavoritesAC,
  deleteFromFavoritesAC,
  quotesFetchSucceededAC,
  quotesFetchFailedAC,
};

