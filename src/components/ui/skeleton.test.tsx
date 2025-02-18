import { render, screen } from "@testing-library/react";
import { Skeleton } from "./skeleton";

describe("Skeleton", () => {
  test("정상적으로 렌더링되어야 합니다.", () => {
    render(<Skeleton width={100} height={100} data-testid="skeleton" />);

    const skeleton = screen.getByTestId("skeleton");

    expect(skeleton).toBeInTheDocument();
  });
});
