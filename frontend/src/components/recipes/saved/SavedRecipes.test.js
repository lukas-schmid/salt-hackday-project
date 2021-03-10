import { render, screen } from "@testing-library/react";
import SavedRecipes from "./SavedRecipes";

test("SavedRecipes", () => {
  const items = [{ name: "Unused Item" }, { name: "Used Item" }];
  render(<SavedRecipes items={items} />);
  const listItems = screen.getAllByRole("listitem");
  expect(listItems).toHaveLength(2);
});
