import React from "react";
import ReactDOM from "react-dom";
import { StoreProvider } from "./store";
import "semantic-ui-css/semantic.min.css";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

ReactDOM.render(
  <StoreProvider>
    <Router>
      <div>
        <Switch>
          <Route path="/" component={App} />
        </Switch>
      </div>
    </Router>
  </StoreProvider>,
  document.getElementById("root")
);

serviceWorker.unregister();
