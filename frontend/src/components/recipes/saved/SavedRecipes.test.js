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
  const notFound = screen.getByText(/no recipes saved/i);
  expect(notFound).toBeInTheDocument();
});
