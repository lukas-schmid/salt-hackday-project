import { render, screen } from "@testing-library/react";
import FindRecipes from "./FindRecipes";
import { BrowserRouter } from "react-router-dom";

test("FindRecipes", () => {
  render(
    <BrowserRouter>
      <FindRecipes />
    </BrowserRouter>
  );
  const checkbox = screen.getAllByRole("checkbox");
  expect(checkbox[0]).toBeInTheDocument();
});
