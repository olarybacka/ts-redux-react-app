import { applyMiddleware, createStore } from "redux"
import { createRootReducer } from "."
import { history } from "../common/services"
import { routerMiddleware } from "connected-react-router"
import { composeWithDevTools } from "redux-devtools-extension"
import { combineEpics, createEpicMiddleware } from "redux-observable"
import { TaskState, taskEpics } from "./Task"

const epicMiddleware = createEpicMiddleware()
const rootEpic: any = combineEpics(taskEpics)

export type RootState = {
  history: (history: History) => any
  task: TaskState
}

export default createStore(
  createRootReducer(history),
  composeWithDevTools(applyMiddleware(epicMiddleware, routerMiddleware(history))),
)

epicMiddleware.run(rootEpic)
