import { Action } from "../actionCreator"
import { TaskState, actionCreators } from "."

const INITIAL_STORE: TaskState = {
  tasks: [],
  task: null,
  error: "",
  count: 0,
  previos: null,
  next: null,
}

export default (state: TaskState = INITIAL_STORE, { type, payload }: Action<any>): TaskState => {
  switch (type) {
    case actionCreators.updateTasks.type:
      return {
        ...state,
        tasks: payload,
        error: "",
      }
    case actionCreators.updateTask.type:
      return {
        ...state,
        task: payload,
        error: "",
      }
    default:
      return state
  }
}
