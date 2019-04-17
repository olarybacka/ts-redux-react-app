import React from "react"
import { Calendar } from "../../common/UI"
import "./Board.css"

export default () => {
  return (
    <>
      <h3>Calendar Board</h3>
      <div className="calendar-wrapper">
        <Calendar />
      </div>
    </>
  )
}
