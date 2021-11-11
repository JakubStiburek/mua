import {render} from "@testing-library/react";
import Home from "../Home";


describe("(Page) Home", () => {
  it("should match snapshot", () => {
    expect(render(<Home />)).toMatchSnapshot;
  })
})
