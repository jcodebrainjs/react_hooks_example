import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "semantic-ui-css/semantic.min.css";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
    <Router>
      <div>
        <Switch>
          <Route path="/" component={App} />
        </Switch>
      </div>
    </Router>,
  document.getElementById("root")
);

serviceWorker.unregister();
