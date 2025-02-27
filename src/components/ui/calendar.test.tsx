import { render, screen } from "@testing-library/react";
import { Calendar } from "./calendar";

describe("Calendar", () => {
  test("정상적으로 렌더링되어야 합니다.", () => {
    render(<Calendar />);

    const calendar = screen.getByRole("grid");

    expect(calendar).toBeInTheDocument();
  });
});
