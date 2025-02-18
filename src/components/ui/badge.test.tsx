import { render, screen } from "@testing-library/react";
import { Badge } from "./badge";

describe("Badge", () => {
  test("정상적으로 렌더링되어야 합니다.", () => {
    render(<Badge>뱃지</Badge>);

    const badge = screen.getByText("뱃지");

    expect(badge).toBeInTheDocument();
  });
});
