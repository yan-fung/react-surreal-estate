import React from "react";
import { render } from "@testing-library/react";
import PropertyCard from "../components/PropertyCard";

describe("PropertyCard", () => {
  const validProps = {
    title: "test_title",
    type: "test type",
    bathrooms: "test bathrooms",
    bedrooms: "test bedrooms",
    price: "test price",
    city: "test city",
    email: "test email",
  };
  it("renders correctly", () => {
    const { asFragment } = render(
      <PropertyCard
        title={validProps.title}
        type={validProps.type}
        bathrooms={validProps.bathrooms}
        bedrooms={validProps.bedrooms}
        price={validProps.price}
        city={validProps.city}
        email={validProps.email}
      />
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it("renders correct value for props", () => {
    const { getByTestId, getByText } = render(
      <PropertyCard
        title={validProps.title}
        type={validProps.type}
        bathrooms={validProps.bathrooms}
        bedrooms={validProps.bedrooms}
        price={validProps.price}
        city={validProps.city}
        email={validProps.email}
      />
    );
    expect(getByText(/test_title/)).toHaveClass("property-card__title");
    expect(getByTestId("property-bathrooms")).toHaveAttribute(
      "class",
      "property-card_bathrooms"
    );
  });
});
