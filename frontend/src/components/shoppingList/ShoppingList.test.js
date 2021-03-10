import { render, screen } from "@testing-library/react";
import ShoppingList from "./ShoppingList";

test("ShoppingList", () => {
  render(<ShoppingList />);
  const button = screen.getByRole("button");
  expect(button).toBeInTheDocument();
});
