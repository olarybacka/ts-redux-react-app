import { combineReducers } from "redux"
import { History } from "history"
import { connectRouter } from "connected-react-router"

import { taskReducer } from "./Task"
import { eventReducer } from './Event'

export default (history: History) =>
  combineReducers({
    router: connectRouter(history),
    task: taskReducer,
    event: eventReducer
  })
