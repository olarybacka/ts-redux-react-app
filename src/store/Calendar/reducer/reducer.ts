import { Action, actionCreators, CalendarState } from ".."

const currDate = new Date()

export const INITIAL_STATE: CalendarState = {
  year: currDate.getFullYear(),
  month: currDate.getMonth(),
  currentDay: currDate.getDate(),
}

const incrementMonth = (current: number): number =>
  current === 11 ? 0 : current + 1
const decrementMonth = (current: number): number =>
  current === 0 ? 11 : current - 1
const incrementYear = (incMonth: number, currentYear: number): number =>
  incMonth === 0 ? currentYear + 1 : currentYear
const decrementYear = (decMonth: number, currentYear: number): number =>
  decMonth === 11 ? currentYear - 1 : currentYear

export default (
  state: CalendarState = INITIAL_STATE,
  { type }: Action,
): CalendarState => {
  switch (type) {
    case actionCreators.increment.type:
      return {
        ...state,
        month: incrementMonth(state.month),
        year: incrementYear(incrementMonth(state.month), state.year),
      }
    case actionCreators.decrement.type:
      return {
        ...state,
        month: decrementMonth(state.month),
        year: decrementYear(decrementMonth(state.month), state.year),
      }
    default:
      return state
  }
}
