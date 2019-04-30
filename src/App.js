import React from "react";
import { Route, Switch } from "react-router-dom";
import { Home, Navigation, Page404, About } from "./components";

const App = () => {
  return (
    <div id="app" style={{ display: "none" }}>
      <Navigation />
      <Switch>
        <Route exact component={Home} path="/page/:page(\d+)" />
        <Route exact component={Home} path="/" />
        <Route exact component={About} path="/about" />
        <Route component={Page404} />
      </Switch>
    </div>
  );
};

export default App;
