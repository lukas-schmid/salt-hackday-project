import { render, screen } from "@testing-library/react";
import Recipes from "./Recipes";

test("Recipes", () => {
  render(<Recipes />);
  const savedRecipes = screen.getByText(/saved recipes/i);
  const findRecipes = screen.getByText(/find new recipes/i);
  expect(savedRecipes).toBeInTheDocument();
  expect(findRecipes).toBeInTheDocument();
});
