import { ActionCreator } from ".."

export default {
  increment: ActionCreator<null>("INCREMENT"),
  decrement: ActionCreator<null>("DECREMENT"),
}
