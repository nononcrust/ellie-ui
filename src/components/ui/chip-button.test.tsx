import { render, screen } from "@testing-library/react";
import { ChipButton } from "./chip-button";

describe("ChipButton", () => {
  test("정상적으로 렌더링되어야 합니다.", () => {
    render(<ChipButton>버튼</ChipButton>);

    const chipButton = screen.getByRole("button");

    expect(chipButton).toBeInTheDocument();
  });
});
