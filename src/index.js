import { ConnectedRouter } from "connected-react-router";
import React from "react";
import ReactDOM from "react-dom";
import { Route, Switch } from "react-router";
import { Provider } from "react-redux";
import { ConnectedRouter } from "connected-react-router";
import { Route, Switch } from "react-router";
import store, { history } from "./store";
import UsersPage from "./users/components/UserPage";

ReactDOM.render(
  <Provider>
    <ConnectedRouter history={history}>
      <Switch>
        <Route exact path="/" component={UsersPage} />
      </Switch>
    </ConnectedRouter>
  </Provider>,
  document.getElementById("#omar")
);
