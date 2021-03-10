import { render, screen } from "@testing-library/react";
import App from "./App";

test("App", () => {
  render(<App />);
  const fridge = screen.getByText(/your fridge/i);
  expect(fridge).toBeInTheDocument();
});
