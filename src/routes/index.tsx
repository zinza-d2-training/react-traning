import React from "react";
import Login from "../components/auth/Login";
import Dashboard from "../components/Dashboard";
import Admin from "../layouts/Admin";
import Auth from "../layouts/Auth";
import Route from "./Route";

const routes = [
  <Route key="login" exact path="/login" component={Login} layout={Auth} />,
  <Route
    key="dashboard"
    path="/"
    withAuth
    component={Dashboard}
    layout={Admin}
  />,
];

export default routes;
