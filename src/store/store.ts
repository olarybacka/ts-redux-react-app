import { applyMiddleware, createStore } from "redux"
import { createRootReducer } from "."
import { history } from "../common/services"
import { routerMiddleware } from "connected-react-router"
import { composeWithDevTools } from "redux-devtools-extension"
import { combineEpics, createEpicMiddleware } from "redux-observable"
import { TaskState, taskEpics } from "./Task"
import { EventState, eventEpics } from "./Event"

const epicMiddleware = createEpicMiddleware()
const rootEpic: any = combineEpics(taskEpics, eventEpics)

export type RootState = {
  history: (history: History) => any
  task: TaskState,
  event: EventState
}

export default createStore(
  createRootReducer(history),
  composeWithDevTools(applyMiddleware(epicMiddleware, routerMiddleware(history))),
)

epicMiddleware.run(rootEpic)
