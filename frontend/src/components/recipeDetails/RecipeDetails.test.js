import { render, screen } from "@testing-library/react";
import RecipeDetails from "./RecipeDetails";
import { BrowserRouter } from "react-router-dom";

test("RecipeDetails", () => {
  render(
    <BrowserRouter>
      <RecipeDetails />
    </BrowserRouter>
  );
  const loading = screen.getByText(/loading/i);
  expect(loading).toBeInTheDocument();
});
