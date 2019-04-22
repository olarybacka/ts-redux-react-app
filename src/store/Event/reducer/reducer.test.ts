import { actionCreators, Event, eventReducer, INITIAL_STATE } from ".."

export const testEvent: Event = {
  id: 1,
  name: "Name",
  startDate: expect.any(Date),
  endDate: expect.any(Date),
  description: "description",
  location: "location",
  category: {
    id: 1,
    name: "name",
  },
}

describe("EventReducer", () => {
  it("calls updateEvents action", () => {
    const action = {
      type: actionCreators.updateEvents.type,
      payload: [testEvent],
    }
    expect(eventReducer(INITIAL_STATE, action)).toMatchSnapshot()
  })
  it("calls updateEvent action", () => {
    const action = {
      type: actionCreators.updateEvent.type,
      payload: testEvent,
    }
    expect(eventReducer(INITIAL_STATE, action)).toMatchSnapshot()
  })
})
