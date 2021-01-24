import { Redirect, Route } from "react-router-dom";
import React from "react";

const ProtectedRoute = ({ children, ...props }) => {
  return (
    <Route>
      {
        () => props.logged ? children : <Redirect to="/sign-in"/>
      }
    </Route>
  );
};

export default ProtectedRoute;
