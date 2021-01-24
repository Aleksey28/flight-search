import "./App.css";
import React from "react";
import { Route, Switch } from "react-router";
import LoginContainer from "./components/Login/LoginContainer";

function App() {
  return (
    <div className="page">
      <Switch>
        <Route path={"/sign-in"}>
          <LoginContainer/>
        </Route>
        <Route path={"/"}>
          base url
        </Route>
      </Switch>
    </div>
  );
}

export default App;
