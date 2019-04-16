import { routerMiddleware } from "connected-react-router"
import { applyMiddleware, createStore } from "redux"
import { composeWithDevTools } from "redux-devtools-extension"
import { combineEpics, createEpicMiddleware } from "redux-observable"
import { createRootReducer } from "."
import { history } from "../common/services"
import { eventEpics, EventState } from "./Event"
import { taskEpics, TaskState } from "./Task"

const epicMiddleware = createEpicMiddleware()
const rootEpic: any = combineEpics(taskEpics, eventEpics)

export interface RootState {
  history: (history: History) => any
  task: TaskState
  event: EventState
}

export default createStore(
  createRootReducer(history),
  composeWithDevTools(
    applyMiddleware(epicMiddleware, routerMiddleware(history)),
  ),
)

epicMiddleware.run(rootEpic)
