import { combineEpics, ofType, Epic } from "redux-observable"
import { of } from "rxjs"
import { mergeMap, catchError } from "rxjs/operators"
import { apiUrl, ajax } from "../../common/services"
import { Action } from "../actionCreator"
import { actionCreators } from "."
import { RootState } from ".."

const { getEvents, getEvent, updateEvents, updateEvent, setError } = actionCreators

const getEventsEpic: Epic<Action<null>, Action<any>, RootState> = actions$ =>
  actions$.pipe(
    ofType(getEvents.type),
    mergeMap(() =>
      ajax.get(apiUrl("events")).pipe(
        mergeMap(({ response }) => of(updateEvents.create(response))),
        catchError(error => of(setError.create(error))),
      ),
    ),
  )
const getEventEpic: Epic<Action<number>, Action<any>, RootState> = actions$ =>
  actions$.pipe(
    ofType(getEvent.type),
    mergeMap(id =>
      ajax.get(apiUrl(`event/${id}`)).pipe(
        mergeMap(({ response }) => of(updateEvent.create(response))),
        catchError(error => of(setError.create(error))),
      ),
    ),
  )
export const epics = combineEpics(getEventsEpic, getEventEpic)
