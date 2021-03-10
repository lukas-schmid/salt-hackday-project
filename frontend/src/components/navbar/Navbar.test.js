import { render, screen } from "@testing-library/react";
import Navbar from "./Navbar";
import { BrowserRouter } from "react-router-dom";

test("Navbar", () => {
  render(
    <BrowserRouter>
      <Navbar />
    </BrowserRouter>
  );
  const logo = screen.getByRole("img");
  const homeButton = screen.getByRole("navigation");
  expect(logo).toBeInTheDocument();
  expect(homeButton).toBeInTheDocument();
});
