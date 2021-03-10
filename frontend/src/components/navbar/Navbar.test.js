import { render, screen } from "@testing-library/react";
import Navbar from "./Navbar";

test("Navbar", () => {
  render(<Navbar />);
  const logo = screen.getByRole("img");
  const homeButton = screen.getByRole("button");
  expect(logo).toBeInTheDocument();
  expect(homeButton).toBeInTheDocument();
});
