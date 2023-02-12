import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import AddProperty from "../components/AddProperty";

describe("Add Property", () => {
  it("renders the form of add property correctly", () => {
    const { asFragment } = render(
      <MemoryRouter>
        <AddProperty />
      </MemoryRouter>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it("renders `Property type` correctly", () => {
    render(
      <MemoryRouter>
        <AddProperty />
      </MemoryRouter>
    );

    const text = screen.getByText("Property type");

    expect(text).toBeInTheDocument("Property type");
  });
});
