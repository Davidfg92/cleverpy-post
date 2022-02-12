import React from "react";
import { render, screen } from "@testing-library/react";
import { Footer } from "./Footer";

describe("When the Footer component is rendered", () => {
  test("Then Footer of application should be in the document", () => {
    render(<Footer />);
    expect(
      screen.getByText("All rights reserved - David Ferrer 2022")
    ).toBeInTheDocument();
  });
});
