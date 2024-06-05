import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { Footer } from "./footer";
import { RouterContext } from "next/dist/shared/lib/router-context.shared-runtime";
import { NextRouter } from "next/router";

const createMockRouter = (overrides: Partial<NextRouter>): NextRouter => ({
  basePath: "",
  pathname: "/",
  route: "/",
  asPath: "/",
  query: {},
  push: jest.fn(),
  replace: jest.fn(),
  reload: jest.fn(),
  back: jest.fn(),
  prefetch: jest.fn().mockResolvedValue(undefined),
  beforePopState: jest.fn(),
  events: {
    on: jest.fn(),
    off: jest.fn(),
    emit: jest.fn(),
  },
  isFallback: false,
  isLocaleDomain: false,
  isReady: true,
  forward: jest.fn(),
  isPreview: false,
  ...overrides,
});

describe("Footer component", () => {
  test("renders the footer with the correct text and link", () => {
    render(
      <RouterContext.Provider value={createMockRouter({})}>
        <Footer />
      </RouterContext.Provider>
    );

    const logo = screen.getByAltText("Cars Register Logo");
    expect(logo).toBeInTheDocument();
    expect(logo).toHaveAttribute("src", "/cars-register-logo.svg");

    const link = screen.getByRole("link", { name: /cars register logo/i });
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute("href", "/");
  });
});
