import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { CardList } from "./card-list";
import { cars } from "@/app/constants/cars";

const mockCars = cars;

describe("CardList component test", () => {
  it("a correct CardList render", () => {
    render(<CardList items={mockCars} />);

    const cardListRender = screen.getByText(/Resultados/i);
    expect(cardListRender).toBeInTheDocument();

    const cardBlankRender = screen.getByText(/Registrar Carro/i);
    expect(cardBlankRender).toBeInTheDocument();
  });
});
