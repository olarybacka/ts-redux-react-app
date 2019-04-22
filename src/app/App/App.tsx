import { History } from "history"
import React from "react"
import { Route, Switch } from "react-router-dom"

import { CalendarBoard } from "../CalendarBoard"
import { EventItem, EventList } from "../Event"
import { Header } from "../Header"
import "./App.css"

export interface Props {
  history: History
}
export default ({ history: { push } }: Props) => (
  <div className="App">
    <Header />
    <div onClick={() => push("/calendar-board")}>Calendar Board</div>
    <div onClick={() => push("/event-list")}>Event List</div>
    <Switch>
      <Route exact path="/calendar-board" render={CalendarBoard} />
      <Route exact path="/event-list" component={EventList} />
      <Route exact path="/event-item" component={EventItem} />
    </Switch>
  </div>
)
