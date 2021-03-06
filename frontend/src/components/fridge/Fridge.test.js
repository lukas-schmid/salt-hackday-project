import { render, screen } from "@testing-library/react";
import Fridge from "./Fridge";

test("Fridge", () => {
  render(<Fridge />);
  const label = screen.getByLabelText(/Add food/i);
  const input = screen.getByRole("textbox");
  expect(label).toBeInTheDocument();
  expect(input).toBeInTheDocument();
});
