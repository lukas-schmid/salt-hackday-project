import { render, screen } from "@testing-library/react";
import Footer from "./Footer";

test("Footer", () => {
  render(<Footer />);
  const fridge = screen.getByText(/your fridge/i);
  const shoppingList = screen.getByText(/shopping list/i);
  const recipes = screen.getByText(/recipes/i);
  expect(fridge).toBeInTheDocument();
  expect(shoppingList).toBeInTheDocument();
  expect(recipes).toBeInTheDocument();
});
