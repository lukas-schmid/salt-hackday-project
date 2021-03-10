import { render, screen } from "@testing-library/react";
import FoodItem from "./FoodItem";

test("FoodItem", () => {
  render(<FoodItem />);
  const button = screen.getByRole("button");
  const img = screen.getByRole("img");
  expect(button).toBeInTheDocument();
  expect(img).toBeInTheDocument();
});
