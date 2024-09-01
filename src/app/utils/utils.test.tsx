import "@testing-library/jest-dom";
import { torqueRating } from "./utils";

describe("a utils test", () => {
  it("a torqueRating test 100", () => {
    expect(torqueRating(100)).toBe(5);
  });

  it("a torqueRating test 77", () => {
    expect(torqueRating(77)).toBe(4);
  });

  it("a torqueRating test 39", () => {
    expect(torqueRating(39)).toBe(3);
  });

  it("a torqueRating test 17", () => {
    expect(torqueRating(17)).toBe(2);
  });

  it("a torqueRating test 10", () => {
    expect(torqueRating(10)).toBe(1);
  });
});
