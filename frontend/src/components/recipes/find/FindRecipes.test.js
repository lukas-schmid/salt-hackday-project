import { render, screen } from "@testing-library/react";
import FindRecipes from "./FindRecipes";

test("FindRecipes", () => {
  render(<FindRecipes />);
  const checkbox = screen.getAllByRole("input");
  expect(checkbox).toBeInTheDocument();
});
