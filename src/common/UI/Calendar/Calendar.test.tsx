import { addMonths, format } from "date-fns"
import pl from "date-fns/locale/pl"
import { shallow } from "enzyme"
import React from "react"
import Calendar from "./Calendar"

describe("Calendar", () => {
  it("renders month label", () => {
    const wrapper = shallow(<Calendar />)
    const currentMonth = format(new Date(), "MMMM", { locale: pl })
    expect(wrapper.find(".month-label").text()).toEqual(currentMonth)
  })
  it("renders next month label", () => {
    const wrapper = shallow(<Calendar />)
    const nextMonth = format(addMonths(new Date(), 1), "MMMM", { locale: pl })
    wrapper.find(".next").simulate("click")
    expect(wrapper.find(".month-label").text()).toEqual(nextMonth)
  })
  it("renders prev month label", () => {
    const wrapper = shallow(<Calendar />)
    const prevMonth = format(addMonths(new Date(), -1), "MMMM", { locale: pl })
    wrapper.find(".prev").simulate("click")
    expect(wrapper.find(".month-label").text()).toEqual(prevMonth)
  })
})
