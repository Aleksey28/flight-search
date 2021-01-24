import place1 from "../images/Place1.jpg";
import place2 from "../images/Place2.jpg";
import place3 from "../images/Place3.jpg";
import place4 from "../images/Place4.jpg";
import plane from "../images/plane.svg";

const SELECT_DATE_DEPARTURE = "SELECT_DATE_DEPARTURE";
const ADD_TO_FAVORITES = "ADD_TO_FAVORITES";
const DELETE_FROM_FAVORITES = "DELETE_TO_FAVORITES";

const initialState = {
  departureAirport: "SVO",
  arrivalAirport: "JFK",
  departureDate: new Date(2020, 6,7),
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
  ],
  flights: [
    {
      id: 1,
      picture: plane,
      departureAirport: "SVO",
      departureAirportName: "Moscow",
      arrivalAirport: "JFK",
      arrivalAirportName: "New York City",
      departureDate: new Date(2020, 7, 7),
      duration: 5000,
      airlineCompany: "Aeroflot",
      price: 23924,
      currency: "₽",
      favorite: true,
    },
    {
      id: 2,
      picture: plane,
      departureAirport: "SVO",
      departureAirportName: "Moscow",
      arrivalAirport: "JFK",
      arrivalAirportName: "New York City",
      departureDate: new Date(2020, 7, 7),
      duration: 5000,
      airlineCompany: "Aeroflot",
      price: 23924,
      currency: "₽",
      favorite: false,
    },
    {
      id: 3,
      picture: plane,
      departureAirport: "SVO",
      departureAirportName: "Moscow",
      arrivalAirport: "JFK",
      arrivalAirportName: "New York City",
      departureDate: new Date(2020, 7, 7),
      duration: 5000,
      airlineCompany: "Aeroflot",
      price: 23924,
      currency: "₽",
      favorite: true,
    },
    {
      id: 4,
      picture: plane,
      departureAirport: "SVO",
      departureAirportName: "Moscow",
      arrivalAirport: "JFK",
      arrivalAirportName: "New York City",
      departureDate: new Date(2020, 7, 7),
      duration: 5000,
      airlineCompany: "Aeroflot",
      price: 23924,
      currency: "₽",
      favorite: false,
    },
    {
      id: 5,
      picture: plane,
      departureAirport: "SVO",
      departureAirportName: "Moscow",
      arrivalAirport: "JFK",
      arrivalAirportName: "New York City",
      departureDate: new Date(2020, 7, 7),
      duration: 5000,
      airlineCompany: "Aeroflot",
      price: 23924,
      currency: "₽",
      favorite: false,
    },
  ],
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

export default searchReducer;

export {
  selectDateDepartureAC,
  addToFavoritesAC,
  deleteFromFavoritesAC,
};
