import React, { useEffect } from "react"
import { RouteComponentProps } from "react-router-dom"
import { Event, actionCreators } from "../../store/Event"
import { RootState } from "../../store"
import { connect } from "react-redux"

type ParamsProps = null
export interface Props extends RouteComponentProps<ParamsProps> {
    events: ReadonlyArray<Event>
    getEvents: () => void
}

const EventList = ({ events, getEvents }: Props): JSX.Element => {
    useEffect(() => {
        getEvents()
    }, [])
    return (
        <>
            <h3>EventList</h3>
            <div className="list">
                {events.map(({ id, name }) => (
                    <div key={id}>{name}</div>
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