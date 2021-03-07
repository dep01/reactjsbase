import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { About, Test, Dashboard } from "../../../page";

import router from "../../../router";

export default function AppContent(props) {
  return (
    <Switch>
      <Route path="/about">
        <About />
      </Route>
      <Route path="/test">
        <Test />
      </Route>
      <Route path="/dashboard">
        <Dashboard />
      </Route>
    </Switch>
  );
}
