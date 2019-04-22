import React, { useEffect } from "react"
import { connect } from "react-redux"
import { RouteComponentProps } from "react-router-dom"
import { RootState } from "../../store"
import { actionCreators, Event } from "../../store/Event"

type ParamsProps = null
export interface Props extends RouteComponentProps<ParamsProps> {
  events: ReadonlyArray<Event>
  getEvents: () => void
}

const EventList = ({ events, getEvents, history: { push }, ...rest }: Props): JSX.Element => {
  useEffect(() => {
    getEvents()
  }, [])
  const handleClick = (id: number | null) => () => {
    push(`/event-item`, {id})
  }
  return (
    <>
      <h3>EventList</h3>
      <div className="list">
        {events.map(event => (
          <div onClick={handleClick(event.id)} key={event.name}>
            {event.name}
          </div>
        ))}
      </div>
    
    </>
  )
}

const mapStateToProps = ({ event: { events } }: RootState) => ({
  events,
})
const mapDispatchToProps = {
  getEvents: actionCreators.getEvents.create,
}
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(EventList)
