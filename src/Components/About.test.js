import React from "react";
import { getByTestId, render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import About from "./About";

let container;

beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
});

it("should launch without crash", () => {
  render(<About />, container);
});
it("should launch without crash with null data", () => {
  render(<About data={null} />, container);
});
