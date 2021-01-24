import { connect } from "react-redux";
import App from "./App";

const mapStateToProps = (state) => {
  return {
    logged: state.pageLogin.logged,
  };
};

const mapDispatchToProps = () => {
  return {};
};

const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);

export default AppContainer;
