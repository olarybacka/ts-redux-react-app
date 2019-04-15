/// <reference path="../../../../declarations/calendar.d.ts" />
import { Calendar } from "calendar"
import { format } from "date-fns"
import pl from "date-fns/locale/pl"
import React, { useReducer } from "react"
import {
  Action,
  actionCreators,
  CalendarState,
  INITIAL_STATE,
  reducer,
} from "../../../store/Calendar"
import "./Calendar.css"

const cMon = new Calendar(1)
const { increment, decrement } = actionCreators

const renderDay = (day: number, i: number) => (
  <div key={i} className="day">
    {day || ""}
  </div>
)
const renderWeek = (week: number[], i: number) => (
  <div key={i} className="week">
    {week.map(renderDay)}
  </div>
)

export default () => {
  const [{ year, month }, dispatch]: [
    CalendarState,
    (action: Action) => void
  ] = useReducer(reducer, INITIAL_STATE)
  return (
    <>
      <h4 className="month-label">
        {format(new Date(year, month), "MMMM", { locale: pl })}
      </h4>
      <button
        className="prev"
        onClick={() => dispatch(decrement.create())}
        type="button"
      >
        prev
      </button>
      <div className="month">{cMon.monthDays(year, month).map(renderWeek)}</div>
      <button
        className="next"
        onClick={() => dispatch(increment.create())}
        type="button"
      >
        next
      </button>
    </>
  )
}
