import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import { RemoveModal } from "./remove-modal";
import { useRegisterContext } from "@/app/contexts/register-context";
import { removeLocalStorage } from "@/app/utils/utils";

jest.mock("@/app/contexts/register-context", () => ({
  useRegisterContext: jest.fn(),
}));

jest.mock("@/app/utils/utils", () => ({
  removeLocalStorage: jest.fn(),
}));

describe("RemoveModal component test", () => {
  const mockSetOpenRemoveModal = jest.fn();
  const mockSetCarList = jest.fn();

  beforeEach(() => {
    (useRegisterContext as jest.Mock).mockReturnValue({
      setOpenRemoveModal: mockSetOpenRemoveModal,
      setCarList: mockSetCarList,
    });
  });

  it("a correct RemoveModal render", () => {
    render(<RemoveModal isOpen={true} />);

    const removeModalTitle = screen.getByText(/Tem certeza?/i);
    expect(removeModalTitle).toBeInTheDocument();

    const backButton = screen.getByRole("button", { name: /voltar/i });
    expect(backButton).toBeInTheDocument();

    const resetButton = screen.getByRole("button", { name: /resetar/i });
    expect(resetButton).toBeInTheDocument();
  });

  it("a cancel button test", () => {
    render(<RemoveModal isOpen={true} />);

    const backButton = screen.getByRole("button", { name: /voltar/i });
    fireEvent.click(backButton);

    expect(mockSetOpenRemoveModal).toHaveBeenCalledWith(false);
  });

  it("a reset button test", () => {
    render(<RemoveModal isOpen={true} />);

    const resetButton = screen.getByRole("button", { name: /resetar/i });
    fireEvent.click(resetButton);

    expect(removeLocalStorage).toHaveBeenCalledWith("item_key");
    expect(mockSetCarList).toHaveBeenCalledWith(expect.any(Array));
    expect(mockSetOpenRemoveModal).toHaveBeenCalledWith(false);
  });

  it("not render RemoveModal test", () => {
    render(<RemoveModal isOpen={false} />);

    const removeModalTitle = screen.queryByText(/Tem certeza/i);
    expect(removeModalTitle).not.toBeInTheDocument();
  });
});
