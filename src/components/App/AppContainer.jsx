import { connect } from "react-redux";
import App from "./App";
import { setLoggedAC } from "../../redux/loginReducer";

const mapStateToProps = (state) => {
  return {
    logged: state.pageLogin.logged,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setLogged: (value) => {
      dispatch(setLoggedAC(value));
    },
  };
};

const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);

export default AppContainer;
