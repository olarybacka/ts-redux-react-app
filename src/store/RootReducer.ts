import { connectRouter } from "connected-react-router"
import { History } from "history"
import { combineReducers } from "redux"

import { eventReducer } from "./Event"

export default (history: History) =>
  combineReducers({
    router: connectRouter(history),
    event: eventReducer,
  })
