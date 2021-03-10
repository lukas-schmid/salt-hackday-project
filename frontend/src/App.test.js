import { render, screen } from "@testing-library/react";
import App from "./App";

test("App", () => {
  render(<App />);
  const fridge = screen.getAllByText(/your fridge/i);
  expect(fridge[0]).toBeInTheDocument();
});
