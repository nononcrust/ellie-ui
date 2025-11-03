import { render, screen } from "@testing-library/react";
import { Chip } from "./chip";

describe("Chip", () => {
  test("정상적으로 렌더링되어야 합니다.", () => {
    render(<Chip>레이블</Chip>);

    const chip = screen.getByText("레이블");

    expect(chip).toBeInTheDocument();
  });
});
