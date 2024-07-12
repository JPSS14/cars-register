import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { Banner } from "./banner";

describe("Banner component test", () => {
  it("a correct Banner render", () => {
    render(<Banner />);

    const bannerRender = screen.getByAltText(/Koenigsegg Jesko 2020 imagem/i);

    expect(bannerRender).toBeInTheDocument();
    expect(bannerRender).toHaveAttribute(
      "src",
      expect.stringContaining("Koenigsegg-Jesko-2020.jpg")
    );
  });
});
