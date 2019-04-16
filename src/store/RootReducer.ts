import { connectRouter } from "connected-react-router"
import { History } from "history"
import { combineReducers } from "redux"

import { eventReducer } from "./Event"
import { taskReducer } from "./Task"

export default (history: History) =>
  combineReducers({
    router: connectRouter(history),
    task: taskReducer,
    event: eventReducer,
  })
