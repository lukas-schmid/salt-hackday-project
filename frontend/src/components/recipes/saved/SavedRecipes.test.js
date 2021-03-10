import { render, screen } from "@testing-library/react";
import SavedRecipes from "./SavedRecipes";
import { BrowserRouter } from "react-router-dom";

test("SavedRecipes", () => {
  const items = [{ name: "Unused Item" }, { name: "Used Item" }];
  render(
    <BrowserRouter>
      <SavedRecipes items={items} />
    </BrowserRouter>
  );
  const listItems = screen.getAllByRole("article");
  expect(listItems).toHaveLength(2);
});
