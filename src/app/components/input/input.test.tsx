import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { Input } from "./input";
import style from "./input.module.scss";

describe("Input component test", () => {
  it("a correct Input render", () => {
    render(<Input placeholder="teste" />);

    const inputRender = screen.getByPlaceholderText(/teste/i);

    expect(inputRender).toBeInTheDocument();
  });

  it("a correct Input with label render", () => {
    render(<Input label="teste" />);

    const inputRender = screen.getByText(/teste/i);

    expect(inputRender).toBeInTheDocument();
  });

  it("a correct Input with error render", () => {
    render(<Input errorMessage="Erro" />);

    const inputRender = screen.getByText(/Erro/i);

    expect(inputRender).toBeInTheDocument();
    expect(inputRender).toHaveClass(style.errorMessage);
  });
});
