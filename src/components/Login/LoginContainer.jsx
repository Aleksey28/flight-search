import { setInputAC, setLoggedAC } from "../../redux/loginReducer";
import { connect } from "react-redux";
import Login from "./Login";

const mapStateToProps = (state) => {
  return {
    pageLogin: state.pageLogin,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setInput: (value) => {
      dispatch(setInputAC(value));
    },
    setLogged: (value) => {
      dispatch(setLoggedAC(value));
    }
  };
};

const LoginContainer = connect(mapStateToProps, mapDispatchToProps)(Login);

export default LoginContainer;
