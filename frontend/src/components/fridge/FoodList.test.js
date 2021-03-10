import { render, screen } from "@testing-library/react";
import FoodList from "./FoodList";

test("FoodList", () => {
  const items = [{ name: "Unused Item" }, { name: "Used Item" }];
  render(<FoodList items={items} />);
  const listItems = screen.getAllByRole("listitem");
  expect(listItems).toHaveLength(2);
});
