import { combineReducers } from "redux"
import { History } from "history"
import { connectRouter } from "connected-react-router"

import { taskReducer } from "./Task"

export default (history: History) =>
  combineReducers({
    router: connectRouter(history),
    task: taskReducer,
  })
