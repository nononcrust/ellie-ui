import { render, screen } from "@testing-library/react";
import { Divider } from "./divider";

describe("Divider", () => {
  test("정상적으로 렌더링되어야 합니다.", () => {
    render(<Divider data-testid="divider" />);

    const divider = screen.getByTestId("divider");

    expect(divider).toBeInTheDocument();
  });
});
