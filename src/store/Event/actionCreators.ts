import ActionCreator from "../actionCreator"
import { Event } from "."

export default {
  getEvents: ActionCreator<null>("EVENT_GET_EVENTS"),
  updateEvents: ActionCreator<Event[]>("EVENT_UPDATE_EVENTS"),
  getEvent: ActionCreator<number>("EVENT_GET_EVENT"),
  updateEvent: ActionCreator<Event>("EVENT_UPDATE_EVENT"),
  setError: ActionCreator<string>("EVENT_SET_ERROR"),
}
