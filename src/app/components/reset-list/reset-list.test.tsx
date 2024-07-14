import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import { ResetList } from "./reset-list";
import { useRegisterContext } from "@/app/contexts/register-context";

jest.mock("@/app/contexts/register-context", () => ({
  useRegisterContext: jest.fn(),
}));

describe("ResetList component test", () => {
  const mockSetOpenRemoveModal = jest.fn();
  const mockOpenRemoveModal = jest.fn();

  beforeEach(() => {
    (useRegisterContext as jest.Mock).mockReturnValue({
      setOpenRemoveModal: mockSetOpenRemoveModal,
      openRemoveModal: mockOpenRemoveModal,
    });
  });

  it("a correct ResetList render", () => {
    render(<ResetList />);

    const resetListRender = screen.getByRole("button", {
      name: /Resetar Cards/i,
    });
    fireEvent.click(resetListRender);

    expect(mockSetOpenRemoveModal).toHaveBeenCalledWith(true);
    expect(resetListRender).toBeInTheDocument();

    const removeModalRender = screen.getByText(/Tem certeza?/i);

    expect(removeModalRender).toBeInTheDocument();
  });
});
