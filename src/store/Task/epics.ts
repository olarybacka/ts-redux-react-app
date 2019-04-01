import { combineEpics, ofType, Epic } from "redux-observable"
import { of } from "rxjs"
import { mergeMap, catchError } from "rxjs/operators"
import { apiUrl, ajax } from "../../common/services"
import { Action } from "../actionCreator"
import { actionCreators } from "."
import { RootState } from ".."

const { getTasks, getTask, updateTasks, updateTask, setError } = actionCreators

const getTasksEpic: Epic<Action<null>, Action<any>, RootState> = actions$ =>
  actions$.pipe(
    ofType(getTasks.type),
    mergeMap(() =>
      ajax.get(apiUrl("tasks")).pipe(
        mergeMap(({ response }) => of(updateTasks.create(response))),
        catchError(error => of(setError.create(error))),
      ),
    ),
  )
const getTaskEpic: Epic<Action<number>, Action<any>, RootState> = actions$ =>
  actions$.pipe(
    ofType(getTask.type),
    mergeMap(id =>
      ajax.get(apiUrl(`task/${id}`)).pipe(
        mergeMap(({ response }) => of(updateTask.create(response))),
        catchError(error => of(setError.create(error))),
      ),
    ),
  )
export const epics = combineEpics(getTasksEpic, getTaskEpic)
