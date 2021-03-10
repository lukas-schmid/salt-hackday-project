import { render, screen } from "@testing-library/react";
import Shopping from "./Shopping";

test("Shopping", () => {
  render(<Shopping />);
  const label = screen.getByLabelText(/Add food/i);
  const input = screen.getByRole("textbox");
  expect(label).toBeInTheDocument();
  expect(input).toBeInTheDocument();
});
