import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Input } from "./input";

describe("Input", () => {
  test("정상적으로 렌더링되어야 합니다.", () => {
    render(<Input data-testid="input" />);

    const input = screen.getByTestId("input");

    expect(input).toBeInTheDocument();
  });

  test("텍스트가 정상적으로 입력되어야 합니다.", async () => {
    render(<Input data-testid="input" />);

    const input = screen.getByTestId("input");

    const user = userEvent.setup();

    expect(input).toHaveValue("");

    await user.type(input, "텍스트");

    expect(input).toHaveValue("텍스트");
  });

  test("defaultValue로 초기값을 설정할 수 있어야 합니다.", () => {
    render(<Input data-testid="input" defaultValue="초기값" />);

    const input = screen.getByTestId("input");

    expect(input).toHaveValue("초기값");
  });
});
