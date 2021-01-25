import "./App.css";
import React from "react";
import { Route, Switch } from "react-router";
import LoginContainer from "../Login/LoginContainer";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import SearchFlightsContainer from "../SearchFlights/SearchFlightsContainer";
import Header from "../Header/Header";
import cn from "classnames";

function App({ logged, setLogged }) {
  return (
    <div className={cn("page", { page_bg_image: !logged })}>
      <Switch>
        <Route path={"/sign-in"}>
          <LoginContainer/>
        </Route>
        <ProtectedRoute exact path="/" logged={logged}>
          <Header setLogged={setLogged}/>
          <SearchFlightsContainer/>
        </ProtectedRoute>
      </Switch>
    </div>
  );
}

export default App;
