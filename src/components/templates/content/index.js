import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { About, Dashboard } from "../../../page";

export default function AppContent(props) {
  return (
    <Switch>
      <Route path="/about">
        <About />
      </Route>
      <Route path="">
        <Dashboard />
      </Route>
    </Switch>
  );
}
