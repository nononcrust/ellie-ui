import { render, screen } from "@testing-library/react";
import { Label } from "./label";

describe("Label", () => {
  test("정상적으로 렌더링되어야 합니다.", () => {
    render(<Label>라벨</Label>);

    const label = screen.getByText("라벨");

    expect(label).toBeInTheDocument();
  });
});
