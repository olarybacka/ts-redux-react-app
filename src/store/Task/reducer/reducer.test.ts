import { taskReducer, actionCreators, INITIAL_STATE } from ".."
import { testTask } from "../../../fixtures/Task"

describe("taskReducer", () => {
  it("calls updateTasks action", () => {
    const action = {
      type: actionCreators.updateTasks.type,
      payload: [testTask],
    }
    expect(taskReducer(INITIAL_STATE, action)).toMatchSnapshot()
  })
  it("calls updateTask action", () => {
    const action = {
      type: actionCreators.updateTask.type,
      payload: testTask,
    }
    expect(taskReducer(INITIAL_STATE, action)).toMatchSnapshot()
  })
})
