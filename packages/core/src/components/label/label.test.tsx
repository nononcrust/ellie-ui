import { render, screen } from "@testing-library/react";
import { Label } from "./label";

describe("Label", () => {
  test("정상적으로 렌더링되어야 합니다.", () => {
    render(<Label>레이블</Label>);

    const label = screen.getByText("레이블");

    expect(label).toBeInTheDocument();
  });
});
