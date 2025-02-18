import { render, screen } from "@testing-library/react";
import { Input } from "./input";

describe("Input", () => {
  test("정상적으로 렌더링되어야 합니다.", () => {
    render(<Input data-testid="input" />);

    const input = screen.getByTestId("input");

    expect(input).toBeInTheDocument();
  });
});
