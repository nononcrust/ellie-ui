import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Link from "next/link";
import { Button } from "./button";

describe("Button", () => {
  test("정상적으로 렌더링되어야 합니다.", async () => {
    render(<Button>버튼</Button>);

    const button = screen.getByRole("button");

    expect(button).toBeInTheDocument();
  });

  test("asChild 속성이 true일 때 children이 렌더링되어야 합니다.", async () => {
    render(
      <Button asChild>
        <Link href="/">링크</Link>
      </Button>,
    );

    const link = screen.getByText("링크");

    expect(link).toBeInTheDocument();
  });

  test("[a11y] 버튼이 disabled인 경우 aria-disabled 속성이 true여야 합니다.", async () => {
    render(<Button disabled>버튼</Button>);

    const button = screen.getByRole("button");

    expect(button).toHaveAttribute("aria-disabled", "true");
  });

  test("[a11y] Enter 키로 버튼을 클릭할 수 있어야 합니다.", async () => {
    const onClick = vitest.fn();

    render(<Button onClick={onClick}>버튼</Button>);

    const user = userEvent.setup();

    const button = screen.getByRole("button");

    button.focus();

    await user.keyboard("{Enter}");

    expect(onClick).toHaveBeenCalledTimes(1);
  });

  test("[a11y] Space 키로 버튼을 클릭할 수 있어야 합니다.", async () => {
    const onClick = vitest.fn();

    render(<Button onClick={onClick}>버튼</Button>);

    const user = userEvent.setup();

    const button = screen.getByRole("button");

    button.focus();

    await user.keyboard(" ");

    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
