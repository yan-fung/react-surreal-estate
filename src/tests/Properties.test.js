import React from "react";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Properties from "../components/Properties";

describe("Properties", () => {
  const validProps = {
    properties: [
      {
        key: "1234",
        title: "Two beds house",
        bathrooms: "2",
        bedrooms: "2",
        type: "Semi-detached",
        price: "1000",
        email: "testing@gmail.com",
        city: "Leeds",
      },
      {
        key: "1234",
        title: "Two beds house",
        bathrooms: "2",
        bedrooms: "2",
        type: "Semi-detached",
        price: "1000",
        email: "testing@gmail.com",
        city: "Leeds",
      },
    ],
  };

  it("renders correctly", () => {
    const { asFragment } = render(
      <MemoryRouter>
        <Properties properties={validProps.properties} />
      </MemoryRouter>
    );

    expect(asFragment()).toMatchSnapshot();
  });

  // it("renders correct values for props", () => {
  //   const { getByText } = render(
  //     <Properties properties={validProps.properties} />
  //   );
  //   expect(getByText("Two beds house")).toHaveClass("item");
  // });
});
