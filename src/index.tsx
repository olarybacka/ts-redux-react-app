import { ConnectedRouter } from "connected-react-router"
import React from "react"
import ReactDOM from "react-dom"
import { Provider } from "react-redux"
import { Route, Switch } from "react-router-dom"
import { App } from "./app/App"
import { history } from "./common/services/history"
import "./index.css"
import { store } from "./store"

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <>
        <Switch>
          <Route path="/" component={App} />
        </Switch>
      </>
    </ConnectedRouter>
  </Provider>,
  document.getElementById("root"),
)
