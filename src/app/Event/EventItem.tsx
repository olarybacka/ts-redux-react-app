import React, { useEffect } from "react"
import { connect } from "react-redux"
import { RouteComponentProps } from "react-router-dom"

import { Action, RootState } from "../../store"
import { actionCreators, Event } from "../../store/Event"

export interface Props extends RouteComponentProps<null> {
  event: Event
  getEvent: (payload: number) => Action<number>
}
const EventItem = ({
  event: { name, location, description },
  getEvent,
  location: {
    state: { id },
  },
}: Props) => {
  useEffect(() => {
    getEvent(id)
  }, [])
  return (
    <div>
      <div>{name}</div>
      <div>{location}</div>
      <div>{description}</div>
    </div>
  )
}
const mapStateToProps = ({ event: { event } }: RootState) => ({
  event,
})
const mapDispatchToProps = {
  getEvent: actionCreators.getEvent.create,
}
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(EventItem)
