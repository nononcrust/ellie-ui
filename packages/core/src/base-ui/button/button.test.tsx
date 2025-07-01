import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Button } from "./button";

describe("Button", () => {
  test("정상적으로 렌더링되어야 합니다.", async () => {
    render(<Button>버튼</Button>);

    const button = screen.getByRole("button");

    expect(button).toBeInTheDocument();
  });

  test("render 속성을 전달했을 때 해당 컴포넌트가 렌더링되어야 합니다.", async () => {
    render(<Button render={<a href="/">링크</a>} />);

    const link = screen.getByText("링크");

    expect(link).toBeInTheDocument();
  });

  test("[a11y] Enter 키로 버튼을 클릭할 수 있어야 합니다.", async () => {
    const onClick = vi.fn();

    render(<Button onClick={onClick}>버튼</Button>);

    const user = userEvent.setup();

    const button = screen.getByRole("button");

    button.focus();

    await user.keyboard("{Enter}");

    expect(onClick).toHaveBeenCalledTimes(1);
  });

  test("[a11y] Space 키로 버튼을 클릭할 수 있어야 합니다.", async () => {
    const onClick = vi.fn();

    render(<Button onClick={onClick}>버튼</Button>);

    const user = userEvent.setup();

    const button = screen.getByRole("button");

    button.focus();

    await user.keyboard(" ");

    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
