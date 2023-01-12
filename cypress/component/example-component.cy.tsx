import React from "react";
import Demo from "../../src/components/Demo/Demo";

describe("example-component.cy.ts", () => {
  it("playground", () => {
    // mount your component
    cy.mount(<Demo />);

    cy.get("h1").should("exist");
  });
});
