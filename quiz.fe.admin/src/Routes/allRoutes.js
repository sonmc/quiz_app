import React from "react";
import { Redirect } from "react-router-dom";

//Tables
import GridTables from "../pages/Tables/GridTables";
import Home from "../pages/Pages/Home";

//pages

import Cover404 from "../pages/Authentication/Errors/Cover404";
import Error500 from "../pages/Authentication/Errors/Error500";
//login
import Login from "../pages/Authentication/Login";

const authProtectedRoutes = [
  { path: "/tables-gridjs", component: GridTables },
  { path: "/home", component: Home },

  {
    path: "/",
    exact: true,
    component: () => <Redirect to="/home" />,
  },
];

const publicRoutes = [
  { path: "/login", component: Login },

  { path: "/auth-404-cover", component: Cover404 },
  { path: "/auth-500", component: Error500 },
];

export { authProtectedRoutes, publicRoutes };
