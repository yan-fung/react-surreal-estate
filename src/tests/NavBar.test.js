import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import NavBar from "../components/NavBar";

describe("NavBar", () => {
  it("renders navbar correctly", () => {
    const { asFragment } = render(
      <MemoryRouter>
        <NavBar />
      </MemoryRouter>
    );
    expect(asFragment()).toMatchSnapshot();
  });
  it("renders View Properties correctly", () => {
    render(
      <MemoryRouter>
        <NavBar />
      </MemoryRouter>
    );
    const text = screen.getByText("View Properties");

    expect(text).toBeInTheDocument();
  });
});
