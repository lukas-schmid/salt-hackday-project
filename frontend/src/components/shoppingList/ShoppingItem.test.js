import { render, screen } from "@testing-library/react";
import ShoppingItem from "./ShoppingItem";

test("ShoppingItem", () => {
  render(<ShoppingItem />);
  const button = screen.getByRole("button");
  expect(button).toBeInTheDocument();
});
