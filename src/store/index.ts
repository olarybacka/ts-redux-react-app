import { History } from "history"
import { applyMiddleware, createStore, combineReducers } from "redux"
import { routerMiddleware } from "connected-react-router"
import { combineEpics, createEpicMiddleware } from "redux-observable"
import { connectRouter } from "connected-react-router"
import { composeWithDevTools } from "redux-devtools-extension"

import { history } from "../common/services"

import { taskReducer, TaskState, taskEpics } from "./Task"
import { eventReducer, EventState, eventEpics } from "./Event"

export type RootState = {
  history: (history: History) => any
  task: TaskState
  event: EventState
  user: ({}) => {} // TODO
}

const createRootReducer = (history: History) =>
  combineReducers({
    router: connectRouter(history),
    task: taskReducer,
    event: eventReducer,
    user: (state = {}) => state, // TODO
  })

const epicMiddleware = createEpicMiddleware()
const rootEpic: any = combineEpics(taskEpics, eventEpics)

const store = createStore(
  createRootReducer(history),
  composeWithDevTools(applyMiddleware(epicMiddleware, routerMiddleware(history))),
)
epicMiddleware.run(rootEpic)

export default store
