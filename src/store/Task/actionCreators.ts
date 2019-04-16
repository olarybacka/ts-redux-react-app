import { Task } from "."
import ActionCreator from "../actionCreator"

export default {
  getTasks: ActionCreator<null>("TASK_GET_TASKS"),
  updateTasks: ActionCreator<Task[]>("TASK_UPDATE_TASKS"),
  getTask: ActionCreator<number>("TASK_GET_TASK"),
  updateTask: ActionCreator<Task>("TASK_UPDATE_TASK"),
  setError: ActionCreator<string>("TASK_SET_ERROR"),
}
