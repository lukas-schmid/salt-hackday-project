import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Main from "./Main";

test("Main", () => {
  render(
    <BrowserRouter>
      <Main />
    </BrowserRouter>
  );
  const fridge = screen.getByText(/your fridge/i);
  const shoppingList = screen.getByText(/shopping list/i);
  const recipes = screen.getByText(/recipes/i);
  expect(fridge).toBeInTheDocument();
  expect(shoppingList).toBeInTheDocument();
  expect(recipes).toBeInTheDocument();
});
