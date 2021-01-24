import "./App.css";
import React from "react";
import { Route, Switch } from "react-router";
import LoginContainer from "../Login/LoginContainer";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";

function App({logged}) {
  return (
    <div className="page">
      <Switch>
        <Route path={"/sign-in"}>
          <LoginContainer/>
        </Route>
        <ProtectedRoute exact path="/" logged={logged}>
            base url
        </ProtectedRoute>
      </Switch>
    </div>
  );
}

export default App;
