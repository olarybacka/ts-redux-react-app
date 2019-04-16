import { shallow, ShallowWrapper } from "enzyme"
import React from "react"
import { Header } from "."

describe("Header", () => {
  it("render component", () => {
    const wrapper: ShallowWrapper = shallow(<Header />)
    expect(wrapper).toMatchSnapshot()
  })
})
