import { render, screen } from "@testing-library/react";
import { Fab } from "./fab";

describe("Fab", () => {
  test("정상적으로 렌더링되어야 합니다.", () => {
    render(<Fab>버튼</Fab>);

    const fab = screen.getByText("버튼");

    expect(fab).toBeInTheDocument();
  });
});
