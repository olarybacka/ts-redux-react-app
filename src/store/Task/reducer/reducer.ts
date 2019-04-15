import { Action } from "../.."
import { TaskState, actionCreators } from ".."

export const INITIAL_STATE: TaskState = {
  tasks: [],
  task: null,
  error: "",
  count: 0,
  previos: null,
  next: null,
}

export default (state: TaskState = INITIAL_STATE, { type, payload }: Action<any>): TaskState => {
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
