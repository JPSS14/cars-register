import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import { CardBlank } from "./card-blank";
import { useRegisterContext } from "@/app/contexts/register-context";

jest.mock("@/app/contexts/register-context", () => ({
  useRegisterContext: jest.fn(),
}));

describe("CardBlank component test", () => {
  const mockSetOpenRegisterModal = jest.fn();

  beforeEach(() => {
    (useRegisterContext as jest.Mock).mockReturnValue({
      setOpenRegisterModal: mockSetOpenRegisterModal,
    });
  });

  it("a correct CardBlank render", () => {
    render(<CardBlank />);

    const cardBlankRender = screen.getByTestId(/cardBlank/i);
    expect(cardBlankRender).toBeInTheDocument();

    const imageRender = screen.getByAltText(/Mini logo Cars Register/i);
    expect(imageRender).toBeInTheDocument();
    expect(imageRender).toHaveAttribute("src", "/cars-register-mini-logo.svg");
  });

  it("a correct open modal behavior", () => {
    render(<CardBlank />);

    const cardBlankRender = screen.getByTestId(/cardBlank/i);
    fireEvent.click(cardBlankRender);

    expect(mockSetOpenRegisterModal).toHaveBeenCalledWith(true);
  });
});
