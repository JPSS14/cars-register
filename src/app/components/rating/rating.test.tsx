import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { Rating } from "./rating";

describe("Rating component", () => {
  it("renders the correct number of filled and empty stars", () => {
    const { container } = render(<Rating value={3} />);

    const filledStars = container.querySelectorAll(
      'svg[data-testid="filled-star"]'
    );
    expect(filledStars.length).toBe(3);

    const emptyStars = container.querySelectorAll(
      'svg[data-testid="empty-star"]'
    );
    expect(emptyStars.length).toBe(2);
  });
});
