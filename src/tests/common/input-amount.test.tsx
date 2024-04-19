import "@testing-library/jest-dom";

import { render, screen } from "@testing-library/react";
import InputAmount from "../../components/common/input-amount";

describe("InputAmount Component", () => {
  it("displays balance and accepts input", () => {
    render(
      <InputAmount
        name="amount"
        placeholder="Amount"
        balance="50"
        label="Amount"
      />
    );
    expect(screen.getByText("Balance: 50 USDC")).toBeInTheDocument();
    const inputElement = screen.getByPlaceholderText("Amount");
    expect(inputElement).toBeInTheDocument();
  });
});
