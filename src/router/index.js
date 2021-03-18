import React from "react";
import { Switch, Route } from "react-router-dom";
import { Dashboard, About } from "../page";
export default function Routes() {
  return (
    <Switch>
      <Route path="/about">
        <About />
      </Route>
      <Route path="/">
        <Dashboard />
      </Route>
    </Switch>
  );
}
