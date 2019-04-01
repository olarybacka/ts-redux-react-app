import actionsCreators from './actionCreators'
import { Task, Action } from './'

export type TaskState = {
	tasks: ReadonlyArray<Task>
	task: Task | null
	count: number
	previos: number | null
	next: number | null
	error: string
}

const INITIAL_STORE: TaskState = {
	tasks: [],
	task: null,
	error: '',
	count: 0,
	previos: null,
	next: null
}

export default (state: TaskState = INITIAL_STORE, { type, payload }: Action<any>): TaskState => {
	switch (type) {
		case actionsCreators.updateTasks.type:
			return {
				...state,
				tasks: payload,
				error: ''
			}
		case actionsCreators.updateTask.type:
			return {
				...state,
				task: payload,
				error: ''
			}
		default:
			return state
	}
}
