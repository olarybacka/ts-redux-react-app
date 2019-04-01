import { History } from "history"
import { applyMiddleware, createStore, combineReducers } from "redux"
import { routerMiddleware } from "connected-react-router"
import { combineEpics, createEpicMiddleware } from "redux-observable"
import { connectRouter } from "connected-react-router"
import { composeWithDevTools } from "redux-devtools-extension"

import { history } from "../common/services/history"
import { taskReducer, TaskState } from "./Task"

export type RootState = {
  history: (history: History) => any
  task: TaskState
  user: ({}) => {} // TODO
}

const createRootReducer = (history: History) =>
  combineReducers({
    router: connectRouter(history),
    task: taskReducer,
    user: (state = {}) => state, // TODO
  })

const epicMiddleware = createEpicMiddleware()
const rootEpic = combineEpics()

const store = createStore(
  createRootReducer(history),
  composeWithDevTools(applyMiddleware(epicMiddleware, routerMiddleware(history))),
)
epicMiddleware.run(rootEpic)

export default store
