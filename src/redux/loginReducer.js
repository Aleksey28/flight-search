const SET_INPUT = "SET_INPUT";
const SET_LOGGED = "SET_LOGGED";

const initialState = {
  email: "",
  password: "",
  logged: localStorage.getItem("logged") || false,
};

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_INPUT:
      return {
        ...state,
        [action.name]: action.value,
      };
    case SET_LOGGED:
      localStorage.setItem("logged", action.logged);
      return {
        ...state,
        logged: action.logged,
      };
    default:
      return state;
  }
};

const setInputAC = ({ name, value }) => ({
  type: SET_INPUT,
  name,
  value,
});

const setLoggedAC = ({ logged }) => ({
  type: SET_LOGGED,
  logged,
});

export default loginReducer;

export {
  setInputAC,
  setLoggedAC,
};
