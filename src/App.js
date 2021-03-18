import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
import { Layout } from "./components";
import { Login } from "./page";
import "./App.css";
import "antd/dist/antd.css";

export default function App() {
  return (
    <Router>
      <Route path="/Dashboard">
        <Layout />
      </Route>
      <Route path="/">
        <Redirect to="/Auth" />
      </Route>
      <Route path="/Auth">
        <Login />
      </Route>
    </Router>
  );
}
