import { eventReducer, actionCreators, INITIAL_STATE } from ".."
import { testEvent } from "../../../fixtures/Event"

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
});