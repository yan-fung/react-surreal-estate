import React from "react";
import { render, screen } from "@testing-library/react";
import App from "../components/App";

it("renders correctly", () => {
  render(<App />);
  const linkElement = screen.getByText(/Surreal Estate/i);
  expect(linkElement).toBeInTheDocument();
});
