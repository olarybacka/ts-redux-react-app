import React from "react"
import { History } from "history"
import { Route, Switch } from "react-router-dom"

import { Header } from "../Header"
import { TaskList } from "./Task"
import "./App.css"

export interface Props {
  history: History
}
export default ({ history: { push } }: Props) => (
  <div className="App">
    <Header />
    <div onClick={() => push("/first")}>First</div>
    <div onClick={() => push("/second")}>Second</div>
    <Switch>
      <Route exact path="/first" render={() => <div>First Page</div>} />
      <Route exact path="/task-list" component={TaskList} />
    </Switch>
  </div>
)
