const SET_INPUT = "SET_INPUT";

const initialState = {
  email: "",
  password: "",
};

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_INPUT:
      return {
        ...state,
        [action.name]: action.value,
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

export default loginReducer;

export {
  setInputAC,
};
