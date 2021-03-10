import { render, screen } from "@testing-library/react";
import InputForm from "./InputForm";

test("InputForm", () => {
  render(<InputForm />);
  const label = screen.getByLabelText(/Add food/i);
  const button = screen.getByRole("button");
  const input = screen.getByRole("input");
  expect(label).toBeInTheDocument();
  expect(button).toBeInTheDocument();
  expect(input).toBeInTheDocument();
});
