import "./App.css";
import React from "react";
import { Route, Switch } from "react-router";
import Login from "./components/Login/Login";

function App() {
  return (
    <div className="page">
      <Switch>
        <Route path={'/sign-in'}>
          <Login />
        </Route>
        <Route path={'/'}>
          base url
        </Route>
      </Switch>
    </div>
  );
}

export default App;
