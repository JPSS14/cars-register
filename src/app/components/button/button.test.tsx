import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { Button } from "./button";
import styles from "./button.module.scss";

describe("Button component test", () => {
  it("a correct default Button render", () => {
    render(<Button>Teste</Button>);

    const buttonRender = screen.getByText(/Teste/i);

    expect(buttonRender).toBeInTheDocument();
    expect(buttonRender).toHaveClass(styles.primary);
  });

  it("a correct secondary Button render", () => {
    render(<Button color="secondary">Teste</Button>);

    const buttonRender = screen.getByText(/Teste/i);

    expect(buttonRender).toBeInTheDocument();
    expect(buttonRender).toHaveClass(styles.secondary);
  });

  it("a correct error Button render", () => {
    render(<Button color="error">Teste</Button>);

    const buttonRender = screen.getByText(/Teste/i);

    expect(buttonRender).toBeInTheDocument();
    expect(buttonRender).toHaveClass(styles.error);
  });

  it("a correct fullWidth Button render", () => {
    render(<Button fullWidth>Teste</Button>);

    const buttonRender = screen.getByText(/Teste/i);

    expect(buttonRender).toBeInTheDocument();
    expect(buttonRender).toHaveClass(styles.fullWidth);
  });

  it("a correct variant Button render", () => {
    render(<Button variant="outlined">Teste</Button>);

    const buttonRender = screen.getByText(/Teste/i);

    expect(buttonRender).toBeInTheDocument();
    expect(buttonRender).toHaveClass(styles.outlined);
  });
});
