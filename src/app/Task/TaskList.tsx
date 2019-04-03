import React, { useEffect } from "react"
import { RouteComponentProps } from "react-router-dom"
import { Task, actionCreators } from "../../store/Task"
import { RootState } from "../../store"
import { connect } from "react-redux"

type ParamsProps = null
export interface Props extends RouteComponentProps<ParamsProps> {
  tasks: ReadonlyArray<Task>
  getTasks: () => void
}

const TaskList = ({ tasks, getTasks }: Props): JSX.Element => {
  useEffect(() => {
    getTasks()
  }, [])
  return (
    <>
      <h3>TaskList</h3>
      <div className="list">
        {tasks.map(({ id, title }) => (
          <div key={id}>{title}</div>
        ))}
      </div>
    </>
  )
}
const mapStateToProps = ({ task: { tasks } }: RootState) => ({
  tasks,
})
const mapDispatchToProps = {
  getTasks: actionCreators.getTasks.create,
}
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TaskList)
