import { render, screen } from "@testing-library/react";
import FindRecipes from "./FindRecipes";

test("FindRecipes", () => {
  render(<FindRecipes />);
  const checkbox = screen.getAllByRole("checkbox");
  expect(checkbox[0]).toBeInTheDocument();
});
