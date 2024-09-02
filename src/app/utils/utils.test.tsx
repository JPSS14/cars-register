import "@testing-library/jest-dom";
import { powerRating, torqueRating } from "./utils";

describe("a utils torqueRating test", () => {
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

describe("a utils powerRating test", () => {
  it("a powerRating 591", () => {
    expect(powerRating(591)).toBe(5);
  });

  it("a powerRating 589", () => {
    expect(powerRating(589)).toBe(4);
  });

  it("a powerRating 479", () => {
    expect(powerRating(479)).toBe(3);
  });

  it("a powerRating 104", () => {
    expect(powerRating(104)).toBe(2);
  });

  it("a powerRating 84", () => {
    expect(powerRating(84)).toBe(1);
  });
});
