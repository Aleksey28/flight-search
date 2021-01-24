import "./App.css";
import React from "react";
import { Route, Switch } from "react-router";
import LoginContainer from "../Login/LoginContainer";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import SearchFlightsContainer from "../SearchFlights/SearchFlightsContainer";

function App({logged}) {
  return (
    <div className="page">
      <Switch>
        <Route path={"/sign-in"}>
          <LoginContainer/>
        </Route>
        <ProtectedRoute exact path="/" logged={logged}>
          <SearchFlightsContainer />
        </ProtectedRoute>
      </Switch>
    </div>
  );
}

export default App;
