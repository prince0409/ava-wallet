import "@testing-library/jest-dom";

import { render, screen } from "@testing-library/react";
import Input from "../../components/common/input";

describe("Input Component", () => {
  it("renders with correct placeholder and type", () => {
    render(
      <Input type="text" name="testInput" placeholder="Test Placeholder" />
    );
    const inputElement = screen.getByPlaceholderText("Test Placeholder");
    expect(inputElement).toBeInTheDocument();
    expect(inputElement).toHaveAttribute("type", "text");
  });
});
