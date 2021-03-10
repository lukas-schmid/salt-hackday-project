import { render, screen } from "@testing-library/react";
import RecipeDetails from "./RecipeDetails";

test("RecipeDetails", () => {
  render(<RecipeDetails />);
  const recipeImg = screen.getByRole("img");
  const saveButton = screen.getByRole("button");
  expect(recipeImg).toBeInTheDocument();
  expect(saveButton).toBeInTheDocument();
});
