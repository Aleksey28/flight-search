const SET_EMAIL = "SET_EMAIL";
const SET_PASSWORD = "SET_PASSWORD";

const initialState = {
  email: "",
  password: "",
};

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_EMAIL:
      return {
        ...state,
        email: action.value,
      };
    case SET_PASSWORD:
      return {
        ...state,
        password: action.value,
      };
    default:
      return state;
  }
};

const setEmail = (value) => ({
  type: SET_EMAIL,
  value,
});
const setPassword = (value) => ({
  type: SET_PASSWORD,
  value,
});

export default loginReducer;

export {
  setEmail,
  setPassword,
};
