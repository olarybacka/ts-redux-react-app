import reducer, { CalendarState } from "./reducer"
import { actionCreators } from ".."

describe("CalendarReducer", () => {
  it("increments to next year", () => {
    const action = {
      type: actionCreators.increment.type,
    }
    const initialState: CalendarState = {
      year: 2000,
      month: 11,
    }
    const expectedMonth = 0
    const expectedYear = 2001

    const state = reducer(initialState, action)

    expect(state).toEqual({ year: expectedYear, month: expectedMonth })
  })
  it("decrements to prev year", () => {
    const action = {
      type: actionCreators.decrement.type,
    }
    const initialState: CalendarState = {
      year: 2000,
      month: 0,
    }
    const expectedMonth = 11
    const expectedYear = 1999

    const state = reducer(initialState, action)

    expect(state).toEqual({ year: expectedYear, month: expectedMonth })
  })
})
