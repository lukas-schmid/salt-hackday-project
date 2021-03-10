import { render, screen } from "@testing-library/react";
import Recipes from "./Recipes";
import { BrowserRouter } from "react-router-dom";

test("Recipes", () => {
  render(
    <BrowserRouter>
      <Recipes />
    </BrowserRouter>
  );
  const savedRecipes = screen.getByText(/saved recipes/i);
  const findRecipes = screen.getByText(/find new recipes/i);
  expect(savedRecipes).toBeInTheDocument();
  expect(findRecipes).toBeInTheDocument();
});
