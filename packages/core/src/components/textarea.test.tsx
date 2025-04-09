import { render, screen } from "@testing-library/react";
import { Textarea } from "./textarea";

describe("Textarea", () => {
  test("정상적으로 렌더링되어야 합니다.", () => {
    render(<Textarea data-testid="textarea" />);

    const textarea = screen.getByTestId("textarea");

    expect(textarea).toBeInTheDocument();
  });
});
