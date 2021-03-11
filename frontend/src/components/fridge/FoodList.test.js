import { render, screen } from "@testing-library/react";
import FoodList from "./FoodList";

test("FoodList", () => {
  const items = ["milk", "banana"];
  render(<FoodList items={items} />);
  const listItems = screen.getAllByRole("article");
  expect(listItems).toHaveLength(2);
});
