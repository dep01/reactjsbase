import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Layout } from "../components";

export default function Routes() {
  return (
    <Router>
      <Route path="/">
        <Layout />
      </Route>
    </Router>
  );
}
