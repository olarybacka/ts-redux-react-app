import React from "react"
import { shallow, ShallowWrapper } from "enzyme"
import { Header } from "."

describe("Header", () => {
  it("render component", () => {
    const wrapper: ShallowWrapper = shallow(<Header />)
    expect(wrapper).toMatchSnapshot()
  })
})
