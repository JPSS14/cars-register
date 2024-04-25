import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { Hr } from "./hr";

describe("Hr", () => {
  test("a correct Hr render", () => {
    render(<Hr />);

    const hrRender = screen.getByTestId("Hr");

    expect(hrRender).toBeInTheDocument();
  });
});
