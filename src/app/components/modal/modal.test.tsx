import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { Modal } from "./modal";
import styles from "./modal.module.scss";

describe("Modal component test", () => {
  it("a correct Modal render", () => {
    render(
      <Modal isOpen={true}>
        <div>Teste</div>
      </Modal>
    );

    const modalRender = screen.getByText(/Teste/i);

    expect(modalRender).toBeInTheDocument();
  });

  it("a correct closed Modal render", () => {
    render(
      <Modal isOpen={false}>
        <div>Teste</div>
      </Modal>
    );

    const modalRender = screen.queryByRole("dialog");

    expect(modalRender).not.toBeInTheDocument();
  });
});
