import { createBrowserHistory, History } from 'history'
import { applyMiddleware, createStore, combineReducers } from 'redux'
import { routerMiddleware } from 'connected-react-router'
import { combineEpics, createEpicMiddleware } from 'redux-observable'
import { connectRouter } from 'connected-react-router'
import { composeWithDevTools } from 'redux-devtools-extension'

import { taskReducer } from './Task'

const epicMiddleware = createEpicMiddleware()
export type RootState = {
	history: (history: History<any>) => any
	task: typeof taskReducer
	user: ({}) => {}
}
const rootEpic: any = combineEpics()
const createRootReducer = (history: History) =>
	combineReducers({
		router: connectRouter(history),
		task: taskReducer,
		user: (state = {}) => state
	})

export const history = createBrowserHistory()

const store = createStore(
	createRootReducer(history),
	composeWithDevTools(applyMiddleware(epicMiddleware, routerMiddleware(history)))
)
epicMiddleware.run(rootEpic)

export default store
