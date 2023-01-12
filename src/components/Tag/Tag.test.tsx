import { render, screen } from "@testing-library/react";
import { expect } from "vitest";
import { Tag } from ".";

describe("App", () => {
  it("renders headline", () => {
    render(<Tag>asd</Tag>);

    const element = screen.getByTestId("tag-testid");

    expect(element).toBeInTheDocument();
  });
});
