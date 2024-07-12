import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { TextArea } from "./text-area";
import style from "./text-area.module.scss";

describe("TextArea component test", () => {
  it("a correct TextArea render", () => {
    render(<TextArea defaultValue={"Teste"}></TextArea>);

    const textAreaRender = screen.getByText(/Teste/i);

    expect(textAreaRender).toBeInTheDocument();
    expect(textAreaRender).toHaveClass(style.textArea);
  });

  it("a correct TextArea render with label", () => {
    render(<TextArea label="Teste"></TextArea>);

    const textAreaRender = screen.getByText(/Teste/i);

    expect(textAreaRender).toBeInTheDocument();
    expect(textAreaRender).toHaveClass(style.label);
  });

  it("a correct TextArea render with errorMessage", () => {
    render(<TextArea defaultValue={"Teste"} errorMessage="Erro"></TextArea>);

    const textAreaRender = screen.getByText(/Teste/i);

    expect(textAreaRender).toBeInTheDocument();
    expect(textAreaRender).toHaveClass(style.errorTextArea);
  });
});
